/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        theme: {
          900: '#1A0602',
          800: '#230700',
          700: '#2D0B01',
          600: '#613715',
          500: '#562807',
          400: '#4C2005',
        },
      },
    },
  },
  plugins: [],
};
