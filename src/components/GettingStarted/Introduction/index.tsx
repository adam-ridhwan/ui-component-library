import Chevronright from '@/assets/svg/ChevronRightIcon';
import NavigationLink from '@/components/NavigationLink';
import Path from '@/components/Path';
import useResolution, { DeviceType } from '@/hooks/useResolution';
import Divider from '@/layouts/Divider';
import QuickNav from '@/layouts/QuickNav';
import { DOCUMENTATION, DOC_ROUTE } from '@/utils/constants';
import { convertToTitleCase } from '@/utils/convertToTitleCase';
import { useRef } from 'react';
import styles from './styles.module.css';

const Introduction = () => {
  const faqRef = useRef<HTMLDivElement>(null);
  const creditsRef = useRef<HTMLDivElement>(null);
  const [deviceType] = useResolution();
  const isLargeDesktop = [DeviceType.LARGE_DESKTOP].includes(deviceType);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.section_container}>
          <Path section={'Introduction'} />
          <h1>Introduction</h1>
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
          <Divider />

          <div className='navigation_button-container'>
            <NavigationLink path={`${DOC_ROUTE}/${DOCUMENTATION[1]}`} section={DOCUMENTATION[1]}>
              <span>{convertToTitleCase(DOCUMENTATION[1])}</span>
              <span>
                <Chevronright />
              </span>
            </NavigationLink>
          </div>
        </div>

        <div className={styles.quick_nav_container}>
          {isLargeDesktop && (
            <QuickNav>
              <NavigationLink path={`${DOC_ROUTE}#faq`} sectionRef={faqRef}>
                FAQ
              </NavigationLink>
              <NavigationLink path={`${DOC_ROUTE}#credits`} sectionRef={creditsRef}>
                Credits
              </NavigationLink>
            </QuickNav>
          )}
        </div>
      </div>
    </>
  );
};
export default Introduction;
