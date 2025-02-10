import { install } from 'vue3-recaptcha-v2'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(install, {
        sitekey: '6LeqBNMqAAAAALtnkmxG_F-tzP6f_c9Zkq_1wmWa',
        cnDomains: false,
    })
})
