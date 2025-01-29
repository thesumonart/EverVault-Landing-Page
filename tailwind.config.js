/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*", "*.html"],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter", "serif"],
        SegoeUI: ["SegoeUI"],
      },
      maxWidth: {
        siteWidth: "1440px",
        containerWidth: "1000px",
      },
      colors: {
        richBlack: "#010314",
        heroText: "#ECECFB",
      },
      backgroundImage: {
        heroImage:
          "linear-gradient(180deg, #010314 40.24%, rgba(1, 3, 20, 0.00) 100%), radial-gradient(65.08% 85.05% at 50% 50%, rgba(0, 0, 0, 0.00) 37.41%, #63E 69.27%, #FFF 100%)",
        engSolutions:
          "linear-gradient(0deg, #010314 40.24%, rgba(1, 3, 20, 0.00) 100%), radial-gradient(65.08% 85.05% at 50% 50%, rgba(0, 0, 0, 0.00) 37.41%, #63E 69.27%, #FFF 100%)",
        textImage:
          "radial-gradient(100% 45% at 50% 50%, #FFF 30%, rgba(255, 255, 255, 0.35) 100%)",
      },
    },
  },
  plugins: [],
};
