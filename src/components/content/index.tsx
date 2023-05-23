import Installation from '@/components/getting-started/Installation';
import Introduction from '@/components/getting-started/Introduction';
import Theming from '@/components/getting-started/Theming';
import Typography from '@/components/getting-started/Typography';
import useResolution, { DeviceType } from '@/hooks/useResolution';
import { useSideBarContext } from '@/hooks/useSideBarContext';
import DesktopSideNavBar from '@/layouts/side-nav-desktop';
import { COMPONENTS } from '@/utils/constants';
import { FC, createElement, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './styles.module.css';

const Content: FC = () => {
  const { currentSection, setCurrentSection } = useSideBarContext();
  const [deviceType] = useResolution();
  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    const sectionArray = path.split('/');
    setCurrentSection(sectionArray[sectionArray.length - 1]);
  }, [path, setCurrentSection]);

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          {[DeviceType.DESKTOP, DeviceType.LARGE_DESKTOP].includes(deviceType) && <DesktopSideNavBar />}

          <div className={styles.middle_container}>
            {/* Getting started section */}
            {currentSection === 'docs' && <Introduction />}
            {currentSection === 'installation' && <Installation />}
            {currentSection === 'theming' && <Theming />}
            {currentSection === 'typography' && <Typography />}

            {/* Components section */}
            {Object.keys(COMPONENTS).map((component, index) => {
              return currentSection === component && createElement(COMPONENTS[component], { key: index });
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
