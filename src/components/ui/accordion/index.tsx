import Chevronright from '@/assets/svg/ChevronRightIcon';
import NavigationLink from '@/components/navigation-link';
import Path from '@/components/path';
import useResolution, { DeviceType } from '@/hooks/useResolution';
import { useSideBarContext } from '@/hooks/useSideBarContext';
import Divider from '@/layouts/divider';
import QuickNav from '@/layouts/quick-nav';
import { COMPONENTS, COMPONENTS_ROUTES } from '@/utils/constants';
import { convertToTitleCase } from '@/utils/convertToTitleCase';
import { FC, useState } from 'react';
import styles from './styles.module.css';

interface IAccordionProps {
  title: string;
  content: string;
}

// () => (
//   <Accordion.Root>
//     <Accordion.Item>
//       <Accordion.Header>
//         <Accordion.Trigger />
//       </Accordion.Header>
//       <Accordion.Content />
//     </Accordion.Item>
//   </Accordion.Root>
// );

const Accordion: FC<IAccordionProps> = () => {
  const { currentSection } = useSideBarContext();
  const [deviceType] = useResolution();
  const isLargeDesktop = [DeviceType.LARGE_DESKTOP].includes(deviceType);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.section_container}>
          <Path section={'Accordion'} />
          <h1>Accordion</h1>
          <h3>A vertically stacked set of interactive headings that each reveal an associated section of content.</h3>
          <span></span>
          <Divider />

          <Divider />

          <div className='navigation_button-container'>
            <NavigationLink
              path={`${COMPONENTS_ROUTES}/${Object.keys(COMPONENTS)[1]}`}
              section={Object.keys(COMPONENTS)[1]}
            >
              <span>{convertToTitleCase(Object.keys(COMPONENTS)[1])}</span>
              <span>
                <Chevronright />
              </span>
            </NavigationLink>
          </div>
        </div>

        <div className={styles.jump_nav_container}>
          {isLargeDesktop && (
            <QuickNav>
              <>
                {/* <span onClick={() => jumpToSection(faqRef)}>FAQ</span>
                <span onClick={() => jumpToSection(creditsRef)}>Credits</span> */}
              </>
            </QuickNav>
          )}
        </div>
      </div>
    </>
  );
};
export default Accordion;
