/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        black: "#000000",
        primary: {
          900: "#023E45",
          800: "#0E5A63",
        },
        secondary: "#FF7A00",
        grey: {
          900: "#222222",
          600: "#555555",
          400: "#999999",
          200: "#BBBBBB",
          100: "#EEEEEE",
        },
      },
    },
    container: {
      padding: {
        DEFAULT: "1rem",
      },
    },
  },
  plugins: [],
  important: true,
};
