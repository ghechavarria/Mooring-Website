/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Outfit", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      colors: {
        ink: {
          950: "#0a0f14",
          900: "#0f1724",
          800: "#152030",
          700: "#1e2d42",
        },
        mist: "#e8eef6",
        tide: "#0d9f9a",
        glow: "#5eead4",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to right, rgba(14,116,144,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(14,116,144,0.08) 1px, transparent 1px)",
      },
      animation: {
        float: "float 18s ease-in-out infinite",
        "float-delay": "float 22s ease-in-out infinite 3s",
        shimmer: "shimmer 2.5s ease-in-out infinite",
        "scan-line": "scan-line 3.2s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(3%, -4%) scale(1.03)" },
          "66%": { transform: "translate(-3%, 2%) scale(0.98)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        "scan-line": {
          "0%": { top: "8%" },
          "100%": { top: "88%" },
        },
      },
    },
  },
  plugins: [],
};
