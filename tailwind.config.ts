import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: '#CCFB55',
        dark: '#010101',
        light: '#FFFFFF',
      },
      fontFamily: {
        sans: ['Geist', 'system-ui', 'sans-serif'],
        display: ['Geist', 'system-ui', 'sans-serif'],
      },
      animation: {
        marquee: 'marquee 35s linear infinite',
        'marquee2': 'marquee2 35s linear infinite',
        'border-beam': 'border-beam calc(var(--duration)*1s) infinite linear',
        'h-beam': 'h-beam var(--duration, 6s) var(--delay, 0s) infinite linear',
        'v-beam': 'v-beam var(--duration, 8s) var(--delay, 0s) infinite linear',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        'border-beam': {
          '100%': { 'offset-distance': '100%' },
        },
        'h-beam': {
          '0%':   { transform: 'translateX(-320px)' },
          '100%': { transform: 'translateX(calc(100vw + 320px))' },
        },
        'v-beam': {
          '0%':   { transform: 'translateY(-320px)' },
          '100%': { transform: 'translateY(calc(100vh + 320px))' },
        },
      },
    },
  },
  plugins: [],
}

export default config
