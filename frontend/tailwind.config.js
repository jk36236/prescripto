/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':"#5f6FFF"
      },
      //custom tailwind property for grid-cols-auto in div before doctors.slice in TopDoctors.jsx
      gridTemplateColumns:{
        'auto':'repeat(auto-fill,minmax(180px,1fr))'
      }
    },
  },
  plugins: [],
}

