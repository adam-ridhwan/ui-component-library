import { FC } from 'react';
import NavigationLink from '@/components/navigation-link/NavigationLink';
import Breadcrumbs from '@/components/breadcrumbs/Breadcrumbs';
import * as Accordion from '@/components/ui/accordion/index';
import Divider from '@/layouts/divider/Divider';
import QuickNav from '@/layouts/quick-nav';
import { COMPONENTS, DOCUMENTATION } from '@/utils/constants';
import { convertToTitleCase } from '@/utils/convertToTitleCase';
import { getPaginationIndex } from '@/utils/getPaginationIndex';
import ContentContainer from '@/components/containers/content-container/ContentContainer';
import SectionContainer from '@/components/containers/section-container/SectionContainer';
import Heading from '@/components/containers/typography/heading/Heading';
import Subheading from '@/components/containers/typography/subheading/Subheading';
import ComponentContainer from '@/components/containers/component-container/ComponentContainer';
import QuickNavContainer from '@/components/containers/quick-nav-container/QuickNavContainer';
import PaginationContainer from '@/components/containers/pagination-container/PaginationContainer';
import ChevronLeftIcon from '@/assets/svg/ChevronLeftIcon';
import ChevronRightIcon from '@/assets/svg/ChevronRightIcon';
import BodyContainer from '@/components/containers/body-container/BodyContainer';

import './AccordionStyles.css';
import CodeContainer from '@/components/containers/code-container/CodeContainer.tsx';

const AccordionDocs: FC = () => {
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

          <ComponentContainer>
            <>
              <Accordion.Root className="AccordionRoot" defaultIndex={-1} type="single">
                <Accordion.Item className="AccordionItem" index={0}>
                  <Accordion.Trigger className="AccordionTrigger">Why Sustainable Living?</Accordion.Trigger>
                  <Accordion.Content className="AccordionContent">
                    <div className="AccordionContentText">
                      Sustainable living isn't just a trend, it's a fundamental shift in how we interact with our
                      environment.
                    </div>
                  </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item className="AccordionItem" index={1}>
                  <Accordion.Trigger className="AccordionTrigger">Easy Ways to Adopt Sustainability</Accordion.Trigger>
                  <Accordion.Content className="AccordionContent">
                    <div className="AccordionContentText">
                      Adopting a more sustainable lifestyle doesn't have to be complicated or inconvenient.
                    </div>
                  </Accordion.Content>
                </Accordion.Item>

                <Accordion.Item className="AccordionItem" index={2}>
                  <Accordion.Trigger className="AccordionTrigger">The Impact of Sustainable Living</Accordion.Trigger>
                  <Accordion.Content className="AccordionContent">
                    <div className="AccordionContentText">
                      Embracing sustainable living has a broader impact than just preserving our natural resources.
                    </div>
                  </Accordion.Content>
                </Accordion.Item>
              </Accordion.Root>
            </>
          </ComponentContainer>

          <BodyContainer>
            <h2>Usage</h2>
            <span>When using an accordion, it's as simple as importing the necessary components.</span>
          </BodyContainer>

          <CodeContainer>
            <pre>
              <code>
                <span className="syntax--main">
                  import <span className="syntax--secondary">* as Accordion</span> from
                  '@/components/ui/accordion/index';
                </span>
              </code>
            </pre>
          </CodeContainer>

          <Divider />

          <PaginationContainer>
            <NavigationLink
              path={`/docs/${DOCUMENTATION[DOCUMENTATION.length - 1]}`}
              section={DOCUMENTATION[DOCUMENTATION.length - 1]}
            >
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
