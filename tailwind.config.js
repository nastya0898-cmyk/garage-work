/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#fdf6e3',
          100: '#faedc7',
          200: '#f0d48a',
          300: '#e3b956',
          400: '#dcb040',
          500: '#d4a62f',
          600: '#b88a20',
          700: '#9c7218',
        },
        dark: {
          900: '#02022A',
          800: '#04043D',
          700: '#06063E',
          600: '#0c0c52',
          500: '#141468',
        },
        accent: '#FF0000',
        light: '#FAF6F2',
      },
      fontFamily: {
        sans: ['Roboto', 'system-ui', 'sans-serif'],
        display: ['Rubik', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-brand': 'linear-gradient(135deg, #d4a62f 0%, #b88a20 100%)',
      },
    },
  },
  plugins: [],
}
