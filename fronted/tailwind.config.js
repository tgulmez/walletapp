/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{svelte,js,ts}',
    './node_modules/daisyui/dist/**/*.js'
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
};

