import { Config } from 'tailwindcss';
import { EColor, EDarkColor, ELightColor } from './src/configs/color.enum';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  safelist: [{ pattern: /text-[a-z]/ }],
  theme: {
    extend: {
      colors: {
        'primary-text': {
          dark: EDarkColor['primary-text'],
          light: ELightColor['primary-text'],
        },
        'main-bg': {
          dark: EDarkColor['main-bg'],
          light: ELightColor['main-bg'],
        },
        'blue-highlight': EColor['blue-highlight'],
        'main-bg-highlight': {
          dark: EDarkColor['main-bg-highlight'],
          light: ELightColor['main-bg-highlight'],
        },
        'extra-bg-2': {
          dark: EDarkColor['extra-bg-2'],
          light: ELightColor['extra-bg'],
        },
        'extra-bg-column': {
          dark: EDarkColor['extra-bg-column'],
          light: ELightColor['extra-bg'],
        },
        grey: EColor.grey,
        'red-warning': EColor['red-warning'],
      },
    },
  },
  plugins: [],
};

export default config;
