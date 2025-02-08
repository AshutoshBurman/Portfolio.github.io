/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'border-spin': {
          '100%': {
            transform: 'rotate(-360deg)',
          }
        }
      },
      animation: {
        'boarder-spin': 'border-spin 5s linear infinite'
      }
    },

    colors:{
      'black':'#000000',
      'white':'#FFFFFF',
      'dark-blue':'#003666',
      'pink':'#f72585',
      'pinkish-purple':'#b5179e',
      'deep-violet':'#7209b7',
      'dark-purple':'#560bad',
      'purple-Heart':'#480ca8',
      'electric-purple':'#3a0ca3',
      'blueberry':'#3f37c9',
      'royal-blue':'#4361ee',
      'sky-blue':'#4895ef',
      'light-sky-blue':'#4cc9f0',
      'rose':'#E7D5D5',
      'git':'#0d0601',
      'linkedIn':'#0a66c2',
      'stack':'#874210',
      'medium':'#FFFFFF',
    },
    screens: {
      'max-sm': { 'max': '540px'},
      'sm': { 'max': '700px'},
      'tab': {'max':'780px'},
    },
    fontFamily: {
      josefinSlab: ["Josefin Slab", "serif"],
      inter: ["Inter", "sans-serif"],
      kings: ["Kings", "cursive"]
    },
  },
  plugins: [],
}