/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBrown: '#7A4504',
        lightBrown: '#FEF4E6',
        skyBlue: '#E7F0FF',
        faintBlue: '#0A6DE4',
        deepBlue: '#000031',
        darkGrayBlue: '#344054',
        normalBlue: '#0A369D',
        lightGray: '#F0F2F5',
        darkGray: '#676E7E',
        faintText: '#8B9BB0',
        blueText: '#0D6EFD',
        darkText: '#1D2433',
        anchorText: '#344054',
        anchorGray: '#647995',
      }
    },
  },
  plugins: [],
}

