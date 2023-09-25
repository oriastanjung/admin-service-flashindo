/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bluePrimary: "#51469F",
        white: "#F6F8FA",
        whiteSecondary: "#F6F8FD",
        black: "#48494F",
        danger: "#FF0F00",
        success: "#03AB00",
        greyPrimary: "#D9D9D9",
      },
    },
  },
  plugins: [],
};
