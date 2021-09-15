const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: { default: '#727272', input: '#F3F3F3' },
        purple: { default: '#AB82EC', ...colors.violet },
        red: colors.rose,
        yellow: { default: '#F4EEE6', noted: '#FFCC69', ...colors.amber }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
