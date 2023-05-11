import GithubIcon from '@/assets/svg/GithubIcon';
import ToggleSidebarIcon from '@/assets/svg/ToggleSidebarIcon';
import ToggleThemeIcon from '@/assets/svg/ToggleThemeIcon';

import { useSearchBarContext } from '@/hooks/useSearchBarContext';
import { useSideBarContext } from '@/hooks/useSideBarContext';

import useResolution, { DeviceType } from '@/hooks/useResolution';
import styles from './styles.module.css';

const NavBar = () => {
  const { toggleSidebar } = useSideBarContext();
  const { toggleSearchBar, searchInputRef } = useSearchBarContext();
  const [resolution, deviceType] = useResolution();

  const handleSearchBar = () => {
    toggleSearchBar();

    if (searchInputRef.current) searchInputRef.current.focus();
  };

  return (
    <>
      <header>
        <div className={styles.wrapper}>
          <div className={styles.sidebar_container}>
            {deviceType === DeviceType.IPAD || deviceType === DeviceType.DESKTOP ? (
              <div className={styles.desktop_nav}>
                <button>Documentation</button>
                <button>Components</button>
                <button>Examples</button>
              </div>
            ) : (
              <button onClick={toggleSidebar} className={styles.toggle_side_bar_icon}>
                <ToggleSidebarIcon />
              </button>
            )}

            <div className={styles.searchnav_container}>
              <button>
                <div onClick={handleSearchBar}>Search...</div>
              </button>

              <button>
                <GithubIcon />
              </button>

              <button>
                <ToggleThemeIcon />
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
