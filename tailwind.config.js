/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,css}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Montserrat", "system-ui", "sans-serif"],
        serif: ['"Source Serif 4"', "Georgia", "serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      colors: {
        ink: {
          950: "#0a0e14",
          900: "#10141d",
          800: "#1a2230",
          700: "#273449",
        },
        mist: "#0f172a",
        navy: "#0a0e14",
        /** Luminous cool silver (logo-adjacent); brighter than earlier muted slate */
        tide: "#bfd3e6",
        accent: {
          DEFAULT: "#bfd3e6",
          light: "#f4f9fc",
        },
        canvas: "#f8fafc",
        ivory: "#f2f2f2",
        organ: {
          50: "#faf8f6",
          100: "#f3f0ec",
          200: "#e8e2da",
          600: "#6b645c",
          700: "#534c46",
          800: "#3f3833",
          900: "#2c2825",
          950: "#1c1a18",
        },
        /** Hero pulse / monitor — slate black + deep blue contrast */
        pulse: {
          void: "#030712",
          ink: "#0a0f1a",
          slate: "#0f172a",
          deep: "#152642",
          blue: "#1d4ed8",
          glow: "#38bdf8",
          ice: "#e0f2fe",
        },
      },
      boxShadow: {
        card: "0 1px 3px 0 rgb(15 23 42 / 0.06), 0 1px 2px -1px rgb(15 23 42 / 0.06)",
        "card-md":
          "0 4px 6px -1px rgb(15 23 42 / 0.07), 0 2px 4px -2px rgb(15 23 42 / 0.05)",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to right, rgba(191,211,230,0.09) 1px, transparent 1px), linear-gradient(to bottom, rgba(191,211,230,0.09) 1px, transparent 1px)",
      },
      animation: {
        float: "float 18s ease-in-out infinite",
        "float-delay": "float 22s ease-in-out infinite 3s",
        shimmer: "shimmer 2.5s ease-in-out infinite",
        "shimmer-slow": "shimmer 5s ease-in-out infinite",
        "scan-line": "scan-line 3.2s ease-in-out infinite",
        "grid-breathe": "grid-breathe 6s ease-in-out infinite",
        drift: "drift 14s ease-in-out infinite",
        "drift-reverse": "drift 18s ease-in-out infinite reverse",
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
        "grid-breathe": {
          "0%, 100%": { opacity: "0.32" },
          "50%": { opacity: "0.58" },
        },
        drift: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(3%, -4%) scale(1.08)" },
        },
      },
    },
  },
  plugins: [],
};
