// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class', // 👈 enable class-based dark mode
  theme: {
    extend: {
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to right, #4f46e5, #9333ea)',
      },
      textShadow: {
        glow: '0 0 8px rgba(99, 102, 241, 0.7), 0 0 12px rgba(147, 51, 234, 0.6)',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
