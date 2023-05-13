import useResolution, { DeviceType } from '@/hooks/useResolution';
import DesktopSideNavBar from '@/layouts/DesktopSideNavBar';
import JumpNav from '@/layouts/JumpNav';
import { COMPONENTS, DOC_ROUTE, GETTING_STARTED_COMPONENTS } from '@/utils/constants';
import { convertToURL } from '@/utils/convertToURL';
import { FC, createElement } from 'react';
import { useLocation } from 'react-router-dom';
import Introduction from '../GettingStarted/Introduction';
import styles from './styles.module.css';

const DocContent: FC = () => {
  const [deviceType] = useResolution();
  const location = useLocation();
  const lastParameter = location.pathname.split('/').pop();
  const docRoute = DOC_ROUTE.split('/').pop();

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.main_container}>
          {[DeviceType.DESKTOP, DeviceType.LARGE_DESKTOP].includes(deviceType) && <DesktopSideNavBar />}

          <div className={styles.middle_container}>
            {/* Documentation section */}
            {lastParameter === docRoute && <Introduction />}

            {/* Getting started section */}
            {Object.keys(GETTING_STARTED_COMPONENTS).map((key) => {
              return convertToURL(key) === lastParameter && createElement(GETTING_STARTED_COMPONENTS[key], { key });
            })}

            {/* Components section */}
            {Object.keys(COMPONENTS).map((key) => {
              return convertToURL(key) === lastParameter && createElement(COMPONENTS[key], { key });
            })}
          </div>

          {[DeviceType.LARGE_DESKTOP].includes(deviceType) && <JumpNav />}
        </div>
      </div>
    </>
  );
};

export default DocContent;
