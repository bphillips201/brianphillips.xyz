const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '540px',
      md: '640px',
      lg: '768px',
      xl: '1024px',
    },
    colors: {
      zinc: colors.zinc,
      gray: colors.gray,
      slate: colors.slate,
    },
    fontFamily: {
      body: ['Bitter', 'serif'],
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
