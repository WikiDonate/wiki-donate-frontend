<!-- edit source page -->
<template>
    <main class="w-full">
        <!-- Top bar -->
        <TopBarTitle
            :page-title="`Editing: ${encodeURIComponent(articleTitle)}`"
        />
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

        <!-- edit source section -->
        <section class="bg-white p-2 mt-4">
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
import { articleService } from '~/services/articleService'

useHead({
    title: 'Edit Source',
})

const route = useRoute()
const title = route.query.title
const articleTitle = ref('')
const article = ref({})
const editorContent = ref('')

const loadArticle = async (slug) => {
    try {
        const response = await articleService.getArticle(slug)
        if (response.success) {
            articleTitle.value = response.data.title
            article.value = response.data
            editorContent.value = response.data.sections
                .map(
                    (section) =>
                        `<!-- ${section.uuid} -->\n${section.title}\n${section.content}`
                )
                .join('\n')
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
</script>
