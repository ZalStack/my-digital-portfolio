/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        bg: "#F7F6F2",
        surface: "#FFFFFF",
        ink: "#0E1A2B",
        slate: {
          DEFAULT: "#2D3A4F",
          light: "#465469",
          deep: "#0E1A2B",
        },
        muted: "#5C6B7A",
        line: "#DAD6CC",
        accent: {
          DEFAULT: "#C8862D",
          light: "#E0A857",
          dark: "#9C6A20",
        },
      },
      fontFamily: {
        display: ["'Libre Caslon Display'", "Georgia", "serif"],
        sans: ["'Inter'", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      screens: {
        'xs': '475px',
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'fade-up': 'fade-up 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { 'background-size': '200% 200%', 'background-position': 'left center' },
          '50%': { 'background-size': '200% 200%', 'background-position': 'right center' }
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' }
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}