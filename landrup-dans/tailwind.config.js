/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontSize: {
      sm: '18px',
      base: '24px',
      lg: '36px',
    },
    extend: {
      width: {
        mobile: '411px',
      },
      fontFamily: {
        Ubuntu: 'Ubuntu, sans-serif',
      },
      dropShadow: {
        button: '3px 4px 2px rgba(0, 0, 0, 0.25)',
      },
      colors: {
        primary: '#EAEAEA',
        secondary: '#5E2E53',
        ternary: '#E1A1E9',
        additional: '#000000',
      },
      padding: {
        page: '28px',
      },
    },
  },
  plugins: [],
}
