// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'avb-stroy',
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            link: [{ rel: 'icon', type: 'image/png', href: '/logo.png' }],
        },
    },
    compatibilityDate: '2024-11-01',
    components: [
        {
            path: '~/components',
            pathPrefix: false,
        },
    ],
    devtools: { enabled: true },
    modules: ['@nuxtjs/eslint-module', '@nuxtjs/stylelint-module', 'nuxt-svgo'],
    svgo: {
        autoImportPath: '~/assets/icons/',
    },
    runtimeConfig: {
        public: {
            apiBase: 'http://localhost:3000',
        },
    },
})
