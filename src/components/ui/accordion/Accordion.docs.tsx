import { FC } from 'react';
import { CLOSING_BRACE, COMPONENTS, DOCUMENTATION, GREATER_THAN, LESS_THAN, OPENING_BRACE } from '@/utils/constants';
import { addTabs } from '@/utils/addTabs.ts';
import ChevronLeftIcon from '@/assets/svg/ChevronLeftIcon';
import ChevronRightIcon from '@/assets/svg/ChevronRightIcon';
import NavigationLink from '@/components/navigation-link/NavigationLink';
import Breadcrumbs from '@/components/breadcrumbs/Breadcrumbs';
import * as Accordion from '@/components/ui/accordion/index';
import ContentContainer from '@/components/containers/content-container/ContentContainer';
import SectionContainer from '@/components/containers/section-container/SectionContainer';
import Heading from '@/components/containers/typography/heading/Heading';
import Subheading from '@/components/containers/typography/subheading/Subheading';
import ComponentContainer from '@/components/containers/component-container/ComponentContainer';
import QuickNavContainer from '@/components/containers/quick-nav-container/QuickNavContainer';
import PaginationContainer from '@/components/containers/pagination-container/PaginationContainer';
import BodyContainer from '@/components/containers/body-container/BodyContainer';
import CodeContainer from '@/components/containers/code-container/CodeContainer';
import Divider from '@/layouts/divider/Divider';
import QuickNav from '@/layouts/quick-nav/QuickNav.tsx';
import { convertToTitleCase } from '@/utils/convertToTitleCase';
import { getPaginationIndex } from '@/utils/getPaginationIndex';

