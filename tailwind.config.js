/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      light: {
        primary: "#ffffff",
        secondary: "#111111",
      },
      dark: {
        primary: "#111111",
        secondary: "#131629",
        text: {
          white: "#ffffff",
          grey: "#888888",
        },
      },
    },
  },
  plugins: [],
};
