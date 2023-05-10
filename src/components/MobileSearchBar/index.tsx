import { useSearchBarContext } from '@/hooks/useSearchBarContext';

import CloseIcon from '@/assets/svg/CloseIcon';
import SearchIcon from '@/assets/svg/SearchIcon';

import styles from './styles.module.css';

const MobileSearchBar = () => {
  const { isSearchBarToggled, toggleSearchBar } = useSearchBarContext();

  return (
    <>
      <div
        className={`
          ${styles.container}
          ${isSearchBarToggled && styles.container_visible}
        `}
        onClick={toggleSearchBar}
      ></div>

      <div
        className={`
						${styles.content}
						${isSearchBarToggled && styles.content_active}
					`}
      >
        <label htmlFor='search' className={styles.visuallyHidden}>
          Search
        </label>
        <div className={styles.searchbar_container}>
          <div>
            <SearchIcon />
          </div>

          <input
            id='search'
            name='search'
            type='text'
            placeholder='Type a command or search'
            autoComplete='off'
          />

          <button onClick={toggleSearchBar}>
            <CloseIcon />
          </button>
        </div>
      </div>
    </>
  );
};

export default MobileSearchBar;
