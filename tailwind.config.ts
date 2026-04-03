import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        surface: "var(--color-surface)",
        border: "var(--color-border)",
        accent: "var(--color-accent)",
        "accent-muted": "var(--color-accent-muted)",
        text: "var(--color-text)",
        "text-muted": "var(--color-text-muted)",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
