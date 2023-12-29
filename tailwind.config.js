/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        primary2: "#333851",

        secondary: "#aaa6c3",
        tertiary: "#1b1b34",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        greyBg2: "#363642",
        translucidWhite: "#ffffff12",
        blackGradient:
          "linear-gradient(112.1deg, rgb(32, 38, 57) 11.4%, rgb(63, 76, 119) 70.2%)",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
    },
  },
  plugins: [],
};
