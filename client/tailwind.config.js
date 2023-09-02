/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'search-icon': "url('https://www.gstatic.com/images/icons/material/system/2x/search_black_24dp.png')",
      },
      backgroundSize: {
        '16': '16px',
      },
    },
  },
  plugins: [],
}








