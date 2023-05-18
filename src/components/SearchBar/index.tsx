import BookOpen from '@/assets/svg/BookOpen';
import CloseIcon from '@/assets/svg/CloseIcon';
import EmptyCircleIcon from '@/assets/svg/EmptyCircleIcon';
import PaperIcon from '@/assets/svg/PaperIcon';
import SearchIcon from '@/assets/svg/SearchIcon';
import { useSearchBarContext } from '@/hooks/useSearchBarContext';
import { COMPONENTS, COMPONENTS_ROUTES, DOCUMENTATION, DOC_ROUTE, NAVIGATION_MENU_ITEMS } from '@/utils/constants';
import { convertToTitleCase } from '@/utils/convertToTitleCase';
import { ChangeEvent, FC, ReactElement, useEffect, useState } from 'react';
import NavigationButton from '../NavigationButton/NavigationButton';
import styles from './styles.module.css';

const SearchBar: FC = () => {
  const {
    isSearchBarToggled,
    toggleSearchBar,
    searchInputRef,
    setSearchInputValue,
    isResultEmpty,
    filteredNavItems,
    setFilteredNavItems,
    filteredDocumentation,
    setFilteredDocumentation,
    filteredComponents,
    setFilteredComponents,
    filterSections,
  } = useSearchBarContext();
  const [isWindowResized, setIsWindowResized] = useState<boolean>(false);
  const [contentTransition, setContentTransition] = useState<string>(styles.transition);

  const overlayStyle = `${styles.overlay} ${isSearchBarToggled && styles.overlay_visible}`;
  const contentStyle = `${styles.content} ${isSearchBarToggled && styles.content_active} ${contentTransition}`;

  const handleCloseModal = () => {
    toggleSearchBar();
    if (searchInputRef.current) searchInputRef.current.value = '';
    document.body.style.overflowY = 'auto';
    setFilteredNavItems(NAVIGATION_MENU_ITEMS);
    setFilteredDocumentation(DOCUMENTATION);
    setFilteredComponents(Object.keys(COMPONENTS));
  };

  // Handle window resize and DISABLES transition when window is resized
  useEffect(() => {
    let resizeTimeout: ReturnType<typeof setTimeout>;

    const handleResize = () => {
      if (!isWindowResized) {
        setIsWindowResized(true);
        setContentTransition('');
      }

      clearTimeout(resizeTimeout);

      resizeTimeout = setTimeout(() => {
        setIsWindowResized(false);
        setContentTransition(styles.transition);
      }, 250);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
    };
  }, [isWindowResized, searchInputRef]);

  const renderSection = (title: string, items: string[], baseRoute: string, icon: ReactElement) => {
    if (items.length === 0) {
      return null;
    }

    return (
      <div className={styles.section_container}>
        <span className={styles.title}>{title}</span>
        {items.map((section, index) => {
          let path = `${baseRoute}/${section}`;
          let sectionForButton = section;

          // Special cases
          if (title === 'Links' && section === 'documentation') {
            path = `${DOC_ROUTE}`;
            sectionForButton = 'docs';
          } else if (title === 'Links' && section === 'components') {
            path = '/docs/components/accordian';
            sectionForButton = Object.keys(COMPONENTS)[0];
          } else if (title === 'Documentation' && section === 'introduction') {
            path = `${DOC_ROUTE}`;
            sectionForButton = 'docs';
          }

          return (
            <NavigationButton key={index} path={path} section={sectionForButton} closeSidebar={handleCloseModal}>
              <div className={styles.section}>
                <span>{icon}</span>
                <span>{convertToTitleCase(section)}</span>
              </div>
            </NavigationButton>
          );
        })}
      </div>
    );
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInputValue(e.target.value);
    if (e.target.value === '') {
      setFilteredNavItems(NAVIGATION_MENU_ITEMS);
      setFilteredDocumentation(DOCUMENTATION);
      setFilteredComponents(Object.keys(COMPONENTS));
    } else {
      setFilteredNavItems(() => filterSections(NAVIGATION_MENU_ITEMS));
      setFilteredDocumentation(() => filterSections(DOCUMENTATION));
      setFilteredComponents(() => filterSections(Object.keys(COMPONENTS)));
    }
  };

  return (
    <>
      {/* Blurry overlay */}
      <div className={overlayStyle} onClick={handleCloseModal} />

      <div className={contentStyle}>
        <label htmlFor='search' className={styles.visuallyHidden}>
          Search
        </label>

        <div className={styles.searchbar_container}>
          <div>
            <SearchIcon />
          </div>

          <input
            ref={searchInputRef}
            id='search'
            name='search'
            type='text'
            placeholder='Type a command or search...'
            autoComplete='off'
            onChange={handleSearch}
          />

          <button onClick={handleCloseModal}>
            <CloseIcon />
          </button>
        </div>

        <div className={styles.section_wrapper}>
          {isResultEmpty ? (
            <div className={styles.no_results}>No results found.</div>
          ) : (
            <>
              {renderSection('Links', filteredNavItems, DOC_ROUTE, <PaperIcon />)}
              {renderSection('Documentation', filteredDocumentation, DOC_ROUTE, <BookOpen />)}
              {renderSection('Components', filteredComponents, COMPONENTS_ROUTES, <EmptyCircleIcon />)}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchBar;
