/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    
    extend: {

      fontFamily:{
      Anton_init:['var(--font-Anton_init)'],
      bungee:['var(--font-bungeeinit)'],
      },

      colors:{
        bg_dark:'hsl(240, 100%, 10%)',
        bg_light:'hsl(240, 100%, 50%)'
      },

      screens: {
        'sm': {'min': '320px', 'max': '640px'},
        // => @media (min-width: 640px and max-width: 767px) { ... }
  
        'md': {'min': '700px', 'max': '1023px'},
        // => @media (min-width: 768px and max-width: 1023px) { ... }
  
        'lg': {'min': '1024px', 'max': '1279px'},
        // => @media (min-width: 1024px and max-width: 1279px) { ... }
  
        'xl': {'min': '1280px', 'max': '1535px'},
        // => @media (min-width: 1280px and max-width: 1535px) { ... }
  
        '2xl': {'min': '1536px'},
        // => @media (min-width: 1536px) { ... }
      },

    }
  },
  plugins: [],
}
