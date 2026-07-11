import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0B0C11",
        surface: "#1A1A1F",
        accent: "#F2872E",
        accent2: "#FA9C3A",
        text: "#FFFFFF",
        muted: "#AAAAAA",
      },
      boxShadow: {
        glow: "0 25px 50px rgba(242, 135, 46, 0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
