import BookOpen from '@/assets/svg/BookOpen';
import CloseIcon from '@/assets/svg/CloseIcon';
import EmptyCircleIcon from '@/assets/svg/EmptyCircleIcon';
import PaperIcon from '@/assets/svg/PaperIcon';
import SearchIcon from '@/assets/svg/SearchIcon';
import { useSearchBarContext } from '@/hooks/useSearchBarContext';
import { COMPONENTS, COMPONENTS_ROUTES, DOC_ROUTE } from '@/utils/constants';
import { convertToTitleCase } from '@/utils/convertToTitleCase';
import { FC, useEffect, useState } from 'react';
import NavigationButton from '../NavigationButton/NavigationButton';
import SearchSection from '../SearchSection';
import styles from './styles.module.css';

const SearchBar: FC = () => {
  const {
    isSearchBarToggled,
    toggleSearchBar,
    searchInputRef,
    setSearchInputValue,
    filteredNavItems,
    filteredDocItems,
    filteredCompItems,
    isResultsEmpty,
  } = useSearchBarContext();
  const [isWindowResized, setIsWindowResized] = useState<boolean>(false);
  const [contentTransition, setContentTransition] = useState<string>(styles.transition);

  const overlayStyle = `${styles.overlay} ${isSearchBarToggled && styles.overlay_visible}`;
  const contentStyle = `${styles.content} ${isSearchBarToggled && styles.content_active} ${contentTransition}`;

  const handleCloseModal = () => {
    toggleSearchBar();
    if (searchInputRef.current) searchInputRef.current.value = '';
    document.body.style.overflowY = 'auto';
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
            onChange={(e) => setSearchInputValue(e.target.value)}
          />

          <button onClick={handleCloseModal}>
            <CloseIcon />
          </button>
        </div>

        <div className={styles.section_wrapper}>
          {isResultsEmpty ? (
            <div className={styles.no_results}>No results found.</div>
          ) : (
            <>
              {filteredNavItems.length > 0 && (
                <div className={styles.section_container}>
                  <span className={styles.title}>Links</span>
                  {filteredNavItems.map((section, index) => {
                    if (section === 'documentation')
                      return (
                        <NavigationButton key={index} path={`${DOC_ROUTE}`} section='docs'>
                          <PaperIcon />
                          <span>{convertToTitleCase(section)}</span>
                        </NavigationButton>
                      );

                    if (section === 'components')
                      return (
                        <NavigationButton
                          key={index}
                          path='/docs/components/accordian'
                          section={Object.keys(COMPONENTS)[0]}
                        >
                          <PaperIcon />
                          <span>{convertToTitleCase(section)}</span>
                        </NavigationButton>
                      );

                    return (
                      <NavigationButton key={index} path={`${DOC_ROUTE}/${section}`} section={section}>
                        <div key={index} className={styles.section}>
                          <PaperIcon />
                          <span>{convertToTitleCase(section)}</span>
                        </div>
                      </NavigationButton>
                    );
                  })}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchBar;
