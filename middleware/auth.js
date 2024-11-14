import { useAuthStore } from '~/stores/auth'

export default defineNuxtRouteMiddleware(() => {
    const authStore = useAuthStore()

    // If the user is not authenticated, redirect to the login page
    if (!authStore.isAuthenticated) {
        return navigateTo('/login')
    }
})
