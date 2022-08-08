/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        dark: "#121212",
        main: "#1a1a1a",
        fill: '#314c5d',
        backgroundSec: '#f7f5ec',
        blueberry: '#6B7A8F',
        orange: '#ffb766',

      },
      minHeight: {
        main: "calc(100vh - 5rem)",
        home: "calc(100vh - 10rem)",
      },
    },
  },
  plugins: [],
};
