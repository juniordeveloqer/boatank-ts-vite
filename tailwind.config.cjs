/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-20": "#F8F4EB",
        "gray-50": "#EFE6E6",
        "gray-100": "#DFCCCC",
        "gray-500": "#5E0000",
        "primary-100": "#FFE1E0",
        "primary-300": "#FFA6A3",
        "primary-500": "#FF6B66",
        "secondary-400": "#FFCD5B",
        "secondary-500": "#FFC132",
      },
      backgroundImage: (theme) => ({
        "gradient-yellowred":
          "linear-gradient(180deg, rgba(168,228,241,1) 50%, rgba(255,255,255,1) 100%)",
        "mobile-home": "url('./assets/HomePageGraphic.png')",
        mainpage: "url('./assets/frame.png')",
        mainpage2: "url('./assets/desktop2.png')",
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        crimson: ["Crimson Text", "serif"],
        caveat: ["Caveat", "cursive"],
        roboto: ["Roboto", "sans-serif"],
      },
      content: {
        evolvetext: "url('./assets/EvolveText.png')",
        abstractwaves: "url('./assets/AbstractWaves.png')",
        sparkles: "url('./assets/Sparkles.png')",
        user: "url('./assets/user-svg.png')",
      },
    },
    screens: {
      xxs: "100px",
      xs: "358px",
      sm: "767px",
      md: "992px",
      xl: "1200px",
      xxl: "2000px",
    },
  },
  plugins: [],
};
