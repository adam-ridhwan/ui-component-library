import NavigationButton from '@/components/NavigationButton/NavigationButton';
import { COMPONENTS } from '@/utils/constants';
import styles from './styles.module.css';

const DesktopSideNavBar = () => {
  return (
    <>
      <aside>
        <div className={styles.container}>
          <div className={styles.instructions_container}>
            <span>Getting started</span>
            <NavigationButton path='/docs/'>Introduction</NavigationButton>
            <NavigationButton path='/docs/'>Installation</NavigationButton>
            <NavigationButton path='/docs/'>Theming</NavigationButton>
            <NavigationButton path='/docs/'>CLI</NavigationButton>
            <NavigationButton path='/docs/'>Typography</NavigationButton>
          </div>

          <div className={styles.components_container}>
            <span>Components</span>
            {Object.keys(COMPONENTS).map((component, index) => {
              return (
                <NavigationButton key={index} path={`/docs/components/${component.toLowerCase()}`}>
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
