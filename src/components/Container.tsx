import React from 'react';
import TopBar from './nav/TopBar';
import DockSide from './nav/DockSide';
import type { TTheme } from '@/types/theme.type';

type ContainerProps = {
  children?: React.ReactNode;
  className?: string;
  activeNav?: string;
};

type Props = ContainerProps & Partial<TTheme>;

const Container = ({ theme, children, className, activeNav }: Props) => {
  return (
    <div className={`flex flex-col p-4 gap-4 ${className}`}>
      <TopBar theme={theme} />
      <div className='hidden lg:flex h-full gap-4'>
        <DockSide
          theme={theme}
          activeNav={activeNav}
        />
        <div className='flex-1'>{children}</div>
      </div>
      <div className='block lg:hidden'>{children}</div>
    </div>
  );
};

export default Container;
