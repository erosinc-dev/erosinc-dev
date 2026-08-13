import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        eros: {
          cyan: '#00A0D2',
          bright: '#00C3FF',
          bg: '#0B0E14',
          card: '#141A24',
          border: '#202938',
          gold: '#FFB800',
          pink: '#FF3366',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
export default config;
