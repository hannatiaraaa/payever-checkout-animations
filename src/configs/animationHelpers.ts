export const elementTranslatePosition = {
  position: 'absolute',
  width: '100%',
  top: innerHeight > 800 ? '-5.5vh' : innerWidth <= 640 ? `${-3.5 - innerHeight / 280}vh` : '-8.5vh',
};
