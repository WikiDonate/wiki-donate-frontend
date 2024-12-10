import { defineStore } from 'pinia'

export const useArticleStore = defineStore('article', {
    persist: {
        enabled: true,
        strategies: [
            {
                key: 'articleHistory',
                storage: localStorage,
            },
        ],
    },
    state: () => ({
        history: [], // Tracks the history of article changes
    }),
    actions: {
        addHistory(entry) {
            this.history = entry
        },
        clearHistory() {
            this.history = []
        },
    },
})
