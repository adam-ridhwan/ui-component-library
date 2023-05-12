import { COMPONENTS } from '@/utils/constants';
import styles from './styles.module.css';

const DesktopSideNavBar = () => {
  return (
    <>
      <aside>
        <div className={styles.container}>
          <span>Components</span>
          {Object.keys(COMPONENTS).map((component, index) => {
            return <span key={index}>{component}</span>;
          })}
          {Object.keys(COMPONENTS).map((component, index) => {
            return <span key={index}>{component}</span>;
          })}
        </div>
      </aside>
    </>
  );
};
export default DesktopSideNavBar;
