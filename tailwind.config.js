/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
        'xs': '330px',  // Custom breakpoint
        'sm': '640px',  // Default breakpoint for small screens
        'md': '768px',  // Default breakpoint for medium screens
        'lg': '1024px', // Default breakpoint for large screens
        'xl': '1280px', // Default breakpoint for extra-large screens
        '2xl': '1536px' // Default breakpoint for 2x extra-large screens
      }
  },
  plugins: [],
}

