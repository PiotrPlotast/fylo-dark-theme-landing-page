/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      bgColor: "#1B2330",
      btnGradient1: "#63E1D9",
      btnGradient2: "#34A0CD",
      accentColor: "#62E0D9",
      textColor: "#FFFFFF",
      cardBgColor: "#202A3C",
      accessCardBgColor: "#1B2330",
      accessCardInputColor: "#C0C0C0",
      footerSocialLinkBorderColor: "#DFE4F0",
    },
    fontFamily: {
      main: ["Raleway", "sans-serif"],
      secondary: ["Open Sans", "sans-serif"],
    },
    fontSize: {
      sm: "0.75rem",
      md: "0.875rem",
      lg: "1.125rem",
      xl: "1.5rem",
    },
    extend: {},
  },
  plugins: [],
};
