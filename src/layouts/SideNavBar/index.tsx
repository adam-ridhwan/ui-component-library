import { FC, useRef } from 'react';

import CloseIcon from '@/assets/svg/CloseIcon';
import { useSideBarContext } from '@/hooks/useSideBarContext';
import { COMPONENTS } from '@/utils/constants';

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
          <span>Title</span>

          <div>
            <span>Documentation</span>
            <span>Components</span>
            <span>Examples</span>
            <span>Github</span>
          </div>

          <div>
            <span>Getting started</span>
            <span>Introduction</span>
            <span>Installation</span>
            <span>Themeing</span>
            <span>CLI</span>
            <span>Typography</span>
          </div>

          <div>
            <span>Components</span>
            {Object.keys(COMPONENTS).map((component, index) => {
              return <span key={index}>{component}</span>;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileSidebar;
