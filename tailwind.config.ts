import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--bg-primary)",
        surface: "var(--surface-strong)",
        accent: "#F2872E",
        accent2: "#FA9C3A",
        text: {
          DEFAULT: "var(--text-primary)",
          secondary: "var(--text-secondary)",
        },
        muted: "var(--text-secondary)",
      },
      boxShadow: {
        glow: "0 25px 50px rgba(242, 135, 46, 0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
