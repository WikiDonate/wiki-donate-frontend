<template>
    <div ref="searchContainer" class="relative w-full">
        <form class="flex" @submit.prevent="handleSearch">
            <input
                v-model="searchQuery"
                type="text"
                placeholder="Search Wikidonate"
                class="flex-grow border border-gray-300 p-2 rounded-l focus:outline-none focus:ring-1 focus:ring-blue-200"
                @input="fetchSuggestions"
            />
            <button
                type="submit"
                class="bg-gray-400 text-white px-4 rounded-r hover:bg-gray-300"
            >
                Search
            </button>
        </form>

        <!-- Suggestions Dropdown -->
        <div
            v-if="suggestions.length > 0"
            id="suggestionsbar"
            class="absolute top-full mt-1 w-full bg-white border border-gray-300 rounded shadow-md z-50"
        >
            <ul>
                <li
                    v-for="suggestion in suggestions"
                    :key="suggestion"
                    class="cursor-pointer hover:bg-gray-200 px-4 py-2"
                    @click="selectSuggestion(suggestion)"
                >
                    {{ suggestion }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const searchQuery = ref('')
const suggestions = ref([])
const searchContainer = ref(null)

const fetchSuggestions = async () => {
    if (searchQuery.value.length > 2) {
        const response = await fetch(
            `https://en.wikipedia.org/w/api.php?action=opensearch&search=${encodeURIComponent(searchQuery.value)}&format=json&origin=*`
        )
        const data = await response.json()
        suggestions.value = data[1] // Suggestions array
    } else {
        suggestions.value = []
    }
}

const handleSearch = () => {
    if (suggestions.value.length > 0) {
        const searchUrl = `/article?title=${encodeURIComponent(suggestions.value[0])}`
        suggestions.value = [] // Clear suggestions
        router.push(searchUrl)
    } else {
        suggestions.value = [] // Clear suggestions
        const createUrl = `/article/new?title=${encodeURIComponent(searchQuery.value)}`
        router.push(createUrl)
    }
}

const selectSuggestion = (suggestion) => {
    searchQuery.value = suggestion
    const searchUrl = `/article?title=${encodeURIComponent(searchQuery.value)}`
    suggestions.value = []
    router.push(searchUrl)
}

const handleClickOutside = (event) => {
    if (
        searchContainer.value &&
        !searchContainer.value.contains(event.target)
    ) {
        suggestions.value = [] // Clear suggestions when clicking outside
    }
}

onMounted(() => {
    document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside)
})
</script>
