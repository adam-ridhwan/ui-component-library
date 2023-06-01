import CommandMiniIcon from '@/assets/svg/CommandMiniIcon';
import GithubIcon from '@/assets/svg/GithubIcon';
import ToggleSidebarIcon from '@/assets/svg/ToggleSidebarIcon';
import ToggleThemeIcon from '@/assets/svg/ToggleThemeIcon';
import NavigationLink from '@/components/navigation-link';
import useResolution, { DeviceType } from '@/hooks/useResolution';
import { useSearchBarContext } from '@/hooks/useSearchBarContext';
import { useSideBarContext } from '@/hooks/useSideBarContext';
import { COMPONENTS } from '@/utils/constants';
import styles from './TopNavBar-styles.module.css';

const TopNav = () => {
  const { toggleSidebar } = useSideBarContext();
  const { handleOpenSearchBar } = useSearchBarContext();
  const [deviceType] = useResolution();

  const handleOpenSideBar = () => {
    toggleSidebar();
    document.body.style.overflowY = 'hidden';
  };

  return (
    <>
      <header>
        <div className={styles.wrapper}>
          <div className={styles.container}>
            {[DeviceType.DESKTOP, DeviceType.LARGE_DESKTOP].includes(deviceType) ? (
              <div className={styles.desktop_nav}>
                <NavigationLink path={`/docs`} section="docs">
                  Documentation
                </NavigationLink>
                <NavigationLink path={`/docs/components/accordion`} section={COMPONENTS[0]}>
                  Components
                </NavigationLink>
                <NavigationLink path={`/docs`} section="docs">
                  Examples
                </NavigationLink>
              </div>
            ) : (
              <button onClick={handleOpenSideBar} className={styles.toggle_side_bar_icon}>
                <ToggleSidebarIcon />
              </button>
            )}

            <div className={styles.search_nav_container}>
              <button onClick={handleOpenSearchBar}>
                <div>
                  {[DeviceType.PHONE, DeviceType.TABLET].includes(deviceType) ? 'Search...' : 'Search documentation...'}
                </div>
                <div className={styles.shortcut_container}>
                  <span>
                    <CommandMiniIcon />
                  </span>
                  <span>K</span>
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

export default TopNav;
