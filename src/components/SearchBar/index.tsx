import BookOpen from '@/assets/svg/BookOpen';
import CloseIcon from '@/assets/svg/CloseIcon';
import EmptyCircleIcon from '@/assets/svg/EmptyCircleIcon';
import PaperIcon from '@/assets/svg/PaperIcon';
import SearchIcon from '@/assets/svg/SearchIcon';
import { useSearchBarContext } from '@/hooks/useSearchBarContext';
import { COMPONENTS, DOCUMENTATION, NAVIGATION_MENU_ITEMS } from '@/utils/constants';
import { convertToTitleCase } from '@/utils/convertToTitleCase';
import { FC, useEffect, useState } from 'react';
import SearchSection from '../SearchSection';
import styles from './styles.module.css';

const SearchBar: FC = () => {
  const {
    isSearchBarToggled,
    toggleSearchBar,
    searchInputRef,
    searchInputValue,
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
            <div className={styles.no_results}>No results found</div>
          ) : (
            <>
              {filteredNavItems.length > 0 && <SearchSection title='Links' items={filteredNavItems} Icon={PaperIcon} />}
              {filteredDocItems.length > 0 && (
                <SearchSection title='Documentation' items={filteredDocItems} Icon={BookOpen} />
              )}
              {filteredCompItems.length > 0 && (
                <SearchSection title='Components' items={filteredCompItems} Icon={EmptyCircleIcon} />
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchBar;
