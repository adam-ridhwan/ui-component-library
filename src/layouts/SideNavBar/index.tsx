import { FC, useRef } from 'react';

import CloseIcon from '@/assets/svg/CloseIcon';
import { useSideBarContext } from '@/hooks/useSideBarContext';
import { COMPONENTS } from '@/utils/constants';

import NavigationButton from '@/components/NavigationButton/NavigationButton';
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
            <NavigationButton path='/docs'>Documentation</NavigationButton>
            <NavigationButton path='/docs'>Components</NavigationButton>
            <NavigationButton path='/docs'>Examples</NavigationButton>
          </div>

          <div>
            <span className={styles.sidebar_title}>Getting started</span>
            <NavigationButton path='/docs'>Introduction</NavigationButton>
            <NavigationButton path='/docs'>Installation</NavigationButton>
            <NavigationButton path='/docs'>Theming</NavigationButton>
            <NavigationButton path='/docs'>CLI</NavigationButton>
            <NavigationButton path='/docs'>Typography</NavigationButton>
          </div>

          <div>
            <span className={styles.sidebar_title}>Components</span>
            {Object.keys(COMPONENTS).map((component, index) => {
              return (
                <NavigationButton key={index} path='/docs'>
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
