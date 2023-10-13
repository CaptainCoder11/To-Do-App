/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Sofia-Pro-Regular': ['Sofia-Pro-Regular'],
        'Sofia-Pro-Medium' : ['Sofia-Pro-Medium'],
        'Sofia-Pro-Light' : ['Sofia-Pro-Light'],
        'Sofia-Pro-Ultra-Light' : ['Sofia-Pro-Ultra-Light']
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: '#F7F8FC',
      primary: '#623CE6',
      primarylight: '#ECE7FF',
      secondary: '#39C2A3',
      secondarylight: '#E1FAF4',
      meetingsbg: "#FEFDFF",
      meetingtitle: "#545864",
      meetingbg1: "#FEF1D5",
      meetingbg2: "#D3E6FF",
      meetingbg3: "#FED9DA",
      meetingbg4: "#D9FFE4",
      white: colors.white,
      red: colors.red,
    },
  },
  plugins: [],
}

