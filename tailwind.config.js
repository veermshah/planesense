/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,jsx,ts,tsx}",
        "./components/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#AAD8FF",
                    100: "#1E1F36",
                    200: "#161737",
                },
                secondary: {
                    DEFAULT: "#249CD2",
                    100: "#FF9001",
                    200: "#FF8E01",
                },
                black: {
                    DEFAULT: "#000",
                    100: "#1E1E2D",
                    200: "#232533",
                },
                gray: {
                    100: "#CDCDE0",
                },
            },
            fontFamily: {
                interThin: ["Inter_100Thin"],
                Inter_900Black: ["Inter_900Black"],
                lusitana: ["lusitana"],
                Lusitana_700: ["Lusitana_700Bold"],
            },
        },
    },
    plugins: [],
};
