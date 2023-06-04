/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px", // Small screens
      md: "800px", // Medium screens
      lg: "1024px", // Large screens
    },
    extend: {},
  },
  plugins: [],
};
