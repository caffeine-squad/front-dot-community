/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: true
  },
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-accent': '#62D2A2',
        'secondary-accent': '#29A073',
        'yellow-accent': '#FFE74C',
        'secondary-tint': '#E8F6FF',
        'primary-error': '#c41111',
        'secondary-error': '#7d0a0a',
      },
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
    
    minHeight: {
      '1/2': '50%',
    },

    maxHeight: {
      'table-screen': '-webkit-fill-available',
      '500': '500px',
    },

    minWidth: {
      100: '100px'
    }
  },
  plugins: [],
}