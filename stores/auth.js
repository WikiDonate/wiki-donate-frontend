import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null,
        roles: null,
        isAuthenticated: false,
    }),
    actions: {
        login(userData) {
            this.user = userData
            this.roles = userData.roles
            this.isAuthenticated = true
        },
        logout() {
            this.user = null
            this.roles = null
            this.isAuthenticated = false
        },
    },
})
