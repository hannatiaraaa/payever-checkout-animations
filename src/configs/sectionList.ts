import type { TChannel } from '@/types/channel.type';
import direct_link from '@/assets/channels/direct_link.svg';
import text_link from '@/assets/channels/text_link.svg';
import button from '@/assets/channels/button.svg';
import shop from '@/assets/channels/shop.svg';
import marketing from '@/assets/channels/marketing.svg';

export const sectionStep1: TChannel[] = [
  {
    name: 'Order',
    hasRemove: false,
  },
];

export const sectionStep2: TChannel[] = [
  {
    name: 'Direct link',
    hasRemove: false,
    icon: direct_link,
  },
  {
    name: 'Text link',
    hasRemove: true,
    icon: text_link,
  },
  {
    name: 'Button',
    hasRemove: false,
    icon: button,
  },
  {
    name: 'Shop',
    hasRemove: true,
    icon: shop,
  },
  {
    name: 'Marketing',
    hasRemove: true,
    icon: marketing,
  },
];

export const sectionStep3: TChannel[] = [
  {
    name: 'Confirmation',
    hasRemove: false,
  },
];
