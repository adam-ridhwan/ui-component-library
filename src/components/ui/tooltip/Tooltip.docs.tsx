import { Tab, useTab } from '@/hooks/useTab.ts';
import { COMPONENTS } from '@/utils/constants.ts';
import ContentContainer from '@/components/containers/content-container/ContentContainer.tsx';
import SectionContainer from '@/components/containers/section-container/SectionContainer.tsx';
import Breadcrumbs from '@/components/breadcrumbs/Breadcrumbs.tsx';
import Heading from '@/components/containers/typography/heading/Heading.tsx';
import Subheading from '@/components/containers/typography/subheading/Subheading.tsx';
import Divider from '@/layouts/divider';
import TabSelector from '@/layouts/tab-selector';
import ComponentContainer from '@/components/containers/component-container/ComponentContainer.tsx';
import PaginationContainer from '@/components/containers/pagination-container/PaginationContainer.tsx';
import NavigationLink from '@/components/navigation-link';
import ChevronLeftIcon from '@/assets/svg/ChevronLeftIcon.tsx';
import { convertToTitleCase } from '@/utils/convertToTitleCase.ts';
import QuickNavContainer from '@/components/containers/quick-nav-container/QuickNavContainer.tsx';
import QuickNav from '@/layouts/quick-nav';
import { getPaginationIndex } from '@/utils/getPaginationIndex.ts';

const TooltipDocs = () => {
  const { selectedTab, switchTab } = useTab();

  const [PREVIOUS_INDEX] = getPaginationIndex('tooltip');

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
