import { useEffect, useState } from 'react';
import CommandMiniIcon from '@/assets/svg/CommandMiniIcon';
import GithubIcon from '@/assets/svg/GithubIcon';
import ToggleSidebarIcon from '@/assets/svg/ToggleSidebarIcon';
import ToggleThemeIcon from '@/assets/svg/ToggleThemeIcon';
import NavigationLink from '@/components/navigation-link/NavigationLink';
import useResolution, { DeviceType } from '@/hooks/useResolution';
import { useSearchBarContext } from '@/hooks/useSearchBarContext';
import { useSideBarContext } from '@/hooks/useSideBarContext';
import { COMPONENTS, COMPONENTS_ROUTES, DOC_ROUTE } from '@/utils/constants';
import styles from './TopNavBar-styles.module.css';

const TopNav = () => {
  const { toggleSidebar } = useSideBarContext();
  const { handleOpenSearchBar } = useSearchBarContext();
  const [deviceType] = useResolution();
  const [isPageScrolled, setIsPageScrolled] = useState<boolean>(false);

  const handleOpenSideBar = () => {
    toggleSidebar();
    document.body.style.overflowY = 'hidden';
  };

  useEffect(() => {
    const checkScroll = () => (window.scrollY > 20 ? setIsPageScrolled(true) : setIsPageScrolled(false));
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  return (
    <>
      <header data-scrolled={isPageScrolled}>
        <div className={styles.wrapper} data-scrolled={isPageScrolled}>
          <div className={styles.shadow}></div>

          <div className={styles.container}>
            {[DeviceType.DESKTOP, DeviceType.LARGE_DESKTOP].includes(deviceType) ? (
              <div className={styles.desktop_nav}>
                <NavigationLink path={DOC_ROUTE} section='docs'>
                  Documentation
                </NavigationLink>
                <NavigationLink path={`${COMPONENTS_ROUTES}/accordion`} section={COMPONENTS[0]}>
                  Components
                </NavigationLink>
                <NavigationLink path={DOC_ROUTE} section='docs'>
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
                <div>{[DeviceType.PHONE].includes(deviceType) ? 'Search...' : 'Search documentation...'}</div>

                {[DeviceType.TABLET_LANDSCAPE, DeviceType.DESKTOP, DeviceType.LARGE_DESKTOP].includes(deviceType) && (
                  <div className={styles.shortcut_container}>
                    <span>
                      <CommandMiniIcon />
                    </span>
                    <span>K</span>
                  </div>
                )}
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
