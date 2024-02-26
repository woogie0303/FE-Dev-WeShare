/* cSpell:ignore tailwindcss */

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        oAuthLogo:
          '0 0 1px 0 rgba(0, 0, 0, 0.12), 0 1px 1px 0 rgba(0, 0, 0, 0.24)',

        nav: '0 2px 10px rgba(0, 0, 0, 25%)',
        travelEditItem: '2px 8px 30px rgba(0,0,0,25%)',
      },
      screens: {
        xs: '480px',
        sm: '768px',
        md: '1060px',
      },

      colors: {
        primary: '#2056BF',
        secondary: '#92B5FC',
        third: '#C6D9FF',
      },
    },
  },
  plugins: [],
};
