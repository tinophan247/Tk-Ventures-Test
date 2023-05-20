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
      colors: {
        'search-bg' : '#F1F5F9',
        'search-text':'#64748B',
        'red-btn': '#D71C5D',
        'orange-btn': '#FF9017'
      },
      fontFamily: {
        'poppins': ['Poppins'],
      },
      width: {
        338 : '338px'
      }
    },
  },
  plugins: [],
}