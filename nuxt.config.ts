// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'avb-stroy',
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1.0, user-scalable=no',
            meta: [
                {
                    name: 'description',
                    content:
                        'Мы предоставляем услуги архитектуры и строительства высокого качества.',
                },
                { property: 'og:title', content: 'Архитектурно-строительная компания' },
                {
                    property: 'og:description',
                    content:
                        'Мы предоставляем услуги архитектуры и строительства высокого качества.',
                },
                { property: 'og:image', content: '/logo.png' },
                { name: 'theme-color', content: '#ffffff' },
            ],
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
    modules: [
        '@nuxtjs/eslint-module',
        '@nuxtjs/stylelint-module',
        'nuxt-svgo',
    ],
    svgo: {
        autoImportPath: '~/assets/icons/',
    },
    runtimeConfig: {
        public: {
            apiBase: 'http://localhost:3000',
        },
    },
})
