import type { Config } from 'tailwindcss'

export default {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
    ],
    theme: {
        extend: {
            transitionTimingFunction: {
                'custom': 'cubic-bezier(.1,1.2,0,1)'
            },
            transitionDuration: {
                'custom': '0.5s'
            }
        },
    },
    plugins: [],
} satisfies Config;