/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        aurora: "aurora 8s ease-in-out infinite alternate",
        shine: "shine 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} 