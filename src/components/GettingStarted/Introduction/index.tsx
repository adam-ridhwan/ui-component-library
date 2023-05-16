import Divider from '@/components/Divider';
import Path from '@/components/Path';
import useResolution, { DeviceType } from '@/hooks/useResolution';
import { useSideBarContext } from '@/hooks/useSideBarContext';
import JumpNav from '@/layouts/JumpNav';
import jumpToSection from '@/utils/jumpToSection';
import { useEffect, useRef } from 'react';
import styles from './styles.module.css';

const Introduction = () => {
  const faqRef = useRef<HTMLDivElement>(null);
  const creditsRef = useRef<HTMLDivElement>(null);
  const { currentSection } = useSideBarContext();
  const [deviceType] = useResolution();
  const isLargeDesktop = [DeviceType.LARGE_DESKTOP].includes(deviceType);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.section_container}>
          <Path section={currentSection} />
          <h1>{currentSection}</h1>
          <span>Reusable components built from scratch</span>
          <Divider />
          <div className={styles.section_body}>
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
          <div ref={faqRef} className={styles.section_body}>
            <h2>FAQ</h2>
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
          <div ref={creditsRef} className={styles.section_body}>
            <h2>Credits</h2>
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
        </div>

        <div className={styles.jump_nav_container}>
          {isLargeDesktop && (
            <JumpNav>
              <>
                <span onClick={() => jumpToSection(faqRef)}>FAQ</span>
                <span onClick={() => jumpToSection(creditsRef)}>Credits</span>
              </>
            </JumpNav>
          )}
        </div>
      </div>
    </>
  );
};
export default Introduction;
