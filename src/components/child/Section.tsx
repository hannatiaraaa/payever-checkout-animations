import type { TChild } from '@/types/components.type';
import { SectionList } from '@/components/cards/SectionCard';
import { sectionStep2 } from '@/configs/sectionList';

const SectionChild = ({ theme, isInvisible }: TChild) => {
  return (
    <SectionList
      data={sectionStep2}
      theme={theme}
      className={isInvisible ? 'invisible' : 'block'}
    />
  );
};

export default SectionChild;
