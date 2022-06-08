/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
module.exports = {
  plugins: [
    require('cssnano')({ preset: 'default' }),
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer')
  ]
};
