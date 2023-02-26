/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#FF7420",
          dark: "#191A19",
        },
      },
    },
  },
  plugins: [],
};
