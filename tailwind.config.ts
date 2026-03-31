import type { Config } from 'tailwindcss'

/**
 * Color tokens — Mokshya OS (Figma: Mokshya-os frame, node 31797:8386)
 * Primary: #0E665D | Secondary band: #177F75 | Ink: #09423C
 * Accent / divider: #60BAB1 | Glass panels: #22645D
 * Buttons: border #10786D, inset shadow #30615C, outer ring #F1F1F1
 */
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
          /** Main brand / page background — Figma bg-[#0e665d] */
          DEFAULT: '#0E665D',
          /** Headings & text on cream sections — Figma text-[#09423c] */
          dark: '#09423C',
          /** Secondary sections, curves — Figma bg-[#177f75] */
          light: '#177F75',
        },
        /** Accent line & hero highlights — Figma bg-[#60bab1] */
        accent: '#60BAB1',
        /** Glass morphism cards on secondary teal — Figma bg-[#22645d] */
        glass: '#22645D',
        /** Primary CTA top border & inset shadow — Figma border / inset #10786d */
        'btn-border': '#10786D',
        /** CTA inner ring — Figma shadow #30615c */
        'btn-shadow': '#30615C',
        /** CTA outer 1px ring — Figma #f1f1f1 */
        'line-light': '#F1F1F1',
        /** Small icon buttons — Figma border-[#0f524d] */
        'icon-ring': '#0F524D',
        /** Body copy on dark teal — Figma text-[#e7e7e7] */
        'on-dark': {
          DEFAULT: '#E7E7E7',
          /** Nav / logo muted — Figma text-[#dadada] */
          muted: '#DADADA',
        },
        /** Text on glass cards — Figma text-[#f6f6f6] */
        'on-glass': '#F6F6F6',
        /** Gradient text end stops — Figma to-[#d5d5d5] / to-[#dadada] */
        'gradient-end': '#D5D5D5',
        'gradient-end-soft': '#DADADA',
        coral: {
          DEFAULT: '#177F75',
          light: '#1A9488',
          dark: '#0E665D',
        },
        /** Who we serve — audience card accents (Figma 32184:14899) */
        audience: {
          buyer: '#0E665D',
          broker: '#2563EB',
          underwriter: '#7C3AED',
          cro: '#0D9488',
          board: '#C2410C',
          reinsurer: '#1E293B',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        form: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
