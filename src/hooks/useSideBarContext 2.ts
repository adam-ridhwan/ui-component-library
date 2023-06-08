import { useContext } from 'react';

import { SideBarContext, SideBarContextValue } from '@/context/sideBarContext';

export const useSideBarContext = (): SideBarContextValue => {
  const context = useContext(SideBarContext);

  if (!context) {
    throw new Error('useSideBarContext must be used within a SideBarProvider');
  }

  return context;
};
