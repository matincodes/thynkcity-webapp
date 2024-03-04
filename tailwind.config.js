/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'work-sans': ['Work Sans', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'berlin': ['Berlin Sans FB', 'sans-serif']
      }
    },
  },
  plugins: [],
}
