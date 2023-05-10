import { FC } from 'react';

import { useSearchBarContext } from '@/hooks/useSearchBarContext';

import CloseIcon from '@/assets/svg/CloseIcon';
import SearchIcon from '@/assets/svg/SearchIcon';

import styles from './styles.module.css';

const MobileSearchBar: FC = () => {
  const { isSearchBarToggled, toggleSearchBar, searchInputRef } = useSearchBarContext();

  const containerStyle = `${styles.container} ${isSearchBarToggled ? styles.container_visible : ''}`;
  const contentStyle = `${styles.content} ${isSearchBarToggled ? styles.content_active : ''}`;

  const handleCloseModal = () => {
    toggleSearchBar();

    if (searchInputRef.current) searchInputRef.current.value = '';
  };

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
            placeholder='Type a command or search'
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

export default MobileSearchBar;
