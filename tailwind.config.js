/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        glow: "glow 2s ease-in-out infinite",
        fade: "fadeIn 2s ease-in-out",
        rolechange: "rolechange 8s infinite"
      },
      keyframes: {
        glow: {
          '0%, 100%': { textShadow: '0 0 5px #00ffee' },
          '50%': { textShadow: '0 0 20px #00ffee, 0 0 30px #00ffee' }
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        },
        rolechange: {
          '0%, 25%': { content: `"Web Developer"` },
          '26%, 50%': { content: `"Frontend Developer"` },
          '51%, 75%': { content: `"React Developer"` },
          '76%, 100%': { content: `"UI/UX Designer"` }
        }
      }
    },
  },
  plugins: [],
}
