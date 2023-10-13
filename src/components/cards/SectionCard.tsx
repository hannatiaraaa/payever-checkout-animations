import type { TChannel } from '@/types/channel.type';
import type { TTheme } from '@/types/theme.type';
import icons from '@/configs/icons';
import { getTextClassName } from '@/utils/getTextClassName';
import { getExtraBgClassName } from '@/utils/getBgClassName';
import { Button } from '@/components/Button';
import { EColor } from '@/configs/color.enum';

type TItem = {
  className?: string;
};

type ItemProps = TItem & Partial<TChannel> & Partial<TTheme>;

type ListProps = {
  data: TChannel[] | [];
};

type SectionProps = {
  title?: string;
  step: number;
  children?: React.ReactNode;
};

type SectionListProps = ListProps & Partial<TItem> & Partial<TTheme>;

type Props = SectionProps & Partial<ListProps> & Partial<TTheme>;

export const SectionRowItem = ({ theme, name, hasRemove }: ItemProps) => {
  const { dark, light } = icons;
  const src = theme === 'light' ? light.reorder : dark.reorder;

  return (
    <div className='flex items-center justify-between p-row'>
      <div className='flex items-center gap-2'>
        <img
          src={src}
          className='h-[0.375rem] object-contain'
        />
        <p className={`text-sm ${getTextClassName(theme)}`}>{name}</p>
      </div>
      {hasRemove && <button className='text-red-warning text-sm'>Remove</button>}
    </div>
  );
};

export const SectionList = ({ data, theme, className }: SectionListProps) => (
  <div className={`${className} ${getExtraBgClassName(theme)} rounded-xl`}>
    {data.map(({ name, hasRemove }) => (
      <SectionRowItem
        theme={theme}
        key={name}
        name={name}
        hasRemove={hasRemove}
      />
    ))}
  </div>
);

const SectionCard = ({ title, data = [], theme, step, children }: Props) => {
  return (
    <div className='flex flex-col gap-2'>
      <p className='text-grey text-[0.625rem] uppercase'>{title}</p>
      {children ?? (
        <SectionList
          data={data}
          theme={theme}
        />
      )}
      <Button
        color={EColor['blue-highlight']}
        title={`Edit Step ${step}`}
        className={getExtraBgClassName(theme)}
      />
    </div>
  );
};

export default SectionCard;
