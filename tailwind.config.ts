import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        neon: {
          cyan: '#00ffff',
          magenta: '#ff00ff',
          pink: '#ff006e',
          purple: '#9d4edd',
          blue: '#00d9ff',
          green: '#39ff14',
        },
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-out',
        'slide-up': 'slide-up 0.6s ease-out',
        'glow': 'glow 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'glitch': 'glitch 1s linear infinite',
        'neon-pulse': 'neon-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scan': 'scan 8s linear infinite',
        'flicker': 'flicker 0.15s infinite',
        'rgb-shift': 'rgb-shift 3s ease-in-out infinite',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'glow': {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glitch': {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' },
        },
        'neon-pulse': {
          '0%, 100%': {
            opacity: '1',
            filter: 'drop-shadow(0 0 5px currentColor) drop-shadow(0 0 15px currentColor)',
          },
          '50%': {
            opacity: '0.8',
            filter: 'drop-shadow(0 0 20px currentColor) drop-shadow(0 0 40px currentColor)',
          },
        },
        'scan': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        'flicker': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        'rgb-shift': {
          '0%, 100%': { textShadow: '2px 0 #ff00ff, -2px 0 #00ffff' },
          '25%': { textShadow: '-2px 0 #ff00ff, 2px 0 #00ffff' },
          '50%': { textShadow: '2px 2px #ff00ff, -2px -2px #00ffff' },
          '75%': { textShadow: '-2px 2px #ff00ff, 2px -2px #00ffff' },
        },
      },
    },
  },
  plugins: [],
}

export default config
