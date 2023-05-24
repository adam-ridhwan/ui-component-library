import Chevronright from '@/assets/svg/ChevronRightIcon';
import NavigationLink from '@/components/navigation-link';
import Path from '@/components/path';
import * as Accordion from '@/components/ui/accordion/index';
import useResolution, { DeviceType } from '@/hooks/useResolution';
import { Tab, useTab } from '@/hooks/useTab';
import Divider from '@/layouts/divider';
import QuickNav from '@/layouts/quick-nav';
import { COMPONENTS, COMPONENTS_ROUTES } from '@/utils/constants';
import { convertToTitleCase } from '@/utils/convertToTitleCase';
import { FC } from 'react';
import styles from './AccordionDocsStyles.module.css';
import './AccordionStyles.css';

interface IAccordionProps {
  title: string;
  content: string;
}

const AccordionDocs: FC<IAccordionProps> = () => {
  const [deviceType] = useResolution();
  const isLargeDesktop = [DeviceType.LARGE_DESKTOP].includes(deviceType);
  const { selectedTab, switchTab } = useTab(Tab.PREVIEW);

  const previewTabClassName = `${styles.tab} ${
    selectedTab === Tab.PREVIEW ? styles.tab_active : styles.tab_not_active
  }`;
  const codeTabClassName = `${styles.tab} ${selectedTab === Tab.CODE ? styles.tab_active : styles.tab_not_active}`;

  return (
    <>
      <div className={styles.container}>
        <div className={styles.section_container}>
          <Path section={'Accordion'} />
          <h1>Accordion</h1>
          <h3>A vertically stacked set of interactive headings that each reveal an associated section of content.</h3>
          <Divider />

          <div className={styles.tab}>
            <button onClick={() => switchTab(Tab.PREVIEW)} className={previewTabClassName}>
              Preview
            </button>
            <button onClick={() => switchTab(Tab.CODE)} className={codeTabClassName}>
              Code
            </button>
          </div>

          <div className={styles.preview_container}>
            {selectedTab === Tab.PREVIEW && (
              <div className={styles.component_container}>
                <Accordion.Root className='AccordionRoot' defaultIndex={1} type='multiple'>
                  <Accordion.Item className='AccordionItem' index={0}>
                    <Accordion.Header className='AccordionHeader'>
                      <Accordion.Trigger className='AccordionTrigger'>Why Sustainable Living?</Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content>
                      Sustainable living isn't just a trend, it's a fundamental shift in how we interact with our
                      environment. The choices we make every day, from the food we eat to the transportation we use, can
                      have a major impact on our planet. By choosing a sustainable lifestyle, we can reduce our
                      ecological footprint and help preserve the natural world for future generations.
                    </Accordion.Content>
                  </Accordion.Item>
                  <Accordion.Item className='AccordionItem' index={1}>
                    <Accordion.Header className='AccordionHeader'>
                      <Accordion.Trigger className='AccordionTrigger'>
                        Easy Ways to Adopt Sustainability
                      </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content>
                      Adopting a more sustainable lifestyle doesn't have to be complicated or inconvenient. Here are a
                      few simple ways you can make a difference:
                      <ol>
                        <li>
                          Reduce, Reuse, Recycle: This age-old mantra still holds true. Consider buying less, reusing
                          items, and recycling where possible.
                        </li>
                        <li>Choose Green Energy: Switch to renewable energy sources such as solar or wind power.</li>
                        <li>
                          Eat Local and Organic: Choose foods that are locally sourced and grown organically to reduce
                          carbon emissions.
                        </li>
                        <li>Conserve Water: Use water-saving devices and avoid wasting water where possible.</li>
                      </ol>
                    </Accordion.Content>
                  </Accordion.Item>

                  <Accordion.Item className='AccordionItem' index={2}>
                    <Accordion.Header className='AccordionHeader'>
                      <Accordion.Trigger className='AccordionTrigger'>
                        The Impact of Sustainable Living
                      </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content>
                      Embracing sustainable living has a broader impact than just preserving our natural resources. It
                      can also contribute to our health and wellbeing, help us save money, and create stronger
                      communities. When we make conscious choices about our consumption, we can help create a healthier,
                      happier world for everyone. Join the sustainability movement today, and see the difference you can
                      make!
                    </Accordion.Content>
                  </Accordion.Item>
                </Accordion.Root>
              </div>
            )}

            {selectedTab === Tab.CODE && <div>Code content here...</div>}
          </div>

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

        <div className={styles.quick_nav_container}>
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

export { AccordionDocs };
