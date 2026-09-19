/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        talas: {
          indigo: '#1E2050',
          darkCard: '#282A60',
          darkHover: '#333678',
          lightBg: '#FFFFFF',
          lightCard: '#F8F9FA',
          lightHover: '#EDF0F5',
          spirulina: '#2A3F75',
          spirulinaCyan: '#38BDF8',
          leafGreen: '#10B981',
          cream: '#F4F1EA',
          borderLight: 'rgba(30, 32, 80, 0.10)',
          borderDark: 'rgba(255, 255, 255, 0.15)',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'ticker': 'ticker 28s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        }
      }
    },
  },
  plugins: [],
}
