import NavigationButton from '@/components/NavigationButton/NavigationButton';
import { COMPONENTS, COMPONENTS_ROUTES, DOC_ROUTE, DOCUMENTATION } from '@/utils/constants';
import { convertToTitleCase } from '@/utils/convertToTitleCase';
import styles from './styles.module.css';

const DesktopSideNavBar = () => {
  return (
    <>
      <aside>
        <div className={styles.container}>
          <div className={styles.instructions_container}>
            <span>Getting started</span>
            {DOCUMENTATION.map((section, index) => {
              if (section === 'introduction')
                return (
                  <NavigationButton path={`${DOC_ROUTE}`} section='docs'>
                    {convertToTitleCase(section)}
                  </NavigationButton>
                );

              return (
                <NavigationButton key={index} path={`${DOC_ROUTE}/${section}`} section={`${section}`}>
                  {convertToTitleCase(section)}
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
                  path={`${COMPONENTS_ROUTES}/${componentString}`}
                  section={componentString}
                >
                  {convertToTitleCase(componentString)}
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
