/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bgPrimary: "#fdf2ec",
        bgPurpleMedium:'#ededfa',
        bgSecondary:'#1c1c1c',
        PurpleAccent:'#8247ff',
        bgSecondaryLight:'#212121',
        textPrimary:'#ffffff',
        textOrangeAccent:"#fe8162",
        bgPurpleLight:'#f7f8fd'
      }
    },
  },
  plugins: [],
}

