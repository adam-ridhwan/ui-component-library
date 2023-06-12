import SectionContainer from '@/components/containers/section-container/SectionContainer.tsx';
import Breadcrumbs from '@/components/breadcrumbs/Breadcrumbs.tsx';
import Heading from '@/components/containers/typography/heading/Heading.tsx';
import Subheading from '@/components/containers/typography/subheading/Subheading.tsx';
import Divider from '@/layouts/divider/Divider.tsx';
import TabSelector from '@/layouts/tab-selector';
import ComponentContainer from '@/components/containers/component-container/ComponentContainer.tsx';
import { Tab, useTab } from '@/hooks/useTab.ts';
import PaginationContainer from '@/components/containers/pagination-container/PaginationContainer.tsx';
import NavigationLink from '@/components/navigation-link/NavigationLink.tsx';
import { COMPONENTS } from '@/utils/constants.ts';
import ChevronLeftIcon from '@/assets/svg/ChevronLeftIcon.tsx';
import { convertToTitleCase } from '@/utils/convertToTitleCase.ts';
import ChevronRightIcon from '@/assets/svg/ChevronRightIcon.tsx';
import QuickNavContainer from '@/components/containers/quick-nav-container/QuickNavContainer.tsx';
import QuickNav from '@/layouts/quick-nav';
import ContentContainer from '@/components/containers/content-container/ContentContainer.tsx';
import { getPaginationIndex } from '@/utils/getPaginationIndex.ts';

// import styles from './Breadcrumb-styles.module.css';

const BreadcrumbDocs = () => {
  const { selectedTab, switchTab } = useTab();

  const [PREVIOUS_INDEX, NEXT_INDEX] = getPaginationIndex('breadcrumb');
  return (
    <>
      <ContentContainer>
        <SectionContainer>
          <Breadcrumbs section={'Breadcrumb'} />
          <Heading>Breadcrumb</Heading>
          <Subheading>Displays a badge or a component that looks like a badge.</Subheading>

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

export { BreadcrumbDocs };