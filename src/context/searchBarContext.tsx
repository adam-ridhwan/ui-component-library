import { FC, ReactNode, createContext, useRef, useState } from 'react';

export interface SearchBarContextValue {
  isSearchBarToggled: boolean;
  toggleSearchBar: () => void;
  searchInputRef: React.RefObject<HTMLInputElement>;
  searchInputValue: string;
  setSearchInputValue: React.Dispatch<React.SetStateAction<string>>;
}
export const SearchBarContext = createContext<SearchBarContextValue | null>(null);

interface SearchBarProps {
  children: ReactNode;
}

export const SearchBarProvider: FC<SearchBarProps> = ({ children }) => {
  const [isSearchBarToggled, setIsSearchBarToggled] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [searchInputValue, setSearchInputValue] = useState('');

  const toggleSearchBar = () => {
    setIsSearchBarToggled((isSearchBarToggled) => !isSearchBarToggled);

    // const originalStyle = window.getComputedStyle(document.body).overflow;

    // if (!isSearchBarToggled) {
    //   document.body.style.overflow = originalStyle;
    //   document.body.style.paddingRight = '0px';
    // } else {
    //   const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
    //   document.body.style.overflow = 'hidden';
    //   document.body.style.paddingRight = `${scrollBarWidth}px`;
    // }
  };

  return (
    <SearchBarContext.Provider
      value={{ isSearchBarToggled, toggleSearchBar, searchInputRef, searchInputValue, setSearchInputValue }}
    >
      {children}
    </SearchBarContext.Provider>
  );
};
