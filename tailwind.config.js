/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./slices/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)',
  			primaryGradient: 'linear-gradient(146deg, rgba(128,0,255,1) 1%, rgba(132,7,255,1) 23%, rgba(136,15,255,1) 48%, rgba(140,24,255,1) 91%, rgba(151,45,255,1) 100%)',
  			accent: {
  				default: '#8000FF',
  				secondary: '#7b25d0'
  			},
  			mainWhite: '#f5f5dc'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
