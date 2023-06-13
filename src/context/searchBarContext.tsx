import { COMPONENTS, DOCUMENTATION, NAVIGATION_MENU_ITEMS } from '@/utils/constants';
import { createContext, Dispatch, FC, ReactNode, RefObject, SetStateAction, useRef, useState } from 'react';

interface SearchItemsState {
  navMenuItems: string[];
  documentationItems: string[];
  componentsItems: string[];
  combinedSearchItems: string[];
}

export interface SearchBarContextValue {
  initialSearchItemsState: SearchItemsState;
  isSearchBarToggled: boolean;
  toggleSearchBar: () => void;
  handleOpenSearchBar: () => void;
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
  navMenuItems: NAVIGATION_MENU_ITEMS,
  documentationItems: DOCUMENTATION,
  componentsItems: COMPONENTS,
  combinedSearchItems: [...NAVIGATION_MENU_ITEMS, ...DOCUMENTATION, ...COMPONENTS],
};

export const SearchBarProvider: FC<SearchBarProps> = ({ children }) => {
  const [isSearchBarToggled, setIsSearchBarToggled] = useState(false);
  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const [searchInputValue, setSearchInputValue] = useState('');

  const [searchItemsState, setSearchItemsState] = useState<SearchItemsState>(initialSearchItemsState);

  const toggleSearchBar = () => setIsSearchBarToggled((isSearchBarToggled) => !isSearchBarToggled);

  const handleOpenSearchBar = () => {
    toggleSearchBar();
    if (searchInputRef.current) searchInputRef.current.focus();
    document.body.style.overflowY = 'hidden';
  };

  const filterSections = (items: string[]) => {
    const safeUserInput = searchInputValue.replace(/[-[\]/{}()*+?.\\^$|]/g, '\\$&');
    const regex = new RegExp(safeUserInput, 'i');
    return items.filter((item) => item.match(regex));
  };

  const isResultEmpty =
    searchItemsState.navMenuItems.length === 0 &&
    searchItemsState.documentationItems.length === 0 &&
    searchItemsState.componentsItems.length === 0;

  return (
    <SearchBarContext.Provider
      value={{
        initialSearchItemsState,
        isSearchBarToggled,
        toggleSearchBar,
        handleOpenSearchBar,
        searchInputRef,
        searchInputValue,
        setSearchInputValue,
        filterSections,
        isResultEmpty,
        searchItemsState,
        setSearchItemsState,
      }}
    >
      {children}
    </SearchBarContext.Provider>
  );
};
