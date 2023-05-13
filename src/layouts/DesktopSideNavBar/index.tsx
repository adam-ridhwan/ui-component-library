import NavigationButton from '@/components/NavigationButton/NavigationButton';
import { useSideBarContext } from '@/hooks/useSideBarContext';
import { COMPONENTS, GETTING_STARTED_NAVIGATION } from '@/utils/constants';
import { useEffect } from 'react';
import styles from './styles.module.css';

const DesktopSideNavBar = () => {
  const { currentSection } = useSideBarContext();

  useEffect(() => {
    console.log(currentSection);
  }, [currentSection]);
  return (
    <>
      <aside>
        <div className={styles.container}>
          <div className={styles.instructions_container}>
            <span>Getting started</span>
            {GETTING_STARTED_NAVIGATION.map((getting_started, index) => {
              return (
                <NavigationButton
                  key={index}
                  path={`/docs/${getting_started.toLowerCase().replace(' ', '-')}`}
                  section={getting_started}
                >
                  {getting_started}
                </NavigationButton>
              );
            })}
          </div>

          <div className={styles.components_container}>
            <span>Components</span>
            {Object.keys(COMPONENTS).map((component, index) => {
              return (
                <NavigationButton
                  key={index}
                  path={`/docs/components/${component.toLowerCase().replace(' ', '-')}`}
                  section={component}
                >
                  {component}
                </NavigationButton>
              );
            })}
          </div>
        </div>
      </aside>
    </>
  );
};
export default DesktopSideNavBar;
