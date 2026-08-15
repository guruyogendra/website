/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['IBM Plex Sans', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        navy: {
          DEFAULT: '#0a2540',
          dark: '#06182a',
          light: '#133558',
        },
        teal: {
          DEFAULT: '#00b8d4',
          bright: '#00e5ff',
        },
      },
    },
  },
  plugins: [],
}
