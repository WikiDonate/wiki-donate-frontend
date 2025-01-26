<!-- new article search page -->
<template>
    <main class="w-full">
        <!-- Topbar Title -->
        <TopBarTitle :page-title="'Search Reasults'" />

        <!-- new article search result option -->
        <section class="bg-white p-2">
            <p class="bg-white-100 mb-4 text-justify text-sm">
                The page
                <NuxtLink
                    :to="`/article?title=${encodeURIComponent(title)}`"
                    exact
                    >" <span class="text-red-500 text-sm">{{ title }}</span
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

const route = useRoute()
const title = decodeURIComponent(route.query.title)
</script>
