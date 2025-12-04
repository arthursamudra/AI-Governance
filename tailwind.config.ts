import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#F5F7FB",
        surface: "#FFFFFF",
        primary: {
          50: "#E8EDF9",
          100: "#CFDAF3",
          500: "#23408E",
          600: "#172C63",
          700: "#101E44"
        },
        accent: {
          500: "#00A1D6"
        },
        muted: {
          500: "#6B7280"
        }
      },
      fontFamily: {
        sans: ["system-ui", "SF Pro Text", "Inter", "sans-serif"]
      },
      boxShadow: {
        soft: "0 18px 45px rgba(15, 23, 42, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;

