/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      backgroundImage: {
        'ps-icon-logo': "url('/assets/icons/ps-logo.png')",
      }
    },
  },
  plugins: [],
}

