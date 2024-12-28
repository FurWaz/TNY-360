// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    modules: [
      '@nuxt/ui',
      '@nuxtjs/tailwindcss',
      '@nuxtjs/i18n',
      '@nuxt/icon',
      '@nuxtjs/color-mode'
    ],
    i18n: {
        locales: [
            {
                code: 'fr',
                file: 'fr-FR.ts'
            },
            {
                code: 'en',
                file: 'en-US.ts'
            }
        ],
        lazy: false,
        langDir: 'lang/',
        defaultLocale: 'en',
        strategy: 'no_prefix',
    },
    tailwindcss: {
        configPath: 'tailwind.config.ts'
    }
})