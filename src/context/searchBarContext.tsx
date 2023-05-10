import { FC, ReactNode, createContext, useState } from 'react';

export interface SearchBarContextValue {
  isSearchBarToggled: boolean;
  toggleSearchBar: () => void;
}

export const SearchBarContext = createContext<SearchBarContextValue | null>(null);

interface SearchBarProps {
  children: ReactNode;
}

const SearchBarProvider: FC<SearchBarProps> = ({ children }) => {
  const [isSearchBarToggled, setIsSearchBarToggled] = useState(false);

  const toggleSearchBar = () => {
    setIsSearchBarToggled(!isSearchBarToggled);
  };

  return (
    <SearchBarContext.Provider value={{ isSearchBarToggled, toggleSearchBar }}>
      {children}
    </SearchBarContext.Provider>
  );
};

export { SearchBarProvider };
