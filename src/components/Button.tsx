import type { TColor } from '@/types/theme.type';

type Props = {
  title?: string;
  className?: string;
  color?: TColor;
};

export const Button = ({ title, className, color }: Props) => {
  return (
    <button className={`w-full p-1 rounded-xl ${className}`}>
      <p
        style={{ color }}
        className={'text-sm text-center'}
      >
        {title}
      </p>
    </button>
  );
};
