module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            imperial: {
                light: "#5F5E74",
                DEFAULT: "#222f3e",
            },
            white: {
                DEFAULT: "#FFFFFF",
            }
        },

        textColor: {
            'white': '#FFFFFF',
            'green': "#1dd1a1",
            'red': '#FF6B6B',
            'orange': '#FF9F43',
        },

        extend: {
            fontFamily: {
                sans: ['Roboto', 'sans-serif'],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
