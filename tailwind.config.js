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
        gray: colors.trueGray,
        purple: { default: '#AB82EC', ...colors.violet },
        red: colors.rose,
        yellow: { default: '#F5D892', ...colors.amber }
      },
      backgroundImage: {
        logo: "url('../src/image/Da-Nai-Wei-Wei_logo.png')"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
