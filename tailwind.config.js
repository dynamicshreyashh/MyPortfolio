import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Clash Display", ...defaultTheme.fontFamily.sans],
        title: ["Cabinet Grotesk", ...defaultTheme.fontFamily.sans],
        sans: ["General Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          DEFAULT: "#111111",
          50: "#FAFAFA",
          100: "#F5F5F5",
          200: "#E5E5E5",
          300: "#D4D4D4",
          400: "#A3A3A3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
        },
        // Adding blue color from Saleh's portfolio
        blue: {
          500: "#3b82f6", // Exact blue used in the reference
        },
        // Adding gray variants for dark mode
        gray: {
          300: "#D1D5DB", // Light gray for text
          500: "#6B7280", // Medium gray
          700: "#374151", // Dark gray
          900: "#111827", // Darkest gray
        }
      },
      spacing: {
        4.5: "1.125rem", // For precise dot alignment
        18: "4.5rem",
        88: "22rem",
      },
      lineHeight: {
        tight: "1.25", // For heading tightness
        relaxed: "1.75",
        loose: "2",
      },
      letterSpacing: {
        tighter: "-0.05em", // For uppercase headings
        snug: "-0.015em",
        medium: "0.015em",
        wide: "0.025em",
      },
      // Adding animation for hover effects
      transitionProperty: {
        'colors': 'background-color, border-color, color, fill, stroke',
        'spacing': 'margin, padding'
      }
    },
  },
  plugins: [],
};