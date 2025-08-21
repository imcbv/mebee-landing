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
          // Primary brand color
          yellow: '#F5FF00', // RGB 245, 255, 0
          // Secondary brand colors
          navy: '#435069', // RGB 67, 80, 105
          sage: '#93A5A0', // RGB 147, 165, 160
          'dark-navy': '#252B48', // RGB 37, 43, 72
          // Additional utility colors from brand guide
          'light-sage': '#93A5A0',
          'medium-navy': '#435069',
        },
        // Additional semantic colors for UI
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: '#F5FF00',
          foreground: '#252B48',
        },
        secondary: {
          DEFAULT: '#435069',
          foreground: '#ffffff',
        },
        accent: {
          DEFAULT: '#93A5A0',
          foreground: '#252B48',
        },
      },
      fontFamily: {
        sans: ['var(--font-articulat)', 'Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
export default config