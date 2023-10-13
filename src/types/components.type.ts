import type { TTheme } from './theme.type';

type ParentProps = {
  children?: React.ReactNode;
};

type ChildProps = {
  isHidden?: boolean;
};

export type TParent = ParentProps & Partial<TTheme>;
export type TChild = ChildProps & Partial<TTheme>;
