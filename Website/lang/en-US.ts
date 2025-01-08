export default defineI18nLocale(async (locale) => {
    return {
        error: {
            title: 'Yoops! We got an error!',
            404: 'Page not found',
            500: 'Internal server error',
            unknown: 'Unknown error',
            back: 'Back to home page'
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
        mobile: (await import('./en-US/mobile')).default,
        blocks: (await import('./en-US/blocks')).default,
        python: (await import('./en-US/python')).default,
        ros2: (await import('./en-US/ros2')).default,
        esp32: (await import('./en-US/esp32')).default,
    };
});