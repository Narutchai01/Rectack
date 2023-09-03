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
        'like-icon' : "url('https://www.gstatic.com/images/icons/material/system/2x/favorite_border_black_24dp.png')",
        'comment-icon' : "url('./assets/comment.ico')",
      },
      backgroundSize: {
        '16': '16px',
      },
      maxHeight: {
        '58': '14.5rem',
      },
    },
  },
  plugins: [],
}