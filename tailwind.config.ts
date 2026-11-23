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
        // Core Theme: Navy, Ivory & Silver
        navy: {
          DEFAULT: "#0B1B33",
          dark: "#071224",
          light: "#162F55",
          subtle: "rgba(11, 27, 51, 0.08)",
          border: "rgba(11, 27, 51, 0.15)",
        },
        ivory: {
          DEFAULT: "#FBF9F4",
          pure: "#FFFDF9",
          card: "#F5F1E8",
          border: "#EDE8DC",
        },
        silver: {
          DEFAULT: "#8A99AC",
          light: "#D8DFE8",
          metallic: "#C0C7D0",
          dark: "#4B596A",
          border: "rgba(138, 153, 172, 0.25)",
        },
        charcoal: {
          DEFAULT: "#1E242B",
          light: "#333D47",
          muted: "#5F6C7B",
          border: "rgba(30, 36, 43, 0.12)",
        },
        // Backward compatibility mappings
        forest: {
          DEFAULT: "#0B1B33",
          dark: "#071224",
          light: "#162F55",
          subtle: "rgba(11, 27, 51, 0.08)",
          border: "rgba(11, 27, 51, 0.15)",
        },
        warmWhite: {
          DEFAULT: "#FBF9F4",
          pure: "#FFFDF9",
          card: "#F5F1E8",
          border: "#EDE8DC",
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
