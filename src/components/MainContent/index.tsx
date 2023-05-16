import Installation from '@/components/GettingStarted/Installation';
import Introduction from '@/components/GettingStarted/Introduction';
import Theming from '@/components/GettingStarted/Theming';
import Typography from '@/components/GettingStarted/Typography';
import useResolution, { DeviceType } from '@/hooks/useResolution';
import { useSideBarContext } from '@/hooks/useSideBarContext';
import DesktopSideNavBar from '@/layouts/DesktopSideNavBar';
import JumpNav from '@/layouts/JumpNav';
import { COMPONENTS, COMPONENTS_ROUTES, DOC_ROUTE } from '@/utils/constants';
import { convertToURL } from '@/utils/convertToURL';
import { FC, createElement, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './styles.module.css';

const DocContent: FC = () => {
  const { currentSection } = useSideBarContext();
  const [deviceType] = useResolution();
  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    console.log(currentSection);
  });

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          {[DeviceType.DESKTOP, DeviceType.LARGE_DESKTOP].includes(deviceType) && <DesktopSideNavBar />}

          <div className={styles.middle_container}>
            {/* Getting started section */}
            {path === DOC_ROUTE && <Introduction />}
            {path === `${DOC_ROUTE}/installation` && <Installation />}
            {path === `${DOC_ROUTE}/theming` && <Theming />}
            {path === `${DOC_ROUTE}/typography` && <Typography />}

            {/* Components section */}
            {Object.keys(COMPONENTS).map((component, index) => {
              const section = component.toLowerCase();
              return (
                path === `${COMPONENTS_ROUTES + convertToURL(section)}` &&
                createElement(COMPONENTS[component], { key: index })
              );
            })}
          </div>

          {/* {[DeviceType.LARGE_DESKTOP].includes(deviceType) && (
            <JumpNav>
              {path === DOC_ROUTE && (
                <>
                  <span>FAQ</span>
                  <span>Credits</span>
                </>
              )}
            </JumpNav>
          )} */}
        </div>
      </div>
    </>
  );
};

export default DocContent;
