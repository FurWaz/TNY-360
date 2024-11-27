export default defineI18nLocale(async (locale) => {
    return {
        error: {
            title: 'Error {code} !',
            404: 'Page not found',
            500: 'Internal server error',
            unknown: 'Unknown error'
        },
        language: {
            fr: 'French',
            en: 'English'
        },
        theme: {
            auto: 'Auto',
            light: 'Light',
            dark: 'Dark'
        },
        home: (await import('./en-US/home')).default,
        docs: (await import('./en-US/docs')).default,
        about: (await import('./en-US/about')).default,
        order: (await import('./en-US/order')).default,
        verb: (await import('./en-US/verbs')).default,
    };
});