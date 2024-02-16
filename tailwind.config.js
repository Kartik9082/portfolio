/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        'custom-color': '#161B20'
      },
      fontFamily: {
        'sans': ["Major Mono Display", "monospace"]
      }
    },
  },
  plugins: [],
};
