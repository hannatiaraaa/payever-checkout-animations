import type { TChild } from '@/types/components.type';
import { getTextClassName } from '@/utils/getTextClassName';

const WelcomeChild = ({ theme, isInvisible }: TChild) => {
  const textColor = getTextClassName(theme);
  const text = `text-sm ${textColor}`;
  return (
    <div className={`w-full ${isInvisible ? 'invisible' : 'flex'} flex-col gap-3`}>
      <p className={`${textColor} text-sm font-medium`}>ORDER</p>
      <div
        className={`${
          theme === 'light' ? 'bg-extra-bg-column-light' : 'bg-extra-bg-column-dark'
        } rounded-xl border-[0.5px] ${
          theme === 'light' ? 'border-main-bg-highlight-light' : 'border-main-bg-highlight-dark'
        }`}
      >
        <div className='flex justify-between items-center p-row'>
          <p className={text}>Amount</p>
          <p className={text}>EUR Є</p>
        </div>
        <p
          className={`p-row ${text} border-t-[0.5px] ${
            theme === 'light' ? 'border-t-main-bg-highlight-light' : 'border-t-main-bg-highlight-dark'
          }`}
        >
          Reference
        </p>
      </div>
    </div>
  );
};

export default WelcomeChild;
