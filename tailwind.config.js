/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",          // All HTML files in the root
    "./src/**/*.html",   // All HTML files in a 'src' folder
    "./src/**/*.js",     // All JS files if applicable
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

