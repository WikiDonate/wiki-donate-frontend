<!-- edit source page -->
<template>
    <main class="w-full">
        <!-- Top bar -->
        <TopBarTitle :page-title="'Editing Talk: Big Brother (UK TV series)'" />
        <TopBar
            :left-menu-items="[
                { name: 'Article', link: '/article' },
                { name: 'Talk', link: '/article/talk' },
            ]"
            :right-menu-items="[
                { name: 'Edit Source', link: '/article/edit-source' },
                { name: 'View History', link: '/article/view-history' },
            ]"
        />

        <!-- edit source section -->
        <section class="bg-white p-2 mt-4">
            <QuillEditor />

            <div class="w-40 mt-4">
                <FormSubmitButton />
            </div>
        </section>
    </main>
</template>

<script setup>
useHead({
    title: 'Edit Source',
})
</script>
