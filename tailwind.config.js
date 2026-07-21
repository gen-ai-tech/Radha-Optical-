/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          300: '#4db6ac', // Light Teal
          500: '#2a9d8f', // Primary Teal
          700: '#1f7a6e', // Dark Teal
        },
        slate: {
          800: '#1e293b', // Dark Slate (Text)
          900: '#0f172a', // Dark Slate (Background)
          950: '#020617', // Very Dark Slate
        }
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
