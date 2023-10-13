import type { TChannel } from '@/types/channel.type';
import type { TTheme } from '@/types/theme.type';
import { getTextClassName } from '@/utils/getTextClassName';
import ChevronRight from '@/components/icons/ChevronRight';
import { EColor } from '@/configs/color.enum';

type Props = Partial<TChannel> & Partial<TTheme>;

const ChannelItem = ({ name, icon, theme }: Props) => {
  return (
    <div className='flex justify-between items-center p-row gap-2'>
      <div className='flex items-center gap-2'>
        <img
          src={icon}
          className='h-[0.875rem] object-contain'
        />
        <p className={`${getTextClassName(theme)} text-sm`}>{name}</p>
      </div>
      <div className='h-[0.875rem] object-contain'>
        <ChevronRight color={EColor.grey} />
      </div>
    </div>
  );
};

export default ChannelItem;
