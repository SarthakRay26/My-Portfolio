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
        'cyber': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'neon': 'linear-gradient(45deg, #ff006e, #8338ec, #3a86ff)',
      },
      colors: {
        'neon-pink': '#ff006e',
        'neon-purple': '#8338ec',
        'neon-blue': '#3a86ff',
        'cyber-dark': '#0f0f23',
        'cyber-blue': '#00d4ff',
      }
    },
  },
  plugins: [],
}
