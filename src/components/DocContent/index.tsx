import useResolution, { DeviceType } from '@/hooks/useResolution';
import DesktopSideNavBar from '@/layouts/DesktopSideNavBar';
import JumpNav from '@/layouts/JumpNav';
import { COMPONENTS, COMPONENTS_ROUTES, DOC_ROUTE } from '@/utils/constants';
import { FC, createElement, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Installation from '../GettingStarted/Installation';
import Introduction from '../GettingStarted/Introduction';
import Theming from '../GettingStarted/Theming';
import Typography from '../GettingStarted/Typography';
import styles from './styles.module.css';

const DocContent: FC = () => {
  const [deviceType] = useResolution();
  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    console.log(path);
  });

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.main_container}>
          {[DeviceType.DESKTOP, DeviceType.LARGE_DESKTOP].includes(deviceType) && <DesktopSideNavBar />}

          <div className={styles.middle_container}>
            {/* Getting started section */}
            {path === DOC_ROUTE && <Introduction />}
            {path === `${DOC_ROUTE}/installation` && <Installation />}
            {path === `${DOC_ROUTE}/theming` && <Theming />}
            {path === `${DOC_ROUTE}/typography` && <Typography />}

            {/* Components section */}
            {Object.keys(COMPONENTS).map((key) => {
              const lowercasekey = key.toLowerCase();
              return path === `${COMPONENTS_ROUTES}/${lowercasekey}` && createElement(COMPONENTS[key], { key });
            })}
          </div>

          {[DeviceType.LARGE_DESKTOP].includes(deviceType) && <JumpNav />}
        </div>
      </div>
    </>
  );
};

export default DocContent;
