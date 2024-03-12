/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
<<<<<<< HEAD
        "work-sans": ["Work Sans", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        berlin: ["Berlin Sans FB", "sans-serif"],
      },
      padding: {
        button: "10px 26px",
      },
    },
    colors: {
      "main-color": "#AD7933",
      "header-color": "#101828",
    },
    screens: {
      md: "750px",
      sm: "450px",
=======
        'work-sans': ['Work Sans', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'berlin': ['Berlin Sans FB', 'sans-serif']
      },
      fontSize: {
        mobile: "13px",
        desktop: "15px"
      }
>>>>>>> 72acfdd23c0554b4126f46c5e435d02a3c516e13
    },
  },
  plugins: [],
};
