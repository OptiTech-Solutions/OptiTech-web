
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
        'dark-primary': '#0f172a',      // slate-900
        'dark-secondary': '#1e293b',    // slate-800
        'dark-accent': '#1e3a8a',       // blue-900
        'text-primary': '#f8fafc',      // slate-50
        'text-secondary': '#cbd5e1',    // slate-300
        'white-primary': '#ecf4ff',
        'text-muted': '#94a3b8',        // slate-400
        'brand-cyan': '#22d3ee',       // cyan-400
        'brand-purple': '#c084fc',     // purple-400
        'brand-pink': '#f472b6',       // pink-400
        'status-ok': '#4ade80',        // green-400
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}