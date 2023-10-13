import type { TChild } from '@/types/components.type';
import { SectionList } from '@/components/cards/SectionCard';
import { sectionStep2 } from '@/configs/sectionList';

const SectionChild = ({ theme, isHidden }: TChild) => {
  return (
    <SectionList
      data={sectionStep2}
      theme={theme}
      className={isHidden ? 'hidden' : 'block'}
    />
  );
};

export default SectionChild;
