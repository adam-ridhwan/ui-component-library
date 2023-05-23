import CloseIcon from '@/assets/svg/CloseIcon';
import NavigationLink from '@/components/navigation-link';
import { useSideBarContext } from '@/hooks/useSideBarContext';
import { COMPONENTS, COMPONENTS_ROUTES, DOC_ROUTE } from '@/utils/constants';
import { convertToTitleCase } from '@/utils/convertToTitleCase';
import { FC, useRef } from 'react';
import styles from './styles.module.css';

const MobileSideNav: FC = () => {
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
            <NavigationLink path={DOC_ROUTE} section={'docs'} closeModal={handleCloseModal}>
              Documentation
            </NavigationLink>
            <NavigationLink
              path={`${COMPONENTS_ROUTES}/accordion`}
              section={Object.keys(COMPONENTS)[0]}
              closeModal={handleCloseModal}
            >
              Components
            </NavigationLink>
            <NavigationLink path='/examples' section={''} closeModal={handleCloseModal}>
              Examples
            </NavigationLink>
          </div>

          <div>
            <span className={styles.sidebar_title}>Getting started</span>
          </div>
          <div>
            <span className={styles.sidebar_title}>Components</span>
            {Object.keys(COMPONENTS).map((component, index) => {
              return (
                <NavigationLink
                  key={index}
                  path={`${COMPONENTS_ROUTES}/${component}`}
                  section={component}
                  closeModal={handleCloseModal}
                >
                  {convertToTitleCase(component)}
                </NavigationLink>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileSideNav;
