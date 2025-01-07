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
      backgroundColor: {
        'primary-light': '#8BBEB3',
        'primary-dark': '#5E8C81',
        'secondary-light': '#1B1066',
        'secondary-dark': '#0A0640',
      },
      textColor: {
        'primary-dark': '#5E8C81',
        'secondary-dark': '#0A0640',
      },
      borderColor: {
        'primary-light': '#8BBEB3',
        'primary-dark': '#5E8C81',
      }
    },
  },
  plugins: [],
};