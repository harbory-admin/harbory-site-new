import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0B1F3A',
          blue: '#1E8FFF',
          coral: '#FF6B5E',
          seafoam: '#85E0D1',
          sand: '#F6F1E9',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        card: '0 2px 10px rgba(11,31,58,0.06)',
      },
    },
  },
  plugins: [],
}
export default config
