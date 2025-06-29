/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        digital: ['"Digital-7 Mono"', 'monospace'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#1D4ED8',
        soft: '#F1F5F9',
        gray: {
          200: "#D5DAE1"
        },
        black: {
          DEFAULT: "#000",
          500: "#1D2235"
        },
        blue: {
          500: "#2b77e7"
        }

      },
      
      boxShadow: {
        card: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)'
      }

      
    },
  },
  plugins: [],
}
