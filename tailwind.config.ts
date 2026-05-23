import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter Variable", "Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "blue-glow": "radial-gradient(ellipse at center, rgba(59,130,246,0.15), transparent 70%)",
      },
    },
  },
  plugins: [],
};

export default config;
