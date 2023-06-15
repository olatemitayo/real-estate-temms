/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
    width:{
      logoClamp: 'clamp(120px, 12.5vw, 200px)'  
    },
    fontSize:{
      h1: 'clamp(1.5rem, 7vw, 4rem)'
    },
    colors: {
      jacarta: "#3B3A5D",
      "cetacean-blue": "#0A0B3B",
      "quick-silver": "#A4A4A4"
    },
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px'
      // => @media (min-width: 1536px) { ... }
    }
    },
  },
  plugins: [],
}
