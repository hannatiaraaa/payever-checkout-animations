import SectionCard from '@/components/cards/SectionCard';
import { sectionStep1, sectionStep3 } from '@/configs/sectionList';
import type { TParent } from '@/types/components.type';
import SectionChild from '@/components/child/Section';
import { getTextClassName } from '@/utils/getTextClassName';

const Section = ({ theme, children, id, isVisible }: TParent) => {
  return (
    <div className='gap-2 flex flex-col'>
      <p className={`text-xl font-bold ${getTextClassName(theme)}`}>Section</p>
      <SectionCard
        title='STEP 1 (SHOPPING CART DETAILS)'
        data={sectionStep1}
        theme={theme}
        step={1}
      />
      <SectionCard
        title='STEP 2 (CUSTOMER & PAYMENT DETAILS)'
        step={2}
        theme={theme}
      >
        <div id={id}>
          {children ?? (
            <SectionChild
              isInvisible={!isVisible}
              theme={theme}
            />
          )}
        </div>
      </SectionCard>
      <SectionCard
        title='STEP 3 (CONFIRMATION)'
        data={sectionStep3}
        theme={theme}
        step={3}
      />
    </div>
  );
};

export default Section;
