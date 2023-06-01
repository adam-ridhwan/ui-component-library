import { COMPONENTS } from '@/utils/constants.ts';

export const getPaginationIndex = (COMPONENT: string) => {
  const COMPONENT_INDEX = COMPONENTS.indexOf(COMPONENT);
  const PREVIOUS_INDEX = COMPONENT_INDEX - 1;
  const NEXT_INDEX = COMPONENT_INDEX + 1;

  return [PREVIOUS_INDEX, NEXT_INDEX];
};
