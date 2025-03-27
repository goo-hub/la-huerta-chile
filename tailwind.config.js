/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/*.{js,ts,jsx,tsx}',
    './src/pages/*.{js,ts,jsx,tsx}',
    './src/components/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#88D656',
        'accent': '#E0FE9C',
      },
      fontFamily: {
        Inter: ['Inter', 'sans-serif'],
        Season: ['Season', 'sans-serif'],
      },
      screens: {
        '2k': '2000px',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
