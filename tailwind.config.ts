import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f5f8ff",
          100: "#ebf1ff",
          500: "#1e3a8a",
          600: "#1e40af",
          700: "#1e3a8a"
        }
      },
      boxShadow: {
        card: "0 1px 2px rgba(15, 23, 42, 0.08)"
      }
    }
  },
  plugins: []
} satisfies Config;
