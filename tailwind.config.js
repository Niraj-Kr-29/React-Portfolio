/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'customPink' : '#e30c48',
        'customGrey' : '#212428',
        'buttonGrey1' : '#292b2d',
        'buttonGrey2' : '#1e2024',
        'cardGrey': '#16181c'
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
  
}


