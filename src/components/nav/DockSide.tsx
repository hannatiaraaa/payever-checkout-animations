import type { TTheme } from '@/types/theme.type';
import closeIcon from '@/assets/close.svg';
import { getTextClassName } from '@/utils/getTextClassName';
import RightDropdown from '@/components/icons/RightDropdown';
import { getExtraBgClassName } from '@/utils/getBgClassName';
import { navList } from '@/configs/navList';

type DockSideProps = {
  activeNav?: string;
};

type Props = DockSideProps & Partial<TTheme>;

const DockSide = ({ theme, activeNav }: Props) => {
  const text = getTextClassName(theme);
  return (
    <div className={`px-2 py-4 rounded-xl ${getExtraBgClassName(theme)} w-1/4`}>
      <div className='px-2 flex items-center justify-between gap-2 mb-4'>
        <p className={`text-2xl font-bold ${text}`}>Checkout</p>
        <img
          src={closeIcon}
          className='w-4 aspect-square object-contain'
        />
      </div>

      <div className='px-2 flex items-center justify-between gap-2 mb-4'>
        <p className={`text-sm ${text}`}>Navigation</p>
        <div className='w-4 aspect-square object-contain'>
          <RightDropdown />
        </div>
      </div>

      {navList.map(({ name, icon }) => (
        <div
          key={name}
          className={`flex gap-2 py-2 px-2 rounded-md ${activeNav === name ? 'bg-blue-highlight' : 'bg-transparent'}`}
        >
          <img
            className='w-4 aspect-square'
            src={icon}
            alt={icon}
          />
          <p className={`text-xs ${activeNav === name ? 'text-primary-text-dark' : text}`}>{name}</p>
        </div>
      ))}
    </div>
  );
};

export default DockSide;
