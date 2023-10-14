import type { TRenderParents } from '@/types/components.type';
import WelcomeChild from './Welcome';
import ChannelChild from './Channel';
import SectionChild from './Section';

const RenderChild = ({ parent, theme }: TRenderParents) => {
  switch (parent) {
    case 'welcome':
      return <WelcomeChild theme={theme} />;

    case 'channels':
      return <ChannelChild theme={theme} />;

    case 'section':
      return <SectionChild theme={theme} />;

    default:
      return null;
  }
};

export default RenderChild;
