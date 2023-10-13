import type { TTheme } from '@/types/theme.type';
import { getTextClassName } from '@/utils/getTextClassName';
import { getExtraBgClassName } from '@/utils/getBgClassName';
import RightDropdown from '@/components/icons/RightDropdown';
import { EColor, EDarkColor, ELightColor } from '@/configs/color.enum';
import icons from '@/configs/icons';
import type { TParent } from '@/types/components.type';
import WelcomeChild from '@/components/child/Welcome';
import { Button } from '@/components/Button';

const RenderCheckoutName = ({ theme }: TTheme) => {
  const text = getTextClassName(theme);
  return (
    <>
      <p className={`rounded-t-xl text-xs px-5 py-2 text-center ${getExtraBgClassName(theme)} ${text}`}>
        Checkout Name
      </p>
      <p
        className={`text-sm px-5 font-bold py-3 ${
          theme === 'light' ? 'bg-main-bg-highlight-light' : 'bg-main-bg-highlight-dark'
        } ${text}`}
      >
        Bikezilla
      </p>
    </>
  );
};

const RenderTitles = () => {
  const texts = ['Account', 'Billing & Shipping', 'Payment'];

  return texts.map((text, index) => (
    <div
      key={text}
      className={`flex justify-between p-row ${
        index > 0 ? 'border-b-[0.5px] border-b-grey' : 'border-y-[0.5px] border-y-grey'
      }`}
    >
      <p className='text-sm text-grey'>{text.toUpperCase()}</p>
      <RightDropdown color={EColor.grey} />
    </div>
  ));
};

const Welcome = ({ theme, children }: TParent) => {
  const { dark, light } = icons;
  const logo = theme === 'light' ? light.payever : dark.payever;
  return (
    <div className='px-4 w-full'>
      <RenderCheckoutName theme={theme} />
      <div className='w-full grid place-items-center'>
        <div className='w-2/3 gap-3'>
          <img
            src={logo}
            alt='payever'
            className='h-3 my-8 object-contain'
          />
          <div className='w-full flex flex-col gap-3 '>
            {children ?? (
              <WelcomeChild
                isHidden={children ?? false}
                theme={theme}
              />
            )}
            <Button
              className={getExtraBgClassName(theme)}
              color={theme === 'light' ? ELightColor['primary-text'] : EDarkColor['primary-text']}
              title='Next Step'
            />
          </div>
          <div className='mt-5'>
            <RenderTitles />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
