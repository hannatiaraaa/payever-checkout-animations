import { EColor } from '@/configs/color.enum';
import type { TUseColor } from '@/types/theme.type';

const RightDropdown = ({ color = EColor['blue-highlight'] }: TUseColor) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='16'
      viewBox='0 0 16 16'
      fill='none'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M2.32 4L1 5.269L8 12L15 5.269L13.68 4L8 9.462L2.32 4Z'
        fill={color}
      />
    </svg>
  );
};

export default RightDropdown;
