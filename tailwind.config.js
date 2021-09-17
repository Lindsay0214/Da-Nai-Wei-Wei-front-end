const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

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
          deepGray: '#727272',
          lightGray: '#7A7A7A',
          input: '#F3F3F3'
        },
        yellow: {
          deepYellow: '#FFCC69',
          lightYellow: '#F4EEE6',
          ...colors.amber
        },
        brown: { default: '#84754F' }
      },
      backgroundImage: {
        logo: "url('../src/image/Da-Nai-Wei-Wei_logo.png')"
      },
      spacing: {
        86: '22rem',
        120: '26rem',
        124: '451px',
        128: '32rem',
        144: '36rem',
        160: '40rem',
        164: '43rem',
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
      },
      width: {
        '9/20': '46%'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    // eslint-disable-next-line global-require
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
          lineHeight: '30px'
        },
        '.process-after': {
          content: '""',
          width: '65%',
          height: '4px',
          margin: '0 2%',
          backgroundColor: 'white',
          position: 'absolute',
          top: '57%',
          left: '-35%'
        },
        '.hover': {
          backgroundColor: 'transparent',
          border: '1px solid #FFCC69',
          color: '#FFCC69'
        },
        '.border': {
          content: '""',
          height: '1px',
          backgroundColor: 'white',
          width: '95%',
          position: 'absolute',
          top: '17%',
          left: '19%',
          transform: 'translate(-17%, 19%)'
        },
        '.border-none': {
          content: ''
        }
        // '.order-hover': {
        //   backgroundColor: '#ffffff',
        //   border: '1px solid #FFCC69',
        //   color: 'white'
        // }
      };
      addUtilities(newUtilities, {
        variants: ['before', 'after', 'hover']
      });
    })
  ]
};
