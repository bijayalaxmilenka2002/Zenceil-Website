import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: "#254C38",
          dark: "#1a3627",
          light: "#34634a",
          subtle: "rgba(37, 76, 56, 0.08)",
          border: "rgba(37, 76, 56, 0.15)",
        },
        warmWhite: {
          DEFAULT: "#F7F7F2",
          pure: "#FAFAF7",
          card: "#F2F2EB",
          border: "#E6E6DC",
        },
        charcoal: {
          DEFAULT: "#252925",
          light: "#3B403B",
          muted: "#5E645E",
          border: "rgba(37, 41, 37, 0.12)",
        },
      },
      fontFamily: {
        manrope: ["var(--font-manrope)", "Manrope", "sans-serif"],
        inter: ["var(--font-inter)", "Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
