import NavigationButton from '@/components/NavigationButton/NavigationButton';
import { COMPONENTS, COMPONENTS_ROUTES, DOC_ROUTE } from '@/utils/constants';
import { convertToURL } from '@/utils/convertToURL';
import styles from './styles.module.css';

const DesktopSideNavBar = () => {
  return (
    <>
      <aside>
        <div className={styles.container}>
          <div className={styles.instructions_container}>
            <span>Getting started</span>
            <NavigationButton path={`${DOC_ROUTE}`} section='Introduction'>
              Introduction
            </NavigationButton>
            <NavigationButton path={`${DOC_ROUTE}/installation`} section='Installation'>
              Installation
            </NavigationButton>
            <NavigationButton path={`${DOC_ROUTE}/theming`} section='Theming'>
              Theming
            </NavigationButton>
            <NavigationButton path={`${DOC_ROUTE}/typography`} section='Typography'>
              Typography
            </NavigationButton>
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
