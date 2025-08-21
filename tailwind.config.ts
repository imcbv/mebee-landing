import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        mebee: {
          yellow: '#F5FF00',
          navy: '#435069',
          sage: '#93A5A0',
          'dark-navy': '#252B48',
        }
      },
      fontFamily: {
        sans: ['var(--font-articulat)', 'Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
export default config