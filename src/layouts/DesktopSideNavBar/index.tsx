import NavigationButton from '@/components/NavigationButton/NavigationButton';
import { COMPONENTS, GETTING_STARTED_COMPONENTS } from '@/utils/constants';
import { format } from '@/utils/format';
import styles from './styles.module.css';

const DesktopSideNavBar = () => {
  return (
    <>
      <aside>
        <div className={styles.container}>
          <div className={styles.instructions_container}>
            <span>Getting started</span>
            {Object.keys(GETTING_STARTED_COMPONENTS).map((component, index) => {
              return (
                <NavigationButton key={index} path={`/docs/${format(component)}`} section={component}>
                  {component}
                </NavigationButton>
              );
            })}
          </div>

          <div className={styles.components_container}>
            <span>Components</span>
            {Object.keys(COMPONENTS).map((component, index) => {
              return (
                <NavigationButton key={index} path={`/docs/components/${format(component)}`} section={component}>
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
