import useResolution, { DeviceType } from '@/hooks/useResolution';
import DesktopSideNavBar from '@/layouts/DesktopSideNavBar';
import JumpNav from '@/layouts/JumpNav';
import styles from './styles.module.css';

const DocContent = () => {
  const [deviceType] = useResolution();

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.main_container}>
          {[DeviceType.DESKTOP, DeviceType.LARGE_DESKTOP].includes(deviceType) && <DesktopSideNavBar />}

          <div className={styles.middle_container}>
            <span>Docs Introduction</span>
            <h1>Introduction</h1>
            <span>Reusable components built from scratch</span>
            <div className={styles.horizontal_line} />
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur unde nisi quas repudiandae! Perferendis
              earum a minus dolorem, officia accusantium sapiente magnam quos sint, soluta expedita deleniti maxime
              perspiciatis necessitatibus!
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis consequuntur qui rerum repudiandae odio
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis consequuntur qui rerum repudiandae odio
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis consequuntur qui rerum repudiandae odio
              quidem veniam eos! Possimus eligendi illo ab! Quibusdam impedit totam natus quia ex sit quisquam aliquid.
            </span>

            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur unde nisi quas repudiandae! Perferendis
              earum a minus dolorem, officia accusantium sapiente magnam quos sint, soluta expedita deleniti maxime
              perspiciatis necessitatibus!
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis consequuntur qui rerum repudiandae odio
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis consequuntur qui rerum repudiandae odio
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis consequuntur qui rerum repudiandae odio
              quidem veniam eos! Possimus eligendi illo ab! Quibusdam impedit totam natus quia ex sit quisquam aliquid.
            </span>

            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur unde nisi quas repudiandae! Perferendis
              earum a minus dolorem, officia accusantium sapiente magnam quos sint, soluta expedita deleniti maxime
              perspiciatis necessitatibus!
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis consequuntur qui rerum repudiandae odio
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis consequuntur qui rerum repudiandae odio
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis consequuntur qui rerum repudiandae odio
              quidem veniam eos! Possimus eligendi illo ab! Quibusdam impedit totam natus quia ex sit quisquam aliquid.
            </span>
          </div>

          {[DeviceType.LARGE_DESKTOP].includes(deviceType) && <JumpNav />}
        </div>
      </div>
    </>
  );
};

export default DocContent;
