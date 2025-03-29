/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          700: '#8B4513', // Marrom para header e footer
        },
        blue: {
          800: '#1E3A8A', // Azul escuro para o header e footer
        },
      },
    },
  },
  plugins: [],
};
