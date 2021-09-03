const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./dist/**/*.html', './dist/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
