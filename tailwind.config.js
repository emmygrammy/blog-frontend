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
        primaryHover: "#A23B42",

        secondary: "#4F46E5",
        secondaryHover: "#0C45A0",

        background: "#FFFFFF",
        primaryDark: "#0B1C30",
        surfaceVariant: "#DBEAFE",
        surfaceHover: "#EEF2FF",

        textPrimary: "#000000",
        textSecondary: "#6B6B6B",
        textTertiary: "#FFFFFF",

        border: "#EF767A"
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