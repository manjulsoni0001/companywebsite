/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "color-1": "#0044a7",
        "color-2": "#26b1ff",
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'], // Define the Montserrat font
      },
    },
  },
  plugins: [],
}