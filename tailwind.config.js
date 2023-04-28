/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'desktop': '1130px'
      },
      colors: {
        'primary-color': '#0DFC4B'
      },
      fontFamily: {
        signature: ['Great Vibes'],
      }
    },
  },
  plugins: [],
}

