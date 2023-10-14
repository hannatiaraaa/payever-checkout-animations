import { useLayoutEffect, useRef, useState } from 'react';
import type { TThemeType } from './types/theme.type';
import Container from '@/components/Container';
import { changeTheme } from './animations/changeTheme';
import { translateWelcome } from './animations/translateWelcome';
import { translateChannel } from './animations/translateChannel';
import { translateSection } from './animations/translateSection';
import RenderParent from './components/parents';
import RenderChild from './components/child';
import { EDarkColor, ELightColor } from './configs/color.enum';

function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const elementRef = useRef<HTMLDivElement>(null);

  const [theme, setTheme] = useState<TThemeType>('dark');
  const [parent, setParent] = useState('channels');
  const [child, setChild] = useState('channels');
  const [childAfter, setChildAfter] = useState('welcome');
  const [awaitChild, setAwaitChild] = useState(false);

  const onChangeTheme = () => {
    setTheme((prevState) => {
      if (prevState === 'dark') return 'light';
      return 'dark';
    });
  };

  const rerenderChild = () => {
    setTimeout(() => {
      setAwaitChild(!awaitChild);
    }, 5000);
  };

  useLayoutEffect(() => {
    const container = containerRef.current;
    const element = elementRef.current;
    const bgColor = theme === 'dark' ? ELightColor['main-bg'] : EDarkColor['main-bg'];
    if (container && element) {
      if (childAfter === 'welcome') {
        translateWelcome(
          element,
          () => {
            setParent('welcome');
            changeTheme(container, bgColor, onChangeTheme);
          },
          () => {
            setChild('welcome');
            setChildAfter('channels');
            rerenderChild();
          }
        );
      }

      if (childAfter === 'channels') {
        if (parent === 'welcome') {
          translateChannel(
            element,
            () => {
              setParent('channels');
              changeTheme(container, bgColor, onChangeTheme);
            },
            () => {
              setChild('channels');
              setChildAfter('section');
              rerenderChild();
            }
          );
        }
        if (parent === 'section') {
          translateChannel(
            element,
            () => {
              setParent('channels');
              changeTheme(container, bgColor, onChangeTheme);
            },
            () => {
              setChild('channels');
              setChildAfter('welcome');
              rerenderChild();
            }
          );
        }
      }

      if (childAfter === 'section') {
        translateSection(
          element,
          () => {
            setParent('section');
            changeTheme(container, bgColor, onChangeTheme);
          },
          () => {
            setChild('section');
            setChildAfter('channels');
            rerenderChild();
          }
        );
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [awaitChild]); // <- don't add more dependency Array so it doesn't re-run on every render!

  return (
    <div
      id='original-container'
      className='relative w-screen h-screen flex justify-center items-center p-2 md:p-12 md:gap-4'
    >
      <div
        ref={containerRef}
        className={`w-full lg:w-2/3 aspect-video ${theme === 'light' ? 'bg-main-bg-light' : 'bg-main-bg-dark'}`}
      >
        <Container
          theme={theme}
          activeNav={parent === 'welcome' ? 'Bikezilla' : parent === 'channels' ? 'Channels' : undefined}
        >
          <RenderParent
            parent={parent}
            theme={theme}
            isVisible={parent === child ? true : false}
          />
        </Container>
      </div>
      <div className={`lg:w-1/3 relative`}>
        <div ref={elementRef}>
          <RenderChild
            parent={childAfter}
            theme={theme}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
