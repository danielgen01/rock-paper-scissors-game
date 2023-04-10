/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "background-color-1": "rgb(31, 55, 86);",
        "background-color-2": "rgb(20, 21, 57)",
        "dark-text": " rgb(59, 67, 99)",
        "score-text": "rgb(42, 70, 192)",
        "header-outline": "rgb(96, 110, 133)",
        "scissors-gradient-1": "rgb(236, 158, 14)",
        "scissors-gradient-2": "rgb(236, 169, 34)",
        "paper-gradient-1": "rgb(72, 101, 244)",
        "paper-gradient-2": "rgb(86, 113, 245)",
        "rock-gradient-1": "rgb(220, 46, 78)",
        "rock-gradient-2": "rgb(221, 64, 93)",
      },
    },
  },
  plugins: [],
}
