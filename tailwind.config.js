/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary
        'orange': 'hsl(25, 97%, 53%)',
        'lightGrey': 'hsl(217, 12%, 63%)',
        'mediumGrey': 'hsl(216, 12%, 54%)',
        'darkBlue': 'hsl(213, 19%, 18%)',
        'veryDark': 'hsl(216, 12%, 8%)'
      }
    },
  },
  plugins: [],
}

