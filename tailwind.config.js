// tailwind.config.js

module.exports = {
  content: ["./app/**/*{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFFFFF",
        secondary: "#E53935",
        accent: "#000000",
      },
      fontFamily: {
        openthin: ["OpenSans-Thin", "sans-serif"],
        openextralight: ["OpenSans-ExtraLight", "sans-serif"],
        openlight: ["OpenSans-Light", "sans-serif"],
        openregular: ["OpenSans-Regular", "sans-serif"],
        openmedium: ["OpenSans-Medium", "sans-serif"],
        opensemibold: ["OpenSans-SemiBold", "sans-serif"],
        openbold: ["OpenSans-Bold", "sans-serif"],
        openextrabold: ["OpenSans-ExtraBold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
