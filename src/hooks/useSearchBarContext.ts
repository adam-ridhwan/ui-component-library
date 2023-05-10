import { useContext } from 'react';

import { SearchBarContext, SearchBarContextValue } from '@/context/searchBarContext';

export const useSearchBarContext = (): SearchBarContextValue => {
  const context = useContext(SearchBarContext);

  if (!context) {
    throw new Error('useSearchBarContext must be used within a SearchBarProvider');
  }

  return context;
};
