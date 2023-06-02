// import ChevronRight from '@/assets/svg/ChevronRightIcon';
import NavigationLink from '@/components/navigation-link';
import Breadcrumbs from '@/components/breadcrumbs/Breadcrumbs.tsx';
import * as Accordion from '@/components/ui/accordion/index';
import { Tab, useTab } from '@/hooks/useTab';
import Divider from '@/layouts/divider';
import QuickNav from '@/layouts/quick-nav';
import TabSelector from '@/layouts/tab-selector';
import { COMPONENTS, DOCUMENTATION } from '@/utils/constants';
import { convertToTitleCase } from '@/utils/convertToTitleCase';
import { FC } from 'react';
import { getPaginationIndex } from '@/utils/getPaginationIndex.ts';
import ContentContainer from '@/components/containers/content-container/ContentContainer.tsx';
import SectionContainer from '@/components/containers/section-container/SectionContainer.tsx';
import Heading from '@/components/containers/typography/heading/Heading.tsx';
import Subheading from '@/components/containers/typography/subheading/Subheading.tsx';
import ComponentContainer from '@/components/containers/component-container/ComponentContainer.tsx';
import QuickNavContainer from '@/components/containers/quick-nav-container/QuickNavContainer.tsx';
import PaginationContainer from '@/components/containers/pagination-container/PaginationContainer.tsx';
import ChevronLeftIcon from '@/assets/svg/ChevronLeftIcon.tsx';
import ChevronRightIcon from '@/assets/svg/ChevronRightIcon';

import './AccordionStyles.css';

const AccordionDocs: FC = () => {
  const { selectedTab, switchTab } = useTab();

  const [, NEXT_INDEX] = getPaginationIndex('accordion');

  return (
    <>
      <ContentContainer>
        <SectionContainer>
          <Breadcrumbs section={'Accordion'} />
          <Heading>Accordion</Heading>
          <Subheading>
            A vertically stacked set of interactive headings that each reveal an associated section of content.
          </Subheading>
          <Divider />

          <TabSelector {...{ selectedTab, switchTab }} />

          <ComponentContainer>
            {selectedTab === Tab.PREVIEW && (
              <>
                <Accordion.Root className="AccordionRoot" defaultIndex={-1} type="single">
                  <Accordion.Item className="AccordionItem" index={0}>
                    <Accordion.Trigger className="AccordionTrigger">Why Sustainable Living?</Accordion.Trigger>
                    <Accordion.Content className="AccordionContent">
                      <div className="AccordionContentText">
                        Sustainable living isn't just a trend, it's a fundamental shift in how we interact with our
                        environment. The choices we make every day, from the food we eat to the transportation we use,
                        can have a major impact on our planet.
                      </div>
                    </Accordion.Content>
                  </Accordion.Item>

                  <Accordion.Item className="AccordionItem" index={1}>
                    <Accordion.Trigger className="AccordionTrigger">
                      Easy Ways to Adopt Sustainability
                    </Accordion.Trigger>
                    <Accordion.Content className="AccordionContent">
                      <div className="AccordionContentText">
                        Adopting a more sustainable lifestyle doesn't have to be complicated or inconvenient. Here are a
                        few simple ways you can make a difference: Reduce, Reuse, Recycle: This age-old mantra still
                      </div>
                    </Accordion.Content>
                  </Accordion.Item>

                  <Accordion.Item className="AccordionItem" index={2}>
                    <Accordion.Trigger className="AccordionTrigger">The Impact of Sustainable Living</Accordion.Trigger>
                    <Accordion.Content className="AccordionContent">
                      <div className="AccordionContentText">
                        Embracing sustainable living has a broader impact than just preserving our natural resources. It
                        can also contribute to our health and well-being, help us save money, and create stronger
                        communities.
                      </div>
                    </Accordion.Content>
                  </Accordion.Item>
                </Accordion.Root>
              </>
            )}

            {selectedTab === Tab.CODE && <code>Code content here...</code>}
          </ComponentContainer>

          <Divider />

          <PaginationContainer>
            <NavigationLink path={`/docs/typography`} section={'typography'}>
              <span>
                <ChevronLeftIcon />
              </span>
              <span>{convertToTitleCase(DOCUMENTATION[DOCUMENTATION.length - 1])}</span>
            </NavigationLink>

            <NavigationLink path={`/docs/components/${COMPONENTS[NEXT_INDEX]}`} section={COMPONENTS[NEXT_INDEX]}>
              <span>{convertToTitleCase(COMPONENTS[NEXT_INDEX])}</span>
              <span>
                <ChevronRightIcon />
              </span>
            </NavigationLink>
          </PaginationContainer>
        </SectionContainer>

        <QuickNavContainer>
          <QuickNav>
            {/*<span onClick={() => jumpToSection()}>FAQ</span>*/}
            {/*<span onClick={() => jumpToSection()}>Credits</span>*/}
          </QuickNav>
        </QuickNavContainer>
      </ContentContainer>
    </>
  );
};

export { AccordionDocs };
