const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  variants: {
    extend: {
      opacity: ['disabled'],
    },
  },
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    screens: {
      '2xl': { 'max': '1535px' },
      'xl': { 'max': '1279px' },
      'lg': { 'max': '1023px' },
      'md': { 'max': '767px' },
      'sm': { 'max': '639px' },
      'xs': { 'max': '400px' },
    },
    extend: {
      colors: {
        brown: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#f5f2eb',
          400: '#d2bab0',
          500: '#bfa094',
          600: '#a18072',
          700: '#977669',
          800: '#846358',
          900: '#43302b',
        },
        primary: '#fdf8f6',
        primaryDarker: '#f5f2eb',
        primaryDarkest: '#f2e8e5',
        secondaryLighter: '#bfa094',
        secondary: '#a18072',
        secondaryDarker: '#977669',
        tertiary: '#8d7065',
        tertiaryDarker: '#846358',
        tertiaryDarkest: '#43302b',
      },
      fontFamily: {
        sans: ["'Montserrat'", ...defaultTheme.fontFamily.sans],
      },
    },
  },

  plugins: [],
}
