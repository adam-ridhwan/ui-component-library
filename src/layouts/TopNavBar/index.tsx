import GithubIcon from '@/assets/svg/GithubIcon';
import ToggleSidebarIcon from '@/assets/svg/ToggleSidebarIcon';
import ToggleThemeIcon from '@/assets/svg/ToggleThemeIcon';
import useResolution, { DeviceType } from '@/hooks/useResolution';
import { useSearchBarContext } from '@/hooks/useSearchBarContext';
import { useSideBarContext } from '@/hooks/useSideBarContext';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';

const TopNavBar = () => {
  const navigate = useNavigate();

  const { toggleSidebar } = useSideBarContext();
  const { toggleSearchBar, searchInputRef } = useSearchBarContext();
  const [deviceType] = useResolution();

  const handleSearchBar = () => {
    toggleSearchBar();

    if (searchInputRef.current) searchInputRef.current.focus();
  };

  return (
    <>
      <header>
        <div className={styles.wrapper}>
          <div className={styles.container}>
            {[DeviceType.DESKTOP, DeviceType.LARGE_DESKTOP].includes(deviceType) ? (
              <div className={styles.desktop_nav}>
                <button onClick={() => navigate('/docs')}>Documentation</button>
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
                <div onClick={handleSearchBar}>
                  {[DeviceType.PHONE, DeviceType.TABLET].includes(deviceType) ? 'Search...' : 'Search documentation...'}
                </div>
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

export default TopNavBar;
