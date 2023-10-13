import type { TThemeType } from '@/types/theme.type';

export const getTextClassName = (theme?: TThemeType) => {
  const text = theme === 'light' ? 'text-primary-text-light' : 'text-primary-text-dark';
  return text;
};
