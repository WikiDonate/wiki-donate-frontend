<!-- eslint-disable vue/html-self-closing -->
<!-- eslint-disable vue/no-v-html -->
<template>
    <main class="w-full">
        <!-- Top bar -->
        <TopBar
            :left-menu-items="[
                { name: 'Article', link: '/article?title=' + title },
                { name: 'Talk', link: '/talk?title=' + title },
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
        <section v-if="editorContent" class="bg-white p-2">
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
import { talkService } from '~/services/talkService'

useHead({
    title: 'Edit Section',
})

const articleStore = useArticleStore()
const talkStore = useTalkStore()
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
    section.value = JSON.parse(talkStore.talk.sections).find(
        (item, idx) => idx == uuid
    )

    if (!section.value) {
        alertVariant.value = 'error'
        alertMessage.value = 'Section not found'
        setTimeout(() => {
            showAlert.value = true
        }, 0)

        return
    }

    editorContent.value = section.value.title + '' + section.value.content
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

        const content = JSON.parse(talkStore.talk.sections)
        content[uuid] = editorContent.value

        let resultString = ''
        content.forEach((item) => {
            if (typeof item === 'string') {
                resultString += item
            } else {
                if (item.title) resultString += item.title
                if (item.content) resultString += item.content
            }
        })

        // Prepare params
        const params = {
            uuid: talkStore.talk.uuid,
            title: talkStore.talk.title,
            slug: talkStore.talk.slug,
            content: resultString,
        }

        const response = await talkService.updateTalk(params)
        if (!response.success) {
            alertVariant.value = 'error'
            alertMessage.value = response.errors[0]
            setTimeout(() => {
                showAlert.value = true
            }, 0)
            return
        }

        router.push(
            `/talk?title=${encodeURIComponent(articleStore.article.slug)}`
        )
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
