import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{vue,ts,js}',
    './components/**/*.{vue,ts,js}',
    './layouts/**/*.{vue,ts,js}',
    './pages/**/*.{vue,ts,js}',
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#FAF7E9',
          light: '#FFFFFF',
        },
        teal: {
          DEFAULT: '#0E665D',
          dark: '#09423C',
          light: '#177F75',
        },
        glass: '#22645D',
        coral: {
          DEFAULT: '#177F75',
          light: '#1A9488',
          dark: '#0E665D',
        },
        accent: '#60BAB1',
        'btn-border': '#10786D',
        'btn-shadow': '#30615C',
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        form: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
