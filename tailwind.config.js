/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    clipPath: {
      headerPolygon: "polygon(0 7%, 100% 0%, 100% 72%, 0 86%)",
    },
    extend: {
      animation: {
        "spin-slow": "spin 5s linear infinite",
      },
    },
    colors: {
      transparent: "transparent",
      light: {
        primary: "#ffffff",
        secondary: "#111111",
      },
      dark: {
        primary: "#111111",
        secondary: "#131629",
        carbonColor: "#121214",
        lightGreen: "#DEFFDB",
        lightPurpul: "#E2F1FF",
        grephiteColor: "#2E3740",
        text: {
          white: "#ffffff",
          grey: "#888888",
          blue: "#56B8F8",
        },
      },
      fontSize: {
        sm: "0.8rem",
        base: "1rem",
        xl: "1.25rem",
        "2xl": "1.563rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
      },
    },
  },
  plugins: [require("tailwind-clip-path")],
};
