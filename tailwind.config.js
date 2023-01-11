/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./assets/index.html', './src/**/*.vue,js,ts,jsx,tsx'],
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ]
}
