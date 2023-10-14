import Welcome from './Welcome';
import Channels from './Channels';
import Section from './Section';
import type { TRenderParents } from '@/types/components.type';

const RenderParent = ({ parent, theme, isVisible }: TRenderParents) => {
  const id = 'parent';
  switch (parent) {
    case 'welcome':
      return (
        <Welcome
          id={id}
          theme={theme}
          isVisible={isVisible}
        />
      );

    case 'channels':
      return (
        <Channels
          id={id}
          theme={theme}
          isVisible={isVisible}
        />
      );

    case 'section':
      return (
        <Section
          id={id}
          theme={theme}
          isVisible={isVisible}
        />
      );

    default:
      return null;
  }
};

export default RenderParent;
