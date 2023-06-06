import { FC } from 'react';
import NavigationLink from '@/components/navigation-link/NavigationLink';
import { useSideBarContext } from '@/hooks/useSideBarContext';
import { COMPONENTS, COMPONENTS_ROUTES, DOC_ROUTE, DOCUMENTATION } from '@/utils/constants';
import { convertToTitleCase } from '@/utils/convertToTitleCase';

import styles from './SideNavDesktop-styles.module.css';

const DesktopSideNavBar: FC = () => {
  const { currentSection } = useSideBarContext();

  const renderNavigationLinks = (items: string[], basePath: string, isDoc: boolean) => {
    return items.map((item, index) => {
      const path = isDoc && item === 'introduction' ? DOC_ROUTE : `${basePath}/${item}`;
      const section = isDoc && item === 'introduction' ? 'docs' : item;

      return (
        <NavigationLink
          key={index}
          path={path}
          section={section}
          className={currentSection === section ? styles.navigation_link_active : styles.navigation_link_not_active}
        >
          <span>{convertToTitleCase(item)}</span>
        </NavigationLink>
      );
    });
  };

  return (
    <>
      <aside>
        <div className={styles.container}>
          <div className={styles.instructions_container}>
            <span className={styles.title}>Getting started</span>
            {renderNavigationLinks(DOCUMENTATION, DOC_ROUTE, true)}
          </div>

          <div className={styles.components_container}>
            <span className={styles.title}>Components</span>
            {renderNavigationLinks(COMPONENTS, COMPONENTS_ROUTES, false)}
          </div>
        </div>
      </aside>
    </>
  );
};

export default DesktopSideNavBar;
