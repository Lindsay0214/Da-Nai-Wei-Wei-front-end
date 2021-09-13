const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin')

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
        yellow: { default: '#F4EEE6', hover: '#FFCC69' },
        brown: { default: '#84754F' }
      },
      backgroundImage: {
        logo: "url('../src/image/Da-Nai-Wei-Wei_logo.png')"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('tailwindcss-pseudo-elements'),
    plugin(({ addUtilities }) => {
      const newUtilities = {
        '.process-active': {
          content: '""',
          width: '40px',
          height: '40px',
          backgroundColor: '#FFCC69',
          display: 'block',
          textAlign: 'center',
          borderRadius: '50%',
          margin: '50px auto 10px auto',
          lineHeight: '30px'
        },
        '.process-before': {
          content: '""',
          width: '40px',
          height: '40px',
          backgroundColor: '#ffffff',
          display: 'block',
          textAlign: 'center',
          borderRadius: '50%',
          margin: '50px auto 10px auto',
          lineHeight: '30px',
          zIndex: '999px'
        },
        '.process-after': {
          content: '""',
          width: '80%',
          height: '4px',
          margin: '0 2%',
          backgroundColor: 'white',
          position: 'absolute',
          top: '55%',
          left: '-50%',
          zIndex: '-999px'
        },
        '.hover': {
          backgroundColor: '#FFCC69',
          border: '1px solid #ffffff',
          color: 'white',
          margin: '1.5rem 0'
        },
        '.border': {
          content: '""',
          height: '1px',
          backgroundColor: 'white',
          width: '100%',
          position: 'absolute',
          top: '10%',
          marginTop: '30px'
        },
        '.order-hover': {
          backgroundColor: '#FFCC69',
          border: '1px solid #ffffff',
          color: 'white'
        }
      };
      addUtilities(newUtilities, {
        variants: ['before', 'after', 'hover']
      });
    })
  ]
};
