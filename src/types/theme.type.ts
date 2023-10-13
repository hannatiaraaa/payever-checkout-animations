import { EColor, EDarkColor, ELightColor } from '@/configs/color.enum';

export type TThemeType = 'dark' | 'light';

export type TTheme = {
  theme?: TThemeType;
};

export type TColor = EColor | EDarkColor | ELightColor;

export type TUseColor = {
  color?: TColor;
};
