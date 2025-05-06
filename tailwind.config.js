/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#E58411",
        secondary: "#F2F2F2",
        "secondary-bg": "#f7f7f7",
      },
      fontFamily: {
        fontRoboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
