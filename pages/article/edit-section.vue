<!-- eslint-disable vue/html-self-closing -->
<!-- eslint-disable vue/no-v-html -->
<template>
    <main class="w-full">
        <!-- Top bar -->
        <TopBar
            :left-menu-items="[
                { name: 'Article', link: '/article?title=' + title },
                // { name: 'Talk', link: '/article/talk' },
            ]"
            :right-menu-items="[
                {
                    name: 'Edit Source',
                    link: '/article/edit-source?title=' + title,
                },
                {
                    name: 'View History',
                    link: '/article/view-history?title=' + title,
                },
            ]"
        />

        <!-- Message -->
        <div class="mt-2">
            <AlertMessage
                v-if="showAlert"
                :variant="alertVariant"
                :message="alertMessage"
                @close="showAlert = false"
            />
        </div>

        <!-- Content -->
        <section class="bg-white p-2">
            <div class="flex border-b border-b-gray-300 items-center mb-2">
                <h2 class="font-bold text-xl mr-2">
                    {{ title }}
                </h2>
            </div>
            <div>
                <QuillEditor
                    v-if="editorContent"
                    v-model:content="editorContent"
                    :initial-content="editorContent"
                />
            </div>
            <div class="w-40 mt-4">
                <FormSubmitButton text="Update" @click="handleSubmit" />
            </div>
        </section>
    </main>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { articleService } from '~/services/articleService'

useHead({
    title: 'Edit Section',
})

const route = useRoute()
const router = useRouter()
const title = route.query.title
const uuid = route.query.uuid || ''
const showAlert = ref(false)
const alertVariant = ref('')
const alertMessage = ref('')
const editorContent = ref('')
const section = ref({})

const loadSection = async (uuid) => {
    try {
        const response = await articleService.getSection(uuid)
        if (!response.success) {
            alertVariant.value = 'error'
            alertMessage.value = 'Please enter some content'
            setTimeout(() => {
                showAlert.value = true
            }, 0)
            return
        }

        section.value = response.data
        editorContent.value =
            response.data.title + '\n\n' + response.data.content
    } catch (error) {
        console.error(error)
        alertVariant.value = 'error'
        alertMessage.value = error.errors[0]
        setTimeout(() => {
            showAlert.value = true
        }, 0)
    }
}

const handleSubmit = async () => {
    showAlert.value = false

    try {
        if (!editorContent.value) {
            alertVariant.value = 'error'
            alertMessage.value = 'Please enter some content'
            setTimeout(() => {
                showAlert.value = true
            }, 0)
            return
        }

        // Prepare params
        const params = {
            uuid: section.value.uuid,
            content: editorContent.value,
        }

        const response = await articleService.updateSection(params)
        if (!response.success) {
            alertVariant.value = 'error'
            alertMessage.value = response.errors[0]
            setTimeout(() => {
                showAlert.value = true
            }, 0)
            return
        }

        router.push(`/article?title=${title}`)
    } catch (error) {
        alertVariant.value = 'error'
        alertMessage.value = error.errors[0]
        setTimeout(() => {
            showAlert.value = true
        }, 0)
    }
}

onMounted(async () => {
    await loadSection(uuid)
})
</script>
