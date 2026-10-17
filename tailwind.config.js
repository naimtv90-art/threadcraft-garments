/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#F5F3EE',       // Warm off-white
        'charcoal-dark': '#171717',  // Deep charcoal
        'charcoal-surface': '#212121',
        'charcoal-border': '#2d2d2d',
        lime: {
          accent: '#C7F36B',         // Electric lime accent
          muted: '#a8d84c',
          glow: 'rgba(199, 243, 107, 0.4)',
        },
        ink: {
          primary: '#191919',        // Near-black text
          secondary: '#777777',      // Secondary text
          light: '#a0a0a0',
        },
        offwhite: '#F5F3EE',
        cream: '#EFECE6',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Syne', '"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.02em',
        widest: '0.2em',
        ultra: '0.35em',
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        }
      }
    },
  },
  plugins: [],
}
