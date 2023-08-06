/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        gray: {
          100: '#F7FAFC',
          300: '#CBD5E0',
          500: '#A0AEC0',
          700: '#4A5568',
          900: '#1A202C',
        },
        black: '#000000',
        blue: {
          500: '#3B82F6',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}