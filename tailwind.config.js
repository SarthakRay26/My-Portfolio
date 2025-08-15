/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'typing': 'typing 3.5s steps(40, end)',
        'blink-caret': 'blink-caret .75s step-end infinite',
        'gradient': 'gradient 15s ease infinite',
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          'from': { 
            textShadow: '0 0 20px #fff, 0 0 30px #fff, 0 0 40px #fff',
          },
          'to': { 
            textShadow: '0 0 30px #fff, 0 0 40px #fff, 0 0 50px #fff',
          },
        },
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'cyber': 'linear-gradient(135deg, #333333 0%, #000000 100%)',
        'black-gradient': 'linear-gradient(45deg, #000000, #1a1a1a, #333333)',
        'subtle-gradient': 'linear-gradient(135deg, #111111 0%, #000000 100%)',
        'rainbow': 'linear-gradient(45deg, #FF0000, #FF6600, #FFD700, #00FF00, #0066FF, #4B0082, #8A2BE2)',
        'vibrant': 'linear-gradient(135deg, #FF1493, #00FFFF, #FFD700, #00FF00)',
      },
      colors: {
        'black-primary': '#000000',
        'black-secondary': '#111111',
        'black-tertiary': '#1a1a1a',
        'gray-light': '#333333',
        'gray-medium': '#666666',
        'accent-white': '#ffffff',
        'accent-gray': '#cccccc',
        'accent-silver': '#888888',
        'cyber-dark': '#0f0f0f',
        // VIBGYOR Colors
        'vibrant-violet': '#8A2BE2',
        'vibrant-indigo': '#4B0082',
        'vibrant-blue': '#0066FF',
        'vibrant-green': '#00FF00',
        'vibrant-yellow': '#FFD700',
        'vibrant-orange': '#FF6600',
        'vibrant-red': '#FF0000',
        'vibrant-pink': '#FF1493',
        'vibrant-cyan': '#00FFFF',
      }
    },
  },
  plugins: [],
}
