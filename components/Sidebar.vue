<template>
    <aside class="hidden md:hidden lg:w-1/5 bg-white p-4 ml-6 lg:block">
        <h2 class="font-bold mb-4">Main Menu</h2>
        <ul class="space-y-2">
            <li v-for="(item, index) in mainMenu" :key="index">
                <NuxtLink
                    :to="item.link"
                    exact
                    :class="
                        isActiveRoute(item.link, $route)
                            ? 'block underline text-blue-500'
                            : 'block text-blue-500 hover:text-blue-500'
                    "
                >
                    {{ item.name }}
                </NuxtLink>
            </li>
        </ul>
    </aside>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import menuData from '~/static/menu.json'

// Define reactive variables
const menu = ref([])
const mainMenu = ref([])

onMounted(() => {
    menu.value = menuData
    mainMenu.value = menu.value.filter(
        (item) => item.type === 'MainMenu' || item.type === ''
    )
})

// Function to check if the current route is active
const isActiveRoute = (path, route) => route.path === path
</script>
