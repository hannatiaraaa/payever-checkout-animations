import { TParent } from '@/types/components.type';
import { getTextClassName } from '@/utils/getTextClassName';
import ChannelChild from '@/components/child/Channel';
import { Button } from '@/components/Button';
import { EColor } from '@/configs/color.enum';
import { getExtraBgClassName } from '@/utils/getBgClassName';

const Channel = ({ theme, children }: TParent) => {
  return (
    <div className='gap-2 flex flex-col'>
      <p className={`text-xl font-bold ${getTextClassName(theme)}`}>Channel</p>
      {children ?? (
        <ChannelChild
          isHidden={children ?? false}
          theme={theme}
        />
      )}
      <Button
        color={EColor['blue-highlight']}
        title='Add'
        className={getExtraBgClassName(theme)}
      />
    </div>
  );
};

export default Channel;
