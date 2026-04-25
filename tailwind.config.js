/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0F3D2E",
        secondary: "#14532D",
        accent: "#22C55E",
        light: "#F0FDF4"
      }
    },
  },
  plugins: [],
}
