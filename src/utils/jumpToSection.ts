import { RefObject } from 'react';

const jumpToSection = (ref: RefObject<HTMLSpanElement>) => {
  const yCoordinate = ref.current?.getBoundingClientRect().top ?? 0;
  const yOffset = -80; // height of the header and some padding
  const yPosition = yCoordinate + window.pageYOffset + yOffset;
  window.scrollTo({ top: yPosition, behavior: 'smooth' });
};

export default jumpToSection;
