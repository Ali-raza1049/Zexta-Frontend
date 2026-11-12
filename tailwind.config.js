import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: '420px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        forest: {
          DEFAULT: '#122B22',
          dark: '#0A1C15',
          deep: '#0D231A',
          hover: '#143527',
          card: '#112B20',
          primary: '#153C2D',
          emerald: '#163E2D',
        },
        mint: {
          DEFAULT: '#10B981',
          light: '#E8F7EE',
          pastel: '#D1FAE5',
          accent: '#059669',
          glow: '#34D399',
          upwork: '#14A800',
        },
        page: '#F6F9F7',
        dark: {
          DEFAULT: '#0F1E17',
          subtle: '#152920',
        },
        muted: '#495D53',
        subtle: '#7E9287',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '24px',
        '4xl': '28px',
      },
      boxShadow: {
        'card': '0 6px 24px -4px rgba(13, 35, 26, 0.05), 0 2px 6px -1px rgba(0, 0, 0, 0.02)',
        'card-hover': '0 20px 45px -8px rgba(13, 35, 26, 0.12), 0 4px 12px -2px rgba(13, 35, 26, 0.04)',
        'deck': '0 12px 32px -8px rgba(13, 35, 26, 0.1), 0 2px 6px rgba(0, 0, 0, 0.02)',
        'glow': '0 0 40px -10px rgba(16, 185, 129, 0.35)',
        'emerald-sm': '0 4px 14px rgba(16, 185, 129, 0.25)',
      },
      animation: {
        'float': 'floatGentle 6s ease-in-out infinite',
        'float-delayed': 'floatGentle 6s ease-in-out 3s infinite',
        'pulse-slow': 'pulseGlow 5s ease-in-out infinite',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
      },
      keyframes: {
        floatGentle: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.04)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
