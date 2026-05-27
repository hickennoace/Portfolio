import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter Variable", "Inter", "system-ui", "sans-serif"],
        display: ['"Fraunces Variable"', '"Frank Ruhl Libre"', "Georgia", "serif"],
        heb: ['"Frank Ruhl Libre"', "Georgia", "serif"],
      },
      colors: {
        // Ochre — used sparingly as a warm counterpoint to blue
        ochre: {
          400: "#c69654",
          500: "#b8843a",
          600: "#9a6d2e",
        },
      },
    },
  },
  plugins: [],
};

export default config;
