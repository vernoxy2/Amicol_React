/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1.5rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      colors: {
        primary: "#E33534",
        textcolor: "#1E1E1E",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        sofia: ["Sofia Sans", "sans-serif"],
      },
    },
  },
  plugins: [
    function({ addBase }) {
      addBase({
        '*': { 'scrollbar-width': 'none', '-ms-overflow-style': 'none' },
        '*::-webkit-scrollbar': { 'display': 'none' },
      });
    },
  ],
}