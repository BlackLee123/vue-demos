/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ['./src/**/*.{html,js,ts,vue,jsx,tsx}', './index.html'],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      zIndex: {
        '-1': '-1',
      },
      colors: {
        primary: {
          DEFAULT: '#0960bd',
        },
      },
      screens: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        '2xl': '1600px',
      },
      fontSize: {
        xs: '12px',
        sm: '14px',
        base: '16px',
        lg: '18px',
        xl: '20px',
        '2xl': '24px',
        '3xl': '30px',
        '4xl': '36px',
        '5xl': '48px',
        '6xl': '60px',
        '7xl': '72px',
      },
    },
  },
  plugins: [],
};