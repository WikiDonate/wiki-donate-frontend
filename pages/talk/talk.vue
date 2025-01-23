<!-- artic talk view page -->
<template>
    <main class="w-full">
        <!-- Top bar -->
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

        <!-- article talk section -->
        <section class="bg-white p-2">
            <div class="flex border-b border-b-gray-300 items-center mb-2">
                <h2 class="font-bold text-xl mr-2">
                    Big Brother (UK TV series)
                </h2>
                <NuxtLink to="/article/edit-source" exact
                    >[<span class="text-blue-500 text-sm">edit source</span
                    >]</NuxtLink
                >
            </div>

            <ul class="list-disc pl-5">
                <li>
                    Hey dont remove this. Calling it a dupe is plain wrong, do
                    your research before trashing the wikipedia in this way
                    <button
                        class="text-blue-500 text-sm focus:outline-none hover:underline"
                        @click="openModal"
                    >
                        [reply]
                    </button>
                    <ul class="list-disc pl-5">
                        <li>
                            Yes, but look at this disambig page... BB means "Big
                            Brother" and It already has a link to Big Brother
                            which itself is a disambig page which links to Big
                            Brother (UK). Or are you really saying every Big
                            Brother series should be linked to from this page!?
                            <button
                                class="text-blue-500 text-sm focus:outline-none hover:underline"
                                @click="openModal"
                            >
                                [reply]
                            </button>
                            <ul class="list-disc pl-5">
                                <li>
                                    Big Brother doesn't refer to the term
                                    generally but to the tv programme
                                    specifically so I am removing the Big
                                    Brother link. If you know of other other
                                    times when Big Brother is called BB please
                                    source them as I have sourced the use in
                                    this particular case SqueakBox
                                    <button
                                        class="text-blue-500 text-sm focus:outline-none hover:underline"
                                        @click="openModal"
                                    >
                                        [reply]
                                    </button>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>

                <li>
                    BB Microlight: A Hungarian aircraft manufacturer
                    <ul class="list-disc pl-5">
                        <li>
                            A Hungarian aircraft manufacturer
                            <button
                                class="text-blue-500 text-sm focus:outline-none hover:underline"
                                @click="openModal"
                            >
                                [reply]
                            </button>
                            <ul class="list-disc pl-5">
                                <li>
                                    A Hungarian aircraft manufacturer
                                    <button
                                        class="text-blue-500 text-sm focus:outline-none hover:underline"
                                        @click="openModal"
                                    >
                                        [reply]
                                    </button>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </section>

        <section class="bg-white p-2">
            <div class="flex border-b border-b-gray-300 items-center mb-2">
                <h2 class="font-bold text-xl mr-2">Beyond Birthday movement</h2>
                <NuxtLink to="/article/edit-source" exact
                    >[<span class="text-blue-500 text-sm">edit source</span
                    >]</NuxtLink
                >
            </div>
            <p class="bg-white-100 mb-4 text-justify text-sm">
                I moved Beyond Birthday to entertainment. It made more sense
                there, as the "People" section is real people. If you want to
                explain why it should be moved back please tell me. Longshotz
                (talk) 23:54, 14 May 2008 (UTC)
                <button
                    class="text-blue-500 text-sm focus:outline-none hover:underline"
                    @click="openModal"
                >
                    [reply]
                </button>
            </p>
        </section>

        <!-- Modal for ta;l reply -->
        <div
            v-if="isModalOpen"
            class="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50"
        >
            <div class="bg-white p-6 rounded-md w-full max-w-4xl">
                <h3 class="text-lg font-bold mb-4">Reply</h3>

                <form @submit.prevent="submitReply">
                    <div class="mb-4">
                        <QuillEditor />
                    </div>

                    <div class="flex justify-end space-x-2">
                        <button
                            type="button"
                            class="bg-gray-300 px-4 py-2 rounded-md"
                            @click="closeModal"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            class="bg-blue-600 text-white px-4 py-2 rounded-md"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </main>
</template>

<script setup>
useHead({
    title: 'Talk',
})

// Modal state
const isModalOpen = ref(false)
const newPassword = ref('')
const confirmPassword = ref('')

// Function to open the modal
const openModal = () => {
    isModalOpen.value = true
}

// Function to close the modal
const closeModal = () => {
    isModalOpen.value = false
    newPassword.value = ''
    confirmPassword.value = ''
}

// Function to handle reply
const submitReply = () => {
    console.log('Reply successfull')
    closeModal()
}
</script>
