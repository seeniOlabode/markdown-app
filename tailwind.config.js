const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "mark-1000": "#151619",
        "mark-900": "#1D1F22",
        "mark-800": "#2B2D31",
        "mark-700": "#35393F",
        "mark-600": "#5A6069",
        "mark-500": "#7C8187",
        "mark-400": "#C1C4CB",
        "mark-300": "#E4E4E4",
        "mark-200": "#F5F5F5",
        "mark-100": "#FFFFFF",
        "mark-orange": "#E46643",
        "mark-orange-hover": "#F39765",
      },
      fontFamily: {
        mono: ["Roboto Mono", ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [],
};
