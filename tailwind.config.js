/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './resources/views/**/*.blade.php',
    './resources/js/**/*.vue',
    './resources/js/**/*.js',
  ],

  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#26282F',
          light: '#E5F0FF',
        },
      },
      dropShadow: {
        'lightbulb': [
          '0 0 100px rgba(255, 255, 255, 1)',
          '0 0 10px rgba(255, 255, 255, 0.8)',
        ],
      },
      animation: {
        lightbulb: 'lightbulb 3s ease-in-out 1 forwards, lightbulbGrowth 1s ease-in-out 3s 1 forwards',
        lightSwitch: 'lightSwitch 1s ease-in-out 3s 1 forwards',
      },
      keyframes: {
        lightbulb: {
          '0%':                      { opacity: '0' },
          '20%':                     { opacity: '0.1' },
          '22%':                     { opacity: '0.7' },
          '23%':                     { opacity: '0' },
          '24%':                     { opacity: '0.7' },
          '25%':                     { opacity: '0' },
          '30%, 40%':                { opacity: '0.8' },
          '35%, 44%':                { opacity: '1' },
          '45%':                     { opacity: '0' },
          '46%':                     { opacity: '1' },
          '50%, 60%, 70%, 80%, 90%': { opacity: '0.9' },
          '55%, 65%, 75%, 85%, 95%': { opacity: '1' },
          '100%':                    { opacity: '1' },
        },
        lightbulbGrowth: {
          '0%':   { transform: 'scale(1)' },
          '99%':  { transform: 'scale(30)' },
          '100%': { transform: 'scale(0)', display: 'none' },
        },
        lightSwitch: {
          '0%':   { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(30vh)' },
        },
      },
    },
  },

  plugins: [],
}