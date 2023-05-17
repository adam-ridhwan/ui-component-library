import { COMPONENTS, DOCUMENTATION, NAVIGATION_MENU_ITEMS } from '@/utils/constants';
import { convertToTitleCase } from '@/utils/convertToTitleCase';
import { Dispatch, FC, ReactNode, RefObject, createContext, useRef, useState } from 'react';

export interface SearchBarContextValue {
  isSearchBarToggled: boolean;
  toggleSearchBar: () => void;
  searchInputRef: RefObject<HTMLInputElement>;
  searchInputValue: string;
  setSearchInputValue: Dispatch<React.SetStateAction<string>>;
  filteredNavItems: string[];
  filteredDocItems: string[];
  filteredCompItems: string[];
  isResultsEmpty: boolean;
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
  };

  const filterItems = (items: string[]) => {
    return items.filter((value) => {
      return searchInputValue === ''
        ? value
        : convertToTitleCase(value).toLowerCase().includes(searchInputValue.toLowerCase());
    });
  };

  // Filter items for each section
  const filteredNavItems = filterItems(NAVIGATION_MENU_ITEMS);
  const filteredDocItems = filterItems(DOCUMENTATION);
  const filteredCompItems = filterItems(Object.keys(COMPONENTS));

  const isResultsEmpty =
    filteredNavItems.length === 0 && filteredDocItems.length === 0 && filteredCompItems.length === 0;

  return (
    <SearchBarContext.Provider
      value={{
        isSearchBarToggled,
        toggleSearchBar,
        searchInputRef,
        searchInputValue,
        setSearchInputValue,
        filteredNavItems,
        filteredDocItems,
        filteredCompItems,
        isResultsEmpty,
      }}
    >
      {children}
    </SearchBarContext.Provider>
  );
};
