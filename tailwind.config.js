/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#1d3554", // Default brand color (Background)
        "brand-contrast": "#e6d0cf", // Text & Links
        "brand-primary": "#ff878b",
        "brand-secondary": "#56c6be",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Lora", "serif"],
        mono: ["Fira Code", "monospace"],
      },
      boxShadow: {
        "glow-ruby": "0 0 12px rgba(190, 49, 68, 0.4)",
        "glow-wine": "0 0 12px rgba(135, 35, 65, 0.4)",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};
