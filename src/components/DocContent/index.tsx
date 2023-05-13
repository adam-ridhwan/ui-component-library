import useResolution, { DeviceType } from '@/hooks/useResolution';
import { useSideBarContext } from '@/hooks/useSideBarContext';
import DesktopSideNavBar from '@/layouts/DesktopSideNavBar';
import JumpNav from '@/layouts/JumpNav';
import { COMPONENTS, GETTING_STARTED_COMPONENTS } from '@/utils/constants';
import { FC, createElement } from 'react';
import styles from './styles.module.css';

const DocContent: FC = () => {
  const [deviceType] = useResolution();
  const { currentSection } = useSideBarContext();

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.main_container}>
          {[DeviceType.DESKTOP, DeviceType.LARGE_DESKTOP].includes(deviceType) && <DesktopSideNavBar />}

          <div className={styles.middle_container}>
            {/* Getting started section */}
            {Object.keys(GETTING_STARTED_COMPONENTS).map((key) => {
              return key === currentSection ? createElement(GETTING_STARTED_COMPONENTS[key], { key }) : null;
            })}

            {/* Components section */}
            {Object.keys(COMPONENTS).map((key) => {
              return key === currentSection ? createElement(COMPONENTS[key], { key }) : null;
            })}
          </div>

          {[DeviceType.LARGE_DESKTOP].includes(deviceType) && <JumpNav />}
        </div>
      </div>
    </>
  );
};

export default DocContent;
