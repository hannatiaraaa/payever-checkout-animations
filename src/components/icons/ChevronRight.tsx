import type { TUseColor } from '@/types/theme.type';

const ChevronRight = ({ color }: TUseColor) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='8'
      height='15'
      viewBox='0 0 8 15'
      fill='none'
    >
      <path
        d='M1 14L7 7.5L1 1'
        stroke={color}
        stroke-width='1.5'
        stroke-linecap='round'
        stroke-linejoin='round'
      />
    </svg>
  );
};

export default ChevronRight;
