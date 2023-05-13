import NavigationButton from '@/components/NavigationButton/NavigationButton';
import { COMPONENTS, COMPONENTS_ROUTES, DOC_ROUTES, GETTING_STARTED_COMPONENTS } from '@/utils/constants';
import { convertToURL } from '@/utils/convertToURL';
import styles from './styles.module.css';

const DesktopSideNavBar = () => {
  return (
    <>
      <aside>
        <div className={styles.container}>
          <div className={styles.instructions_container}>
            <span>Getting started</span>
            {Object.keys(GETTING_STARTED_COMPONENTS).map((componentString, index) => {
              return (
                <NavigationButton
                  key={index}
                  path={`${DOC_ROUTES + convertToURL(componentString)}`}
                  section={componentString}
                >
                  {componentString}
                </NavigationButton>
              );
            })}
          </div>

          <div className={styles.components_container}>
            <span>Components</span>
            {Object.keys(COMPONENTS).map((componentString, index) => {
              return (
                <NavigationButton
                  key={index}
                  path={`${COMPONENTS_ROUTES + convertToURL(componentString)}`}
                  section={componentString}
                >
                  {componentString}
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
