/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "redBeige" : "#F6FDC3",
        "thirdGreen" : "#88AB8E",
        "slateWhite": "#D9D9D9",
        "darkblue" : "#292D32"
      }
    },
    
  },
  plugins: [],
}

