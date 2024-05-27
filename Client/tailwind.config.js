/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './node_modules/preline/preline.js',
  ],
  theme: {
    extend: {
      boxShadow: {
        'text-purple': '0px 0px 25px rgba(109, 40, 217, 1)',
      },
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
  darkMode: 'selector',
}