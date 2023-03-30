/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        'comfortaa': ['Comfortaa', 'sans-serif']
      },
      colors: {
        'niko-shade': '#101123',
        'tealMenu': '#3D3B51',
        'niko-orange': '#ffbd42'
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')({nocompatible: true}),
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          /* IE and Edge */
          '-ms-overflow-style': 'none',

          /* Firefox */
          'scrollbar-width': 'none',

          /* Safari and Chrome */
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        }
      }
      )
    })
  ],
};

