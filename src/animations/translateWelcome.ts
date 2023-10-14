import gsap from 'gsap';
import { resetAnimation } from './resetAnimation';
import { elementTranslatePosition } from '@/configs/animationHelpers';

export const translateWelcome = (element: HTMLElement, onComplete?: GSAPCallback, onRemove?: GSAPCallback) => {
  const originalContainer = document.getElementById('original-container') as HTMLElement;
  const newContainer = document.getElementById('parent') as HTMLElement;

  const initialRect = element.getBoundingClientRect();
  const originalContainerRect = originalContainer.getBoundingClientRect();
  const newContainerRect = newContainer.getBoundingClientRect();

  gsap.set(element, elementTranslatePosition);

  const deltaX =
    innerWidth <= 640 ? innerWidth * -0.65 : innerWidth <= 1024 ? innerWidth * -0.725 : innerWidth * -0.375;
  const deltaWidth = innerWidth <= 1024 ? originalContainerRect.width * (3 / 5) : initialRect.width;
  const deltaHeight = newContainerRect.height > 0 ? newContainerRect.height : originalContainerRect.height;
  const deltaTop = newContainerRect.top * -0.25;

  const animation = gsap.to(element, {
    duration: 1,
    ease: 'power1.inOut',
    x: deltaX,
    top: deltaTop,
    width: deltaWidth,
    height: deltaHeight,
    onComplete,
  });

  resetAnimation(element, onRemove);

  return () => {
    animation.pause();
  };
};
