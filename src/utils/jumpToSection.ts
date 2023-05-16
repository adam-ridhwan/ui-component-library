import { RefObject } from 'react';

const jumpToSection = (ref: RefObject<HTMLSpanElement>) => {
  ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

export default jumpToSection;
