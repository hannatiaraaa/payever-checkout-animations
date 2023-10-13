import type { TThemeType } from '@/types/theme.type';

export const getExtraBgClassName = (theme?: TThemeType) =>
  theme === 'light' ? 'bg-extra-bg-2-light' : 'bg-extra-bg-2-dark';
