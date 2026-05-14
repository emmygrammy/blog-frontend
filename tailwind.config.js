/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#EF767A",
        primaryHover: "#FF7A90",

        secondary: "#0F52BA",
        secondaryHover: "#0C45A0",

        background: "#FFFFFF",
        primaryDark: "#0B1C30",
        surface: "#FFFFFF",

        textPrimary: "#000000",
        textSecondary: "#6B6B6B",
        textTertiary: "#FFFFFF",

        border: "#E0E0E0"
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
      },

      fontSize: {
        h1: ["32px", "40px"],
        h2: ["24px", "32px"],
        h3: ["20px", "28px"],
        body: ["16px", "24px"],
        small: ["14px", "20px"],
        caption: ["12px", "16px"],
      },

      fontWeight: {
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },

      spacing: {
        section: "64px",
        card: "24px",
      },

      borderRadius: {
        sm: "6px",
        md: "12px",
        lg: "16px",
      },
    },
  },
  plugins: [],
}