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
      animation: {
        'loop-scroll': 'loop-scroll 40s linear infinite',
      },
      keyframes: {
        'loop-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
