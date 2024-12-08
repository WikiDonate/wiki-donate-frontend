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

        <!-- article page -->
        <section class="bg-white p-2">
            <div class="flex border-b border-b-gray-300 items-center mb-2">
                <h2 class="font-bold text-xl mr-2">
                    {{ articleTitle || title }}
                </h2>
            </div>
            <div v-if="article.length === 0">
                <div>
                    <QuillEditor v-model:content="editorContent" />
                </div>
                <div class="w-40 mt-4">
                    <FormSubmitButton @click="handleSubmit" />
                </div>
            </div>
            <div v-else>
                <div v-for="item in article" :key="item.uuid">
                    <div class="flex justify-between">
                        <div v-html="item.title" />
                        <NuxtLink
                            :to="`/article/edit-section?title=${title}&uuid=${item.uuid}`"
                            exact
                            >[Edit]</NuxtLink
                        >
                    </div>
                    <div v-html="item.content" />
                    <br />
                </div>
            </div>
        </section>
    </main>
</template>

<script setup>
import { articleService } from '~/services/articleService'

useHead({
    title: 'Article',
})

const route = useRoute()
const title = route.query.title
const showAlert = ref(false)
const alertVariant = ref('')
const alertMessage = ref('')
const editorContent = ref('')
const articleTitle = ref('')
const article = ref({})

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

        // Save article
        const params = {
            title: title,
            content: editorContent.value,
        }

        const response = await articleService.saveArticle(params)
        if (!response.success) {
            alertVariant.value = 'error'
            alertMessage.value = response.errors[0]
            setTimeout(() => {
                showAlert.value = true
            }, 0)
            return
        }

        alertVariant.value = 'success'
        alertMessage.value = response.message
        setTimeout(() => {
            showAlert.value = true
            loadArticle(title)
        }, 0)
    } catch (error) {
        console.error(error)
        alertVariant.value = 'error'
        alertMessage.value = error.errors[0]
        setTimeout(() => {
            showAlert.value = true
        }, 0)
    }
}

const loadArticle = async (slug) => {
    try {
        const response = await articleService.getArticle(slug)
        if (response.success) {
            articleTitle.value = response.data.title
            article.value = response.data.sections
        } else {
            article.value = []
        }
    } catch (error) {
        article.value = []
        console.error(error)
    }
}

onMounted(async () => {
    await loadArticle(title)
})

watch(route, (newRoute) => {
    if (newRoute.query.title) {
        loadArticle(newRoute.query.title)
    }
})
</script>
