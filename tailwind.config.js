/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jomhuria: ['Jomhuria', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        reemkufi: ['Reem Kufi', 'sans-serif'],
      },
      colors:{
        bluesea: '#021526',
        cyan: '#5AFBEF'
      }
    },
  },
  plugins: [],
}