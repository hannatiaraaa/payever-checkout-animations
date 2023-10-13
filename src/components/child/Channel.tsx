import type { TChild } from '@/types/components.type';
import { getExtraBgClassName } from '@/utils/getBgClassName';
import { sectionStep2 } from '@/configs/sectionList';
import ChannelItem from '@/components/cards/ChannelItem';

const ChannelChild = ({ theme, isHidden }: TChild) => {
  return (
    <div className={`${isHidden ? 'hidden' : 'block'} ${getExtraBgClassName(theme)} rounded-xl`}>
      {sectionStep2.map(({ name, icon }) => (
        <ChannelItem
          key={name}
          name={name}
          icon={icon}
          theme={theme}
        />
      ))}
    </div>
  );
};

export default ChannelChild;
