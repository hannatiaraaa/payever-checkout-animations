import gsap from 'gsap';
import { EDarkColor, ELightColor } from '@/configs/color.enum';

export const changeTheme = (
  element: HTMLDivElement,
  backgroundColor?: ELightColor | EDarkColor,
  onStart?: GSAPCallback,
  onComplete?: GSAPCallback
) => {
  const animation = gsap.to(element, {
    backgroundColor,
    duration: 0.5,
    yoyo: true,
    ease: 'power1.inOut',
    onStart,
    onComplete,
  });

  return animation;
};
