/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius :{
        10 : '10px'
      },
      colors: {
        'search-bg' : '#F1F5F9',
        'search-text':'#64748B',
        'red-btn': '#D71C5D',
        'orange-btn': '#FF9017',
        'tk-gray': '#64748B'
      },
      fontFamily: {
        'poppins': ['Poppins'],
      },
      width: {
        156: '156px',
        338 : '338px'
      }
    },
  },
  plugins: [],
}