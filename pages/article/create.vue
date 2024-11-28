<!-- new article page -->
<template>
    <main class="w-full">
        <TopBarTitle :page-title="'Creating User talk: Mohammed'" />
        <!-- Top bar -->
        <TopBar
            :left-menu-items="[
                { name: 'Article', link: '/article' },
                { name: 'Talk', link: '/article/create' },
            ]"
            :right-menu-items="[
                { name: 'Edit Source', link: '/article/edit-source' },
            ]"
        />

        <!-- create new article -->
        <section class="bg-white p-2">
            <p class="bg-white-100 mb-4 text-justify text-sm">
                No messages have been posted for this user yet. Before creating
                this page, please see Wikipedia:Subpages. To start a page called
                User talk:Mohammed/sandbox, type in the box below. When you are
                done, preview the page to check for errors and then publish it.
            </p>

            <!-- Editor -->
            <QuillEditor v-model:content="editorContent" />
            <p>Editor Content: {{ editorContent }}</p>

            <div class="w-40 mt-4">
                <FormSubmitButton @click="handleSubmit" />
            </div>
        </section>
    </main>
</template>

<script setup>
useHead({
    title: 'Create Article',
})

const editorContent = ref('')
const handleSubmit = () => {
    console.log(editorContent.value)
}
</script>
