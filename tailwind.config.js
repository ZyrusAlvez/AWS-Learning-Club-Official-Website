/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pink: '#D77493',
        purple: '#7E117A',
        black: "#111111",
        yellow: "#FFA23F",
        slate: "#18181b"
      }
    },
  },
  plugins: [],
}