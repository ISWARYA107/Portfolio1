/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B0B17",
        surface: "#13132A",
        card: "#15152B",
        line: "#272745",
        violet: {
          DEFAULT: "#7C5CFC",
          soft: "#9B82FF",
          dim: "#4A3A99",
        },
        mint: "#33E1B8",
        ember: "#FF8A4C",
        paper: "#E8E6F5",
        muted: "#8E8AB5",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "violet-glow": "radial-gradient(circle at 30% 20%, rgba(124,92,252,0.35), transparent 60%)",
        "mint-glow": "radial-gradient(circle at 80% 0%, rgba(51,225,184,0.18), transparent 55%)",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(0,0,0,0.35)",
        glow: "0 0 40px rgba(124,92,252,0.25)",
      },
    },
  },
  plugins: [],
};
