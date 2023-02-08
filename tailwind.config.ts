// Tailwind.config.js for Nuxt
const formKitTailwind = require("@formkit/themes/tailwindcss");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
    "./formkit.config.ts",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#13005A",
        "accent-secondary": "#00337C",
        "c-black": "#231f20",
        "c-gray": "rgba(0,0,0,0.63)",
      },
    },
  },
  plugins: [formKitTailwind],
};
