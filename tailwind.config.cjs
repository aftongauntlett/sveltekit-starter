/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/app/**/*.{js,ts,svelte}', './src/components/**/*.{js,ts,svelte}'],
  safelist: ['dark:block', 'dark:hidden'],
  theme: {
    extend: {
      fontFamily: {
        body: ['var(--font-body)', 'sans-serif'],
        heading: ['var(--font-heading)', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
