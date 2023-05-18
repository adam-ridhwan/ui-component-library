import { COMPONENTS, DOCUMENTATION, NAVIGATION_MENU_ITEMS } from '@/utils/constants';
import { convertToTitleCase } from '@/utils/convertToTitleCase';
import { Dispatch, FC, ReactNode, RefObject, SetStateAction, createContext, useRef, useState } from 'react';

export interface SearchBarContextValue {
  isSearchBarToggled: boolean;
  toggleSearchBar: () => void;
  searchInputRef: RefObject<HTMLInputElement>;
  searchInputValue: string;
  setSearchInputValue: Dispatch<SetStateAction<string>>;
  isResultEmpty: boolean;
  filteredNavItems: string[];
  setFilteredNavItems: Dispatch<SetStateAction<string[]>>;
  filteredDocumentation: string[];
  setFilteredDocumentation: Dispatch<SetStateAction<string[]>>;
  filteredComponents: string[];
  setFilteredComponents: Dispatch<SetStateAction<string[]>>;
  filterSections: (items: string[]) => string[];
  combinedFilteredItems: string[];
  setCombinedFilteredItems: Dispatch<SetStateAction<string[]>>;
}
export const SearchBarContext = createContext<SearchBarContextValue | null>(null);

interface SearchBarProps {
  children: ReactNode;
}

export const SearchBarProvider: FC<SearchBarProps> = ({ children }) => {
  const [isSearchBarToggled, setIsSearchBarToggled] = useState(false);
  const searchInputRef = useRef(null);
  const [searchInputValue, setSearchInputValue] = useState('');
  const [filteredNavItems, setFilteredNavItems] = useState(NAVIGATION_MENU_ITEMS);
  const [filteredDocumentation, setFilteredDocumentation] = useState(DOCUMENTATION);
  const [filteredComponents, setFilteredComponents] = useState(Object.keys(COMPONENTS));
  const [combinedFilteredItems, setCombinedFilteredItems] = useState([
    ...NAVIGATION_MENU_ITEMS,
    ...DOCUMENTATION,
    ...Object.keys(COMPONENTS),
  ]);

  const toggleSearchBar = () => {
    setIsSearchBarToggled((isSearchBarToggled) => !isSearchBarToggled);
  };

  const filterSections = (items: string[]) => {
    return items.filter((value) => {
      return searchInputValue === ''
        ? value
        : convertToTitleCase(value).toLowerCase().includes(searchInputValue.toLowerCase());
    });
  };

  const isResultEmpty =
    filteredNavItems.length === 0 && filteredDocumentation.length === 0 && filteredComponents.length === 0;

  return (
    <SearchBarContext.Provider
      value={{
        isSearchBarToggled,
        toggleSearchBar,
        searchInputRef,
        searchInputValue,
        setSearchInputValue,
        isResultEmpty,
        filteredNavItems,
        setFilteredNavItems,
        filteredDocumentation,
        setFilteredDocumentation,
        filteredComponents,
        setFilteredComponents,
        filterSections,
        combinedFilteredItems,
        setCombinedFilteredItems,
      }}
    >
      {children}
    </SearchBarContext.Provider>
  );
};
