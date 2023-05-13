import { FC, useRef } from 'react';

import CloseIcon from '@/assets/svg/CloseIcon';
import NavigationButton from '@/components/NavigationButton/NavigationButton';
import { useSideBarContext } from '@/hooks/useSideBarContext';
import { COMPONENTS, COMPONENTS_ROUTES, DOC_ROUTE, DOC_ROUTES, GETTING_STARTED_COMPONENTS } from '@/utils/constants';
import { convertToURL } from '@/utils/convertToURL';
import styles from './styles.module.css';

const MobileSidebar: FC = () => {
  const { isSidebarToggled, toggleSidebar } = useSideBarContext();
  const sideBarContentRef = useRef<HTMLDivElement | null>(null);

  const overlayStyle = `${styles.overlay} ${isSidebarToggled && styles.overlay_visible}`;
  const contentStyle = `${styles.content} ${isSidebarToggled && styles.content_active}`;

  const handleToggleModal = () => {
    toggleSidebar();
    if (sideBarContentRef.current) sideBarContentRef.current.scrollTop = 0;
  };

  return (
    <>
      {/* Blurry overlay */}
      <div className={overlayStyle} onClick={handleToggleModal} />

      <div className={contentStyle}>
        <div className={styles.sidebar_content} ref={sideBarContentRef}>
          <span className={styles.sidebar_title}>Title</span>

          <div>
            <NavigationButton path={DOC_ROUTE} section={Object.keys(GETTING_STARTED_COMPONENTS)[0]}>
              Documentation
            </NavigationButton>
            <NavigationButton path='/docs/components/accordian' section={Object.keys(COMPONENTS)[0]}>
              Components
            </NavigationButton>
            <NavigationButton path='/examples' section={''}>
              Examples
            </NavigationButton>
          </div>

          <div>
            <span className={styles.sidebar_title}>Getting started</span>
            {Object.keys(GETTING_STARTED_COMPONENTS).map((component, index) => {
              return (
                <NavigationButton
                  key={index}
                  path={`${DOC_ROUTES + convertToURL(component)}`}
                  section={component}
                  closeSidebar={handleToggleModal}
                >
                  {component}
                </NavigationButton>
              );
            })}
          </div>

          <div>
            <span className={styles.sidebar_title}>Components</span>
            {Object.keys(COMPONENTS).map((component, index) => {
              return (
                <NavigationButton
                  key={index}
                  path={`${COMPONENTS_ROUTES + convertToURL(component)}`}
                  section={component}
                  closeSidebar={handleToggleModal}
                >
                  {component}
                </NavigationButton>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileSidebar;
