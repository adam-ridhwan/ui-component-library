import GithubIcon from '@/assets/svg/GithubIcon';
import ToggleSidebarIcon from '@/assets/svg/ToggleSidebarIcon';
import ToggleThemeIcon from '@/assets/svg/ToggleThemeIcon';
import NavigationButton from '@/components/NavigationButton/NavigationButton';
import useResolution, { DeviceType } from '@/hooks/useResolution';
import { useSearchBarContext } from '@/hooks/useSearchBarContext';
import { useSideBarContext } from '@/hooks/useSideBarContext';
import { COMPONENTS } from '@/utils/constants';
import styles from './styles.module.css';

const TopNavBar = () => {
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
                <NavigationButton path='/docs' section={'Introduction'}>
                  Documentation
                </NavigationButton>
                <NavigationButton path='/docs/components/accordian' section={Object.keys(COMPONENTS)[0]}>
                  Components
                </NavigationButton>
                <NavigationButton path='/examples' section={''}>
                  Examples
                </NavigationButton>
              </div>
            ) : (
              <button onClick={toggleSidebar} className={styles.toggle_side_bar_icon}>
                <ToggleSidebarIcon />
              </button>
            )}

            <div className={styles.searchnav_container}>
              <button onClick={handleSearchBar}>
                <div>
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
