/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#2ECC71",
        violet: "#6C5CE7",
        yellow: "#F1C40F",
        pink: "#F368E0",
        dark: "#2C3E50",
        light: "#576574",
        footer__dark: "#132638",
        gray: "#e2e2e2",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      screens: {
        "2xl": "1280px",
      },
      container: {
        center: true,
        padding: "1rem",
      },
      boxShadow: {
        default: "0 5px 17px rgb(0, 0, 0, 0.07)",
      },
    },
  },
  plugins: [],
};
