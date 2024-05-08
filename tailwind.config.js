/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
      colors: {
        bluePrimary: "#1baaee",
        blueSecond: "#55C2F5",
        grayPrimary: "#757575",
        graySecond: "#999999",
      },
      boxShadow: {
        shadowFirst: "inset 0px 0px 20px rgba(0, 0, 0, .25)",
      },
    },
  },
  plugins: [],
};
