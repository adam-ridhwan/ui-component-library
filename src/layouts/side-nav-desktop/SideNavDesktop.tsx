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
            <span>Getting started</span>
            {DOCUMENTATION.map((section, index) => {
              if (section === 'introduction')
                return (
                  <NavigationLink key={index} path={`${DOC_ROUTE}`} section="docs">
                    <span className={currentSection === 'docs' ? styles.active_section : ''}>
                      {convertToTitleCase(section)}
                    </span>
                  </NavigationLink>
                );

              return (
                <NavigationLink key={index} path={`${DOC_ROUTE}/${section}`} section={section}>
                  <span className={currentSection === section ? styles.active_section : ''}>
                    {convertToTitleCase(section)}
                  </span>
                </NavigationLink>
              );
            })}
          </div>

          <div className={styles.components_container}>
            <span>Components</span>
            {COMPONENTS.map((component, index) => {
              return (
                <NavigationLink key={index} path={`${COMPONENTS_ROUTES}/${component}`} section={component}>
                  <span className={currentSection === component ? styles.active_section : ''}>
                    {convertToTitleCase(component)}
                  </span>
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
