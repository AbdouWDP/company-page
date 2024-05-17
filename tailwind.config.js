/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        main: "#ABB686",
      },
      colors: {
        main: "#ABB686",
        text: "#999999",
        sec: "#F1AE0E",
        hover: "#A1A1A1",
        gray: "#F2F2F2",
      },
    },
  },
  plugins: [],
};
