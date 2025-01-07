/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#75AFA2',
        secondary: '#120A56',
      },
      fontFamily: {
        bricolage: ['Bricolage Grotesque', 'system-ui', 'sans-serif'],
        raleway: ['Raleway', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};