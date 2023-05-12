import { FC, useEffect, useState } from 'react';

import { useSearchBarContext } from '@/hooks/useSearchBarContext';

import CloseIcon from '@/assets/svg/CloseIcon';
import SearchIcon from '@/assets/svg/SearchIcon';

import styles from './styles.module.css';

const SideNavBar: FC = () => {
  const { isSearchBarToggled, toggleSearchBar, searchInputRef } = useSearchBarContext();
  const [isWindowResized, setIsWindowResized] = useState<boolean>(false);
  const [contentTransition, setContentTransition] = useState<string>(styles.transition);

  const containerStyle = `${styles.container} ${isSearchBarToggled ? styles.container_visible : ''}`;
  const contentStyle = `${styles.content} ${isSearchBarToggled ? styles.content_active : ''} ${contentTransition}`;

  const handleCloseModal = () => {
    toggleSearchBar();

    if (searchInputRef.current) searchInputRef.current.value = '';
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
      <div className={containerStyle} onClick={handleCloseModal} />

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
          />

          <button onClick={handleCloseModal}>
            <CloseIcon />
          </button>
        </div>
      </div>
    </>
  );
};

export default SideNavBar;
