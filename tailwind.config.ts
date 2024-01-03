import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'base-accent': '#DBDBDB',
        primary: '#3D8B7D',
        accent: '#4761BD',
        secondary: '#9400EE',
        'base-100': '#070711',
        'base-200': '#161616',
        'base-400': '#E3E3E3',
        'base-300': '#F2F2F2',
      },
    },
  },
  plugins: [],
};
export default config;
