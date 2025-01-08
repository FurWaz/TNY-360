export default defineI18nLocale(async (locale) => {
    return {
        error: {
            title: 'Erreur {code} !',
            404: 'Page non trouvée',
            500: 'Erreur interne du serveur',
            unknown: 'Erreur inconnue'
        },
        language: {
            fr: 'Français',
            en: 'Anglais'
        },
        theme: {
            auto: 'Auto',
            light: 'Clair',
            dark: 'Sombre'
        },
        home: (await import('./fr-FR/home')).default,
        docs: (await import('./fr-FR/docs')).default,
        about: (await import('./fr-FR/about')).default,
        order: (await import('./fr-FR/order')).default,
        verb: (await import('./fr-FR/verbs')).default,
        blocks: (await import('./fr-FR/blocks')).default,
        mobile: (await import('./fr-FR/mobile')).default,
        python: (await import('./fr-FR/python')).default,
        ros2: (await import('./fr-FR/ros2')).default,
        esp32: (await import('./fr-FR/esp32')).default,
    };
});