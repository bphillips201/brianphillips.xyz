const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gray: colors.coolGray,
      blue: colors.blue,
      green: colors.emerald,
    },
    fontFamily: {
      body: ['IBM Plex Sans', 'sans-serif'],
      header: ['Overpass', 'sans-serif'],
    },
    extend: {
      borderRadius: {
        '4xl': '4px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
