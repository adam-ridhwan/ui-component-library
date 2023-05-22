import { COMPONENTS, DOCUMENTATION, NAVIGATION_MENU_ITEMS } from '@/utils/constants';
import { convertToTitleCase } from '@/utils/convertToTitleCase';
import { Dispatch, FC, ReactNode, RefObject, SetStateAction, createContext, useRef, useState } from 'react';

interface SearchItemsState {
  NavMenuItems: string[];
  documentationItems: string[];
  componentsItems: string[];
  combinedFilteredItems: string[];
}

export interface SearchBarContextValue {
  initialSearchItemsState: SearchItemsState;
  isSearchBarToggled: boolean;
  toggleSearchBar: () => void;
  searchInputRef: RefObject<HTMLInputElement>;
  searchInputValue: string;
  setSearchInputValue: Dispatch<SetStateAction<string>>;
  searchItemsState: SearchItemsState;
  setSearchItemsState: Dispatch<SetStateAction<SearchItemsState>>;
  isResultEmpty: boolean;
  filterSections: (items: string[]) => string[];
}

export const SearchBarContext = createContext<SearchBarContextValue | null>(null);

interface SearchBarProps {
  children: ReactNode;
}

const initialSearchItemsState: SearchItemsState = {
  NavMenuItems: NAVIGATION_MENU_ITEMS,
  documentationItems: DOCUMENTATION,
  componentsItems: Object.keys(COMPONENTS),
  combinedFilteredItems: [...NAVIGATION_MENU_ITEMS, ...DOCUMENTATION, ...Object.keys(COMPONENTS)],
};

export const SearchBarProvider: FC<SearchBarProps> = ({ children }) => {
  const [isSearchBarToggled, setIsSearchBarToggled] = useState(false);
  const searchInputRef = useRef(null);
  const [searchInputValue, setSearchInputValue] = useState('');

  const [searchItemsState, setSearchItemsState] = useState<SearchItemsState>(initialSearchItemsState);

  const toggleSearchBar = () => {
    setIsSearchBarToggled((isSearchBarToggled) => !isSearchBarToggled);
  };

  // const filterSections = (items: string[]) => {
  //   return items.filter((value) => {
  //     return searchInputValue === ''
  //       ? value
  //       : convertToTitleCase(value).toLowerCase().includes(searchInputValue.toLowerCase());
  //   });
  // };

  const filterSections = (items: string[]) => {
    const safeUserInput = searchInputValue.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
    const regex = new RegExp(safeUserInput, 'i');
    return items.filter((item) => item.match(regex));
  };

  const isResultEmpty =
    searchItemsState.NavMenuItems.length === 0 &&
    searchItemsState.documentationItems.length === 0 &&
    searchItemsState.componentsItems.length === 0;

  return (
    <SearchBarContext.Provider
      value={{
        initialSearchItemsState,
        isSearchBarToggled,
        toggleSearchBar,
        searchInputRef,
        searchInputValue,
        setSearchInputValue,
        isResultEmpty,
        searchItemsState,
        setSearchItemsState,
        filterSections,
      }}
    >
      {children}
    </SearchBarContext.Provider>
  );
};