import './AccordionStyles.css';

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
            <Accordion.Root className='AccordionRoot' defaultIndex={-1} type='single'>
              <Accordion.Item className='AccordionItem' index={0}>
                <Accordion.Trigger className='AccordionTrigger'>Artificial Intelligence</Accordion.Trigger>
                <Accordion.Content className='AccordionContent'>
                  <div className='AccordionContentText'>AI enables machines to learn from experience.</div>
                </Accordion.Content>
              </Accordion.Item>

              <Accordion.Item className='AccordionItem' index={1}>
                <Accordion.Trigger className='AccordionTrigger'>Cyber Security</Accordion.Trigger>

                <Accordion.Content className='AccordionContent'>
                  <div className='AccordionContentText'>Cyber security protects internet-connected systems.</div>
                </Accordion.Content>
              </Accordion.Item>

              <Accordion.Item className='AccordionItem' index={2}>
                <Accordion.Trigger className='AccordionTrigger'>Blockchain Technology</Accordion.Trigger>
                <Accordion.Content className='AccordionContent'>
                  <div className='AccordionContentText'>
                    Blockchain technology provides a secure way of recording transactions.
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            </Accordion.Root>
          </ComponentContainer>

          <CodeContainer isExpandable={true}>
            {/*prettier-ignore*/}
            <div>
              <span className='syntax--sky'>
                <span className='syntax--teal'>{LESS_THAN}Accordion.Root</span> className=
                <span className='syntax--crimson'>'AccordionRoot'</span> defaultIndex=
                <span className='syntax--crimson'>{OPENING_BRACE}-1{CLOSING_BRACE}</span> type=
                <span className='syntax--crimson'>'single'</span>
                <span className='syntax--teal'>{GREATER_THAN}</span>
              </span>

              <span className='syntax--sky'>
                {addTabs(1)}
                <span className='syntax--teal'>{LESS_THAN}Accordion.Item</span> className=
                <span className='syntax--crimson'>'AccordionItem'</span> index=
                <span className='syntax--crimson'>{OPENING_BRACE}0{CLOSING_BRACE}</span>
                <span className='syntax--teal'>{GREATER_THAN}</span>
              </span>

              <span className='syntax--sky'>
                {addTabs(2)}
                <span className='syntax--teal'>{LESS_THAN}Accordion.Trigger</span> className=
                <span className='syntax--crimson'>'AccordionTrigger'</span>
                <span className='syntax--teal'>{GREATER_THAN}</span>
              </span>

              <span className='syntax--sky'>
                {addTabs(3)}
                <span className='syntax--indigo'>Artificial Intelligence</span>
              </span>

              <span className='syntax--sky'>
                {addTabs(2)}
                <span className='syntax--teal'>{LESS_THAN}/Accordion.Trigger{GREATER_THAN}</span>
              </span>

              <span className='syntax--sky'>
                {addTabs(2)}
                <span className='syntax--teal'>{LESS_THAN}Accordion.Content</span> className=
                <span className='syntax--crimson'>'AccordionContent'</span>
                <span className='syntax--teal'>{GREATER_THAN}</span>
              </span>

              <span className='syntax--sky'>
                {addTabs(3)}
                <span className='syntax--teal'>{LESS_THAN}div</span> className=
                <span className='syntax--crimson'>'AccordionContentText'</span>
                <span className='syntax--teal'>{GREATER_THAN}</span>
              </span>

              <span className='syntax--sky'>
                {addTabs(4)}
                <span className='syntax--indigo'>AI enables machines to learn from experience.</span>
              </span>

              <span className='syntax--sky'>
                {addTabs(3)}
                <span className='syntax--teal'>{LESS_THAN}/div</span>
                <span className='syntax--teal'>{GREATER_THAN}</span>
              </span>

              <span className='syntax--sky'>
                {addTabs(2)}
                <span className='syntax--teal'>{LESS_THAN}/Accordion.Content</span>
                <span className='syntax--teal'>{GREATER_THAN}</span>
              </span>

              <span className='syntax--sky'>
                {addTabs(1)}
                <span className='syntax--teal'>{LESS_THAN}/Accordion.Item</span>
                <span className='syntax--teal'>{GREATER_THAN}</span>
              </span>


              {/** ----- */}
              <br/>

              <span className='syntax--sky'>
                {addTabs(1)}
                <span className='syntax--teal'>{LESS_THAN}Accordion.Item</span> className=
                <span className='syntax--crimson'>'AccordionItem'</span> index=
                <span className='syntax--crimson'>{OPENING_BRACE}1{CLOSING_BRACE}</span>
                <span className='syntax--teal'>{GREATER_THAN}</span>
              </span>

              <span className='syntax--sky'>
                {addTabs(2)}
                <span className='syntax--teal'>{LESS_THAN}Accordion.Trigger</span> className=
                <span className='syntax--crimson'>'AccordionTrigger'</span>
                <span className='syntax--teal'>{GREATER_THAN}</span>
              </span>

              <span className='syntax--sky'>
                {addTabs(3)}
                <span className='syntax--indigo'>Cyber Security</span>
              </span>

              <span className='syntax--sky'>
                {addTabs(2)}
                <span className='syntax--teal'>{LESS_THAN}/Accordion.Trigger{GREATER_THAN}</span>
              </span>

              <span className='syntax--sky'>
                {addTabs(2)}
                <span className='syntax--teal'>{LESS_THAN}Accordion.Content</span> className=
                <span className='syntax--crimson'>'AccordionContent'</span>
                <span className='syntax--teal'>{GREATER_THAN}</span>
              </span>

              <span className='syntax--sky'>
                {addTabs(3)}
                <span className='syntax--teal'>{LESS_THAN}div</span> className=
                <span className='syntax--crimson'>'AccordionContentText'</span>
                <span className='syntax--teal'>{GREATER_THAN}</span>
              </span>

              <span className='syntax--sky'>
                {addTabs(4)}
                <span className='syntax--indigo'>Cybersecurity protects internet-connected systems.</span>
              </span>

              <span className='syntax--sky'>
                {addTabs(3)}
                <span className='syntax--teal'>{LESS_THAN}/div</span>
                <span className='syntax--teal'>{GREATER_THAN}</span>
              </span>

              <span className='syntax--sky'>
                {addTabs(2)}
                <span className='syntax--teal'>{LESS_THAN}/Accordion.Content</span>
                <span className='syntax--teal'>{GREATER_THAN}</span>
              </span>

              <span className='syntax--sky'>
                {addTabs(1)}
                <span className='syntax--teal'>{LESS_THAN}/Accordion.Item</span>
                <span className='syntax--teal'>{GREATER_THAN}</span>
              </span>

              {/** ----- */}
              <br/>

              <span className='syntax--sky'>
                {addTabs(1)}
                <span className='syntax--teal'>{LESS_THAN}Accordion.Item</span> className=
                <span className='syntax--crimson'>'AccordionItem'</span> index=
                <span className='syntax--crimson'>{OPENING_BRACE}0{CLOSING_BRACE}</span>
                <span className='syntax--teal'>{GREATER_THAN}</span>
              </span>

              <span className='syntax--sky'>
                {addTabs(2)}
                <span className='syntax--teal'>{LESS_THAN}Accordion.Trigger</span> className=
                <span className='syntax--crimson'>'AccordionTrigger'</span>
                <span className='syntax--teal'>{GREATER_THAN}</span>
              </span>

              <span className='syntax--sky'>
                {addTabs(3)}
                <span className='syntax--indigo'>Blockchain Technology</span>
              </span>

              <span className='syntax--sky'>
                {addTabs(2)}
                <span className='syntax--teal'>{LESS_THAN}/Accordion.Trigger{GREATER_THAN}</span>
              </span>

              <span className='syntax--sky'>
                {addTabs(2)}
                <span className='syntax--teal'>{LESS_THAN}Accordion.Content</span> className=
                <span className='syntax--crimson'>'AccordionContent'</span>
                <span className='syntax--teal'>{GREATER_THAN}</span>
              </span>

              <span className='syntax--sky'>
                {addTabs(3)}
                <span className='syntax--teal'>{LESS_THAN}div</span> className=
                <span className='syntax--crimson'>'AccordionContentText'</span>
                <span className='syntax--teal'>{GREATER_THAN}</span>
              </span>

              <span className='syntax--sky'>
                {addTabs(4)}
                <span className='syntax--indigo'>
                  Blockchain technology provides a secure way of recording transactions.{addTabs(2)}
                </span>
              </span>

              <span className='syntax--sky'>
                {addTabs(3)}
                <span className='syntax--teal'>{LESS_THAN}/div</span>
                <span className='syntax--teal'>{GREATER_THAN}</span>
              </span>

              <span className='syntax--sky'>
                {addTabs(2)}
                <span className='syntax--teal'>{LESS_THAN}/Accordion.Content</span>
                <span className='syntax--teal'>{GREATER_THAN}</span>
              </span>

              <span className='syntax--sky'>
                {addTabs(1)}
                <span className='syntax--teal'>{LESS_THAN}/Accordion.Item</span>
                <span className='syntax--teal'>{GREATER_THAN}</span>
              </span>

              <span className='syntax--sky'>
                <span className='syntax--teal'>{LESS_THAN}/Accordion.Root</span>
                <span className='syntax--teal'>{GREATER_THAN}</span>
              </span>

            </div>
          </CodeContainer>

          <BodyContainer>
            <h2>Installation</h2>
            <span>Import all parts.</span>

            <CodeContainer>
              <span className='syntax--sky'>
                import <span className='syntax--crimson'>* as Accordion</span> from '@/components/ui/accordion/index';
              </span>
            </CodeContainer>
          </BodyContainer>

          <BodyContainer>
            <h2>Anatomy</h2>
            <span>Piece them together.</span>

            <CodeContainer>
              {/*prettier-ignore*/}
              <div>
                <span className='syntax--sky'>{`() => (`}</span>

                <span className='syntax--sky'>
                  {addTabs(1)}
                  <span className='syntax--teal'>{LESS_THAN}Accordion.Root{GREATER_THAN}</span>
                </span>

                <span className='syntax--sky'>
                  {addTabs(2)}
                  <span className='syntax--teal'>{LESS_THAN}Accordion.Item{GREATER_THAN}</span>
                </span>

                <span className='syntax--sky'>
                  {addTabs(3)}
                  <span className='syntax--teal'>{LESS_THAN}Accordion.Trigger{GREATER_THAN}</span>
                </span>

                <span className='syntax--sky'>
                  {addTabs(3)}
                  <span className='syntax--teal'>{LESS_THAN}Accordion.Content{GREATER_THAN}</span>
                </span>

                <span className='syntax--sky'>
                  {addTabs(2)}
                  <span className='syntax--teal'>{LESS_THAN}Accordion.Item{GREATER_THAN}</span>
                </span>

                <span className='syntax--sky'>
                  {addTabs(1)}
                  <span className='syntax--teal'>{LESS_THAN}Accordion.Root{GREATER_THAN}</span>
                </span>

                <span className='syntax--sky'>{`)`}</span>
              </div>
            </CodeContainer>
          </BodyContainer>

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
