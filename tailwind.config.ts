import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'articulat': ['"Articulat CF"', 'Inter', 'system-ui', 'sans-serif'],
        'sans': ['"Articulat CF"', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'mebee-yellow': '#F5FF00',
        'mebee-navy': '#435069', 
        'mebee-sage': '#93A5A0',
        'mebee-dark-navy': '#252B48',
      }
    },
  },
  plugins: [],
}
export default config