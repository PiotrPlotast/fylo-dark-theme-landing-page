/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      bgColor: "#181F2B",
      footerBgColor: "#0B1524",
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
      xxs: "0.4375rem",
      xs: "0.625rem",
      sm: "0.75rem",
      md: "0.875rem",
      lg: "1.125rem",
      xl: "1.5rem",
      xxl: "2.5rem",
    },
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/img/hero-pattern.svg')",
        "how-it-works-pattern": "url('/img/footer-texture.png')",
        "bg-quotes": "url('/src/asssets/images/bg-quotes.png')",
      },
    },
  },
  plugins: [],
};
