 
module.exports = {
  darkMode: 'class', // Enable dark mode based on the class applied to the <html> tag
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Define your dark mode color palette here
        darkGray: '#333', // Example dark gray color
        darkBlue: '#1a202c', // Example dark blue color
        // Add more custom dark mode colors as needed
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['dark'], // Enable dark mode variants for background colors
      textColor: ['dark'], // Enable dark mode variants for text colors
      borderColor: ['dark'], // Enable dark mode variants for border colors
      // Add more dark mode variants as needed
    },
  },
  plugins: [],
};



