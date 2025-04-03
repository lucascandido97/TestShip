/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000', // Black
        secondary: '#2A2A2A', // Lighter gray
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #2A2A2A, #000000)', // Updated gradient
      },
    },
  },
  plugins: [],
};
