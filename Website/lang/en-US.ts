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
        verb: (await import('./en-US/verbs')).default,
    };
});