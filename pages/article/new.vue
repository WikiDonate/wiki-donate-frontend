<!-- new article search page -->
<template>
    <main class="w-full">
        <!-- Topbar Title -->
        <TopBarTitle :page-title="'Search Reasults'" />

        <!-- new article search result option -->
        <section class="bg-white p-2">
            <p class="bg-white-100 mb-4 text-justify text-sm">
                The page
                <NuxtLink to="/article/create" exact
                    >"<span class="text-red-500 text-sm">Mohammed 455</span
                    >"</NuxtLink
                >
                does not exist. You can create a draft and submit it for review
                or request that a redirect be created.
            </p>
        </section>
    </main>
</template>

<script setup>
useHead({
    title: 'New Article',
})
</script>
