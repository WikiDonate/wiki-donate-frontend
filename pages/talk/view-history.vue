<!-- eslint-disable vue/no-use-v-if-with-v-for -->
<!-- view history page -->
<template>
    <main class="w-full">
        <!-- Top bar Title -->
        <TopBarTitle :page-title="`${title}: Revision history`" />

        <!-- Top bar -->
        <TopBar
            :left-menu-items="[
                { name: 'Article', link: '/article?title=' + title },
                { name: 'Talk', link: '/talk?title=' + title },
            ]"
            :right-menu-items="[
                {
                    name: 'Edit Source',
                    link: '/talk/edit-source?title=' + title,
                },
                {
                    name: 'View History',
                    link: '/talk/view-history?title=' + title,
                },
            ]"
        />

        <!-- view history list -->
        <section class="bg-white p-2">
            <ul class="list-disc pl-5">
                <li v-for="history in revisionHistory" :key="history.uuid">
                    (<NuxtLink
                        :to="`/talk/difference-between-revisions?title=${title}&uuid=${history.uuid}`"
                        class="underline"
                        >cur</NuxtLink
                    >
                    |
                    <NuxtLink
                        :to="`/talk/difference-between-revisions?title=${title}&uuid=${history.uuid}`"
                        class="underline"
                        >prev</NuxtLink
                    >) - {{ history.createdAt }} update by
                    {{ history.user.username }}
                </li>
            </ul>
        </section>
    </main>
</template>

<script setup>
import { talkService } from '~/services/talkService'

useHead({
    title: 'Revision History',
})

const talkStore = useTalkStore()
const route = useRoute()
const title = route.query.title
const revisionHistory = ref({})

const loadHistory = async (slug) => {
    try {
        const response = await talkService.getHistory(slug)
        console.log(response)

        if (response.success) {
            revisionHistory.value = response.data
            talkStore.addHistory(response.data)
        } else {
            revisionHistory.value = []
            talkStore.clearHistory()
        }
    } catch (error) {
        revisionHistory.value = []
        talkStore.clearHistory()
        console.error(error)
    }
}

onMounted(async () => {
    await loadHistory(title)
})
</script>
