import NavigationLink from '@/components/navigation-link/NavigationLink.tsx';
import { useSideBarContext } from '@/hooks/useSideBarContext';
import { COMPONENTS, COMPONENTS_ROUTES, DOC_ROUTE, DOCUMENTATION } from '@/utils/constants';
import { convertToTitleCase } from '@/utils/convertToTitleCase';

import styles from './SideNavDesktop-styles.module.css';

const DesktopSideNavBar = () => {
  const { currentSection } = useSideBarContext();

  return (
    <>
      <aside>
        <div className={styles.container}>
          <div className={styles.instructions_container}>
            <span className={styles.title}>Getting started</span>
            {DOCUMENTATION.map((section, index) => {
              if (section === 'introduction')
                return (
                  <NavigationLink
                    key={index}
                    path={`${DOC_ROUTE}`}
                    section="docs"
                    className={`${
                      currentSection === 'docs' ? styles.navigation_link_active : styles.navigation_link_not_active
                    }`}
                  >
                    <span>{convertToTitleCase(section)}</span>
                  </NavigationLink>
                );

              return (
                <NavigationLink
                  key={index}
                  path={`${DOC_ROUTE}/${section}`}
                  section={section}
                  className={`${
                    currentSection === section ? styles.navigation_link_active : styles.navigation_link_not_active
                  }`}
                >
                  <span>{convertToTitleCase(section)}</span>
                </NavigationLink>
              );
            })}
          </div>

          <div className={styles.components_container}>
            <span className={styles.title}>Components</span>
            {COMPONENTS.map((component, index) => {
              return (
                <NavigationLink
                  key={index}
                  path={`${COMPONENTS_ROUTES}/${component}`}
                  section={component}
                  className={`${
                    currentSection === component ? styles.navigation_link_active : styles.navigation_link_not_active
                  }`}
                >
                  <span>{convertToTitleCase(component)}</span>
                </NavigationLink>
              );
            })}
          </div>
        </div>
      </aside>
    </>
  );
};
export default DesktopSideNavBar;
