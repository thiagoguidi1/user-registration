/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily:{
                Poppins: ["Poppins", "Sans-serif"]
            },
            backgroundImage: {
                'gradient-slate': 'linear-gradient(to bottom right, theme(colors.slate.900), theme(colors.slate.800), theme(colors.slate.700))'
            }
        }
    },
    plugins: [],
}

