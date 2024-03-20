/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'main-color': '#AD7933',
        'header-color': '#101828',
      },
      fontFamily: {
        'work-sans': ["Work Sans", "sans-serif"],
        'inter': ["Inter", "sans-serif"],
        'berlin': ["Berlin Sans FB", "sans-serif"],
      },
      padding: {
        button: "10px 26px",
      },
    },
    screens: {
      md: "750px",
      sm: "450px",
    },
  },
  plugins: [],
};
