/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Requested Color Palette (Black, Gray, Purple, Red)
        bg: {
          main: "#0A0A0F",     // Deep dark canvas
          elevated: "#12121A", // Slightly elevated background
        },
        surface: {
          DEFAULT: "#16161D",  // Card / surface background
          card: "#181822",     // Elevated card
          hover: "#20202E",    // Card hover state
          glass: "rgba(22, 22, 29, 0.75)",
        },
        border: {
          dark: "#2A2A35",     // Border / divider
          light: "#3A3A4C",    // Lighter border for hover/focus
          glow: "rgba(139, 92, 246, 0.4)",
        },
        text: {
          primary: "#F5F5F7",   // Highest contrast text (WCAG AAA)
          secondary: "#A1A1AA", // Muted subtitle text (WCAG AA)
          muted: "#71717A",     // Tech labels / captions
        },
        accent: {
          purple: {
            DEFAULT: "#8B5CF6", // Electric Purple
            light: "#A78BFA",
            dark: "#6D28D9",
            glow: "rgba(139, 92, 246, 0.35)",
          },
          red: {
            DEFAULT: "#EF4444", // Vibrant Red
            light: "#F87171",
            dark: "#DC2626",
            glow: "rgba(239, 68, 68, 0.35)",
          },
        },
      },
      fontFamily: {
        sans: ["'Inter'", "system-ui", "sans-serif"],
        display: ["'Space Grotesk'", "'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      boxShadow: {
        'neon-purple': '0 0 20px -5px rgba(139, 92, 246, 0.4)',
        'neon-red': '0 0 20px -5px rgba(239, 68, 68, 0.4)',
        'neon-dual': '0 0 30px -10px rgba(139, 92, 246, 0.3), 0 0 30px -10px rgba(239, 68, 68, 0.3)',
        'card-glow': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      backgroundImage: {
        'gradient-accent': 'linear-gradient(135deg, #8B5CF6 0%, #EF4444 100%)',
        'gradient-accent-radial': 'radial-gradient(circle at center, rgba(139,92,246,0.15) 0%, rgba(239,68,68,0.05) 50%, transparent 100%)',
        'gradient-dark': 'linear-gradient(180deg, rgba(10,10,15,0.6) 0%, rgba(10,10,15,1) 100%)',
      },
      animation: {
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'border-beam': 'borderBeam 8s linear infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        borderBeam: {
          '100%': { 'offset-distance': '100%' },
        },
      },
    },
  },
  plugins: [],
}