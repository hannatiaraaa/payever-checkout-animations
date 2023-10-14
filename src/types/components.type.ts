import type { TTheme } from './theme.type';

type ParentProps = {
  children?: React.ReactNode;
  id?: string;
  isVisible?: boolean;
};

type ChildProps = {
  isInvisible?: boolean;
  className?: string;
};

export type TParent = ParentProps & Partial<TTheme>;
export type TChild = ChildProps & Partial<TTheme>;

type RenderParentProps = { parent: string; isVisible?: boolean };
export type TRenderParents = RenderParentProps & Partial<TTheme>;
