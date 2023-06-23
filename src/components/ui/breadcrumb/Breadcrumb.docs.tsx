import SectionContainer from '@/components/containers/section-container/SectionContainer';
import Breadcrumbs from '@/components/breadcrumbs/Breadcrumbs';
import Heading from '@/components/containers/typography/heading/Heading';
import Subheading from '@/components/containers/typography/subheading/Subheading';
import Divider from '@/layouts/divider/Divider';
import TabSelector from '@/layouts/tab-selector';
import ComponentContainer from '@/components/containers/component-container/ComponentContainer';
import { Tab, useTab } from '@/hooks/useTab';
import PaginationContainer from '@/components/containers/pagination-container/PaginationContainer';
import NavigationLink from '@/components/navigation-link/NavigationLink';
import { COMPONENTS } from '@/utils/constants';
import ChevronLeftIcon from '@/assets/svg/ChevronLeftIcon';
import { convertToTitleCase } from '@/utils/convertToTitleCase';
import ChevronRightIcon from '@/assets/svg/ChevronRightIcon';
import QuickNavContainer from '@/components/containers/quick-nav-container/QuickNavContainer';
import QuickNav from '@/layouts/quick-nav/QuickNav';
import ContentContainer from '@/components/containers/content-container/ContentContainer';
import { getPaginationIndex } from '@/utils/getPaginationIndex';

// import styles from './Breadcrumb-QuickNav-SideNavMobile-styles.module.css';

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
