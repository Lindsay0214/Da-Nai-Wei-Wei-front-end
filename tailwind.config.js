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
        yellow: { default: '#FFCC69', light: '#F4EEE6', ...colors.amber }
      },
      spacing: {
        128: '32rem',
        144: '36rem',
        160: '40rem',
        176: '44rem',
        192: '48rem'
      },
      letterSpacing: {
        tightest: '-.075em',
        tighter: '-.05em',
        normal: '0',
        wide: '.1em',
        wider: '.2em',
        widest: '.3em'
      },
      transitionDelay: {
        0: '0ms',
        2000: '2000ms'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
