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
        gray: {
          ...colors.trueGray,
          default: '#E5E5E5',
          heavy: '#040404',
          light: '#F3F3F3',
          font: '#727272',
          input: '#F3F3F3'
        },
        purple: { ...colors.violet, default: '#AB82EC' },
        red: colors.rose,
        yellow: {
          default: '#F4EEE6',
          noted: '#FFCC69',
          ...colors.amber,
          light: '#F4EEE6'
        }
      },
      spacing: {
        128: '32rem',
        144: '36rem',
        160: '40rem',
        176: '44rem',
        192: '48rem',
        206: '52rem',
        388: '96rem'
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
