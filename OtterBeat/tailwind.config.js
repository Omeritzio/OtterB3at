/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "../node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "../node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    defualt: defaultTheme,
    colors: {
      'regal-blue': '#243c5a',
    },
  },
  plugins: [],
});