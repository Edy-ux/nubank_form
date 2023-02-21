
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Graphik, Graphik-Regular, Graphik-Medium, "Helvetica Neue", Helvetica, Arial, Inter var, sans-serif'],
        arial: ['Arial']
      },
    },
  },
  plugins: [],
}