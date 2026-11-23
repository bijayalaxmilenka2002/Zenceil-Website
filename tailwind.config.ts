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
        // Luxury Palette: Warm Beige, Espresso & Pure White
        espresso: {
          DEFAULT: "#302820",
          dark: "#211B15",
          light: "#4A3F33",
          subtle: "rgba(48, 40, 32, 0.08)",
          border: "rgba(48, 40, 32, 0.15)",
        },
        warmBeige: {
          DEFAULT: "#EDE7DC",
          light: "#F5F1EA",
          dark: "#DFD7C8",
          border: "#D8CEBE",
        },
        pureWhite: {
          DEFAULT: "#FFFFFF",
          card: "#FFFFFF",
          border: "#F0ECE4",
        },
        // Backward compatibility mappings
        navy: {
          DEFAULT: "#302820",
          dark: "#211B15",
          light: "#4A3F33",
          subtle: "rgba(48, 40, 32, 0.08)",
          border: "rgba(48, 40, 32, 0.15)",
        },
        ivory: {
          DEFAULT: "#EDE7DC",
          pure: "#FFFFFF",
          card: "#FFFFFF",
          border: "#DFD7C8",
        },
        silver: {
          DEFAULT: "#DFD7C8",
          light: "#EDE7DC",
          metallic: "#C8BEAE",
          dark: "#5C5248",
          border: "rgba(48, 40, 32, 0.15)",
        },
        charcoal: {
          DEFAULT: "#302820",
          light: "#4A3F33",
          muted: "#6E6256",
          border: "rgba(48, 40, 32, 0.12)",
        },
        forest: {
          DEFAULT: "#302820",
          dark: "#211B15",
          light: "#4A3F33",
          subtle: "rgba(48, 40, 32, 0.08)",
          border: "rgba(48, 40, 32, 0.15)",
        },
        warmWhite: {
          DEFAULT: "#EDE7DC",
          pure: "#FFFFFF",
          card: "#FFFFFF",
          border: "#DFD7C8",
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
