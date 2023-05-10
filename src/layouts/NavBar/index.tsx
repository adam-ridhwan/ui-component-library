import GithubIcon from '@/assets/svg/GithubIcon';
import ToggleSidebarIcon from '@/assets/svg/ToggleSidebarIcon';
import ToggleThemeIcon from '@/assets/svg/ToggleThemeIcon';

import { useSearchBarContext } from '@/hooks/useSearchBarContext';
import { useSideBarContext } from '@/hooks/useSideBarContext';

import styles from './styles.module.css';

const NavBar = () => {
  const { toggleSidebar } = useSideBarContext();
  const { toggleSearchBar } = useSearchBarContext();

  return (
    <>
      <header>
        <div className={styles.sidebar_container}>
          <button onClick={toggleSidebar}>
            <ToggleSidebarIcon />
          </button>

          <div className={styles.searchnav_container}>
            <button>
              <div onClick={toggleSearchBar}>Search...</div>
            </button>

            <button>
              <GithubIcon />
            </button>

            <button>
              <ToggleThemeIcon />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;