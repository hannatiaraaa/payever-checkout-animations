import topBarIcons from '@/configs/icons';
import type { TTheme } from '@/types/theme.type';
import { getTextClassName } from '@/utils/getTextClassName';

type IconProps = {
  src: string;
  height?: number;
};

const RenderIcon = ({ src, height = 4 }: IconProps) => (
  <img
    src={src}
    alt='icon'
    className={`h-${height} w-auto object-contain`}
  />
);

const TopBar = ({ theme }: TTheme) => {
  const { dark, light } = topBarIcons;
  const icons = theme === 'light' ? light : theme === 'dark' ? dark : dark;
  return (
    <div className={`flex items-center justify-between gap-2`}>
      <div className='flex-1'>
        <RenderIcon src={icons.dockSide} />
      </div>
      <div className='flex gap-2 items-center'>
        <RenderIcon src={icons.avatar} />
        <RenderIcon
          src={icons.message}
          height={3}
        />
        <RenderIcon src={icons.search} />
        <RenderIcon src={icons.hamburger} />
        <div
          className={`${
            theme === 'light' ? 'bg-white' : 'bg-[#66686D]/60'
          } flex items-center px-[0.375rem] py-1 rounded-md gap-3`}
        >
          <RenderIcon
            src={icons.apps}
            height={3}
          />
          <p className={`text-xs ${getTextClassName(theme)}`}>Apps</p>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
