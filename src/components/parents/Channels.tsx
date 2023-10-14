import type { TParent } from '@/types/components.type';
import { getTextClassName } from '@/utils/getTextClassName';
import ChannelChild from '@/components/child/Channel';
import { Button } from '@/components/Button';
import { EColor } from '@/configs/color.enum';
import { getExtraBgClassName } from '@/utils/getBgClassName';

const Channels = ({ theme, children, id, isVisible }: TParent) => {
  return (
    <div className='gap-2 flex flex-col'>
      <p className={`text-xl font-bold ${getTextClassName(theme)}`}>Channels</p>
      <div
        id={id}
        className='my-2'
      >
        {children ?? (
          <ChannelChild
            isInvisible={!isVisible}
            theme={theme}
          />
        )}
      </div>
      <Button
        color={EColor['blue-highlight']}
        title='Add'
        className={getExtraBgClassName(theme)}
      />
    </div>
  );
};

export default Channels;
