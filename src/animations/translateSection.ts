import gsap from 'gsap';
import { resetAnimation } from './resetAnimation';
import { elementTranslatePosition } from '@/configs/animationHelpers';

export const translateSection = (element: HTMLElement, onComplete?: GSAPCallback, onRemove?: GSAPCallback) => {
  const originalContainer = document.getElementById('original-container') as HTMLElement;
  const newContainer = document.getElementById('parent') as HTMLElement;

  const originalContainerRect = originalContainer.getBoundingClientRect();
  const newContainerRect = newContainer.getBoundingClientRect();

  gsap.set(element, elementTranslatePosition);

  const deltaX = innerWidth <= 640 ? innerWidth * -0.7 : innerWidth <= 1024 ? innerWidth * -0.8 : innerWidth * -0.45;
  const deltaWidth = innerWidth <= 1024 ? originalContainerRect.width * 0.8133 : newContainerRect.width;
  const deltaHeight = newContainerRect.height > 0 ? newContainerRect.height : originalContainerRect.height;

  const animation = gsap.to(element, {
    duration: 1,
    ease: 'power1.inOut',
    x: deltaX,
    width: deltaWidth,
    height: deltaHeight,
    onComplete,
  });

  resetAnimation(element, onRemove);

  return () => {
    animation.pause();
  };
};
