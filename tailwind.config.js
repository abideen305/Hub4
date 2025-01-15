/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A2342', // Dark Blue (Navy)
          light: '#133565',
          dark: '#061529'
        },
        secondary: {
          DEFAULT: '#9FE870', // Light Green (Lime)
          light: '#B5FF86',
          dark: '#8ACF5E'
        }
      },
      fontFamily: {
        bricolage: ['Bricolage Grotesque', 'system-ui', 'sans-serif'],
        raleway: ['Raleway', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
};