/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customYellow: "#1E756D",
        customGreen : "#006d77",
        customLightGreen: "#83c5be",
        customWhite : "#edf6f9",
        customBlue : "#0d3b66",
        customFont : "#006d77",
      },
      textShadow: {  
        'custom': '2px 2px 20px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
}
