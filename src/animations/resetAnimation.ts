import gsap from 'gsap';

export const resetAnimation = (element: HTMLElement, onComplete?: GSAPCallback) => {
  const initialRect = element.getBoundingClientRect();

  setTimeout(() => {
    gsap.to(element, {
      opacity: 0,
      duration: 0,
      onComplete,
    });
  }, 1000);

  setTimeout(() => {
    gsap.to(element, {
      x: 0,
      top: initialRect.top / -4,
      width: initialRect.width,
      height: initialRect.height,
      left: initialRect.left * 0.5,
      opacity: 0,
    });
  }, 3000);

  setTimeout(() => {
    gsap.to(element, {
      opacity: 1,
      duration: 0.2,
      left: 0,
    });
  }, 3500);
};
