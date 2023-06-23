import { Tab, useTab } from '@/hooks/useTab';
import { COMPONENTS } from '@/utils/constants';
import ContentContainer from '@/components/containers/content-container/ContentContainer';
import SectionContainer from '@/components/containers/section-container/SectionContainer';
import Breadcrumbs from '@/components/breadcrumbs/Breadcrumbs';
import Heading from '@/components/containers/typography/heading/Heading';
import Subheading from '@/components/containers/typography/subheading/Subheading';
import Divider from '@/layouts/divider/Divider';
import TabSelector from '@/layouts/tab-selector';
import ComponentContainer from '@/components/containers/component-container/ComponentContainer';
import PaginationContainer from '@/components/containers/pagination-container/PaginationContainer';
import NavigationLink from '@/components/navigation-link/NavigationLink';
import ChevronLeftIcon from '@/assets/svg/ChevronLeftIcon';
import { convertToTitleCase } from '@/utils/convertToTitleCase';
import QuickNavContainer from '@/components/containers/quick-nav-container/QuickNavContainer';
import QuickNav from '@/layouts/quick-nav/QuickNav';

const TooltipDocs = () => {
  const { selectedTab, switchTab } = useTab();

  const COMPONENT = 'tooltip';
  const COMPONENT_INDEX = COMPONENTS.indexOf(COMPONENT);
  const PREVIOUS_INDEX = COMPONENT_INDEX - 1;

  return (
    <>
      <ContentContainer>
        <SectionContainer>
          <Breadcrumbs section={'Tooltip'} />
          <Heading>Tooltip</Heading>
          <Subheading>
            A popup that displays information related to an element when the element receives keyboard focus or the
            mouse hovers over it.
          </Subheading>

          <Divider />

          <TabSelector {...{ selectedTab, switchTab }} />

          <ComponentContainer>
            {selectedTab === Tab.PREVIEW && <></>}

            {selectedTab === Tab.CODE && <>Code content here...</>}
          </ComponentContainer>

          <Divider />

          <PaginationContainer>
            <NavigationLink
              path={`/docs/components/${COMPONENTS[PREVIOUS_INDEX]}`}
              section={COMPONENTS[PREVIOUS_INDEX]}
            >
              <span>
                <ChevronLeftIcon />
              </span>
              <span>{convertToTitleCase(COMPONENTS[PREVIOUS_INDEX])}</span>
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
export { TooltipDocs };
