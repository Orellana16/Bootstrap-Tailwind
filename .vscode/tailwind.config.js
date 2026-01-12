/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./public/*.html",   // Esto le dice que lea todos los HTML dentro de public
        "./src/**/*.{js,ts,jsx,tsx}", // Por si acaso usas JS en el futuro
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}