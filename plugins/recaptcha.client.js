import { install } from 'vue3-recaptcha-v2'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(install, {
        sitekey: '6LfxPdIqAAAAAGckU3lF5UJ6V_FXjbMGvjXTfc1I',
        cnDomains: false,
    })
})
