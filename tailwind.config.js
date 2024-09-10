/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        main: '#ccd97a',
        second: '#ecf4ba'
      }
    },
  },
  plugins: [],
}

