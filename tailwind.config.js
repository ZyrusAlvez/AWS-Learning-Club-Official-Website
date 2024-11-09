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
        slate: "#18181b",
        brand: "#313148"
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      },
      screens: {
        'tablet': { 'raw': '(min-width: 768px) and (max-width: 1024px) and (min-height: 1024px) and (max-height: 1368px)' }
      },
    },
  },
  plugins: [],
}