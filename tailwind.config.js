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
            },

            red: {
                DEFAULT: "#FF6B6B",
            },

            green: {
                DEFAULT: "#1dd1a1",
                dark: "#10ac84"
            },

            grey: {
                DEFAULT: "#636e72",
            },

            blue: {
                DEFAULT: "#2e86de",
            }
        },

        textColor: {
            'white': '#FFFFFF',
            'green': "#1dd1a1",
            'red': '#FF6B6B',
            'orange': '#FF9F43',
            'grey': "#636e72",
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
