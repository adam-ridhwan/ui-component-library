import { FC, useRef } from 'react';

import CloseIcon from '@/assets/svg/CloseIcon';
import NavigationButton from '@/components/NavigationButton';
import { useSideBarContext } from '@/hooks/useSideBarContext';
import { COMPONENTS, COMPONENTS_ROUTES, DOC_ROUTE } from '@/utils/constants';
import { convertToTitleCase } from '@/utils/convertToTitleCase';
import styles from './styles.module.css';

const MobileSidebar: FC = () => {
  const { isSidebarToggled, toggleSidebar } = useSideBarContext();
  const sideBarContentRef = useRef<HTMLDivElement | null>(null);

  const overlayStyle = `${styles.overlay} ${isSidebarToggled && styles.overlay_visible}`;
  const contentStyle = `${styles.content} ${isSidebarToggled && styles.content_active}`;

  const handleCloseModal = () => {
    toggleSidebar();
    if (sideBarContentRef.current) sideBarContentRef.current.scrollTop = 0;
    document.body.style.overflowY = 'auto';
  };

  return (
    <>
      {/* Blurry overlay */}
      <div className={overlayStyle} onClick={handleCloseModal} />

      <div className={contentStyle}>
        <div className={styles.sidebar_content} ref={sideBarContentRef}>
          <span className={styles.sidebar_title}>Title</span>

          <div>
            <NavigationButton path={DOC_ROUTE} section={'docs'} closeSidebar={handleCloseModal}>
              Documentation
            </NavigationButton>
            <NavigationButton
              path={`${COMPONENTS_ROUTES}/accordian`}
              section={Object.keys(COMPONENTS)[0]}
              closeSidebar={handleCloseModal}
            >
              Components
            </NavigationButton>
            <NavigationButton path='/examples' section={''} closeSidebar={handleCloseModal}>
              Examples
            </NavigationButton>
          </div>

          <div>
            <span className={styles.sidebar_title}>Getting started</span>
          </div>
          <div>
            <span className={styles.sidebar_title}>Components</span>
            {Object.keys(COMPONENTS).map((component, index) => {
              return (
                <NavigationButton
                  key={index}
                  path={`${COMPONENTS_ROUTES}/${component}`}
                  section={component}
                  closeSidebar={handleCloseModal}
                >
                  {convertToTitleCase(component)}
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
