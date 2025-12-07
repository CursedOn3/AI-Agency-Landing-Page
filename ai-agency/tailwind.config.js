/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4725f4",
        "background-light": "#f6f5f8",
        "background-dark": "#131022",
        "neon-blue": "#00BFFF",
        "cyber-pink": "#FF00FF",
        "electric-purple": "#8A2BE2"
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"]
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        lg: "1rem",
        xl: "1.5rem",
        full: "9999px"
      }
    }
  },
  plugins: []
};
