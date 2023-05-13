import { COMPONENTS } from '@/utils/constants';
import styles from './styles.module.css';

const DesktopSideNavBar = () => {
  return (
    <>
      <aside>
        <div className={styles.container}>
          <div className={styles.instructions_container}>
            <span>Getting started</span>
            <span>Introduction</span>
            <span>Installation</span>
            <span>Theming</span>
            <span>CLI</span>
            <span>Typography</span>
          </div>

          <div className={styles.components_container}>
            <span>Components</span>
            {Object.keys(COMPONENTS).map((component, index) => {
              return <span key={index}>{component}</span>;
            })}
          </div>
        </div>
      </aside>
    </>
  );
};
export default DesktopSideNavBar;
