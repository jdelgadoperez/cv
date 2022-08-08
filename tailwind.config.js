/* eslint-disable no-undef */
module.exports = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  plugins: [require('@tailwindcss/line-clamp')],
  theme: {
    colors: {
      seagull: {
        DEFAULT: '#7DCAEC',
        50: '#F5FBFE',
        100: '#E8F6FC',
        200: '#CDEBF8',
        300: '#B2E0F4',
        400: '#98D5F0',
        500: '#7DCAEC',
        600: '#6BC3E9',
        700: '#59BBE7',
        800: '#48B4E4',
        900: '#36ADE2'
      }
    },
    fontFamily: {
      sans: ['IBM Plex Sans', 'Open Sans', 'ui-sans-serif', 'system-ui']
    }
  }
};
