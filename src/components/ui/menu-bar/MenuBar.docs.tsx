<<<<<<< HEAD
import { Tab, useTab } from '@/hooks/useTab.ts';
import { COMPONENTS } from '@/utils/constants.ts';
import ContentContainer from '@/components/containers/content-container/ContentContainer.tsx';
import SectionContainer from '@/components/containers/section-container/SectionContainer.tsx';
import Breadcrumbs from '@/components/breadcrumbs/Breadcrumbs.tsx';
import Heading from '@/components/containers/typography/heading/Heading.tsx';
import Subheading from '@/components/containers/typography/subheading/Subheading.tsx';
import Divider from '@/layouts/divider';
import TabSelector from '@/layouts/tab-selector';
import ComponentContainer from '@/components/containers/preview-container/ComponentContainer.tsx';
import PaginationContainer from '@/components/containers/pagination-container/PaginationContainer.tsx';
import NavigationLink from '@/components/navigation-link';
import ChevronLeftIcon from '@/assets/svg/ChevronLeftIcon.tsx';
import { convertToTitleCase } from '@/utils/convertToTitleCase.ts';
import ChevronRightIcon from '@/assets/svg/ChevronRightIcon.tsx';
import QuickNavContainer from '@/components/containers/quick-nav-container/QuickNavContainer.tsx';
import QuickNav from '@/layouts/quick-nav';
import { getPaginationIndex } from '@/utils/getPaginationIndex.ts';

const MenuBarDocs = () => {
  const { selectedTab, switchTab } = useTab();

  const [PREVIOUS_INDEX, NEXT_INDEX] = getPaginationIndex('menu-bar');

  return (
    <>
      <ContentContainer>
        <SectionContainer>
          <Breadcrumbs section={'Menu Bar'} />
          <Heading>Menu Bar</Heading>
          <Subheading>
            A visually persistent menu common in desktop applications that provides quick access to a consistent set of
            commands.
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
=======
const MenuBarDocs = () => {
  return (
    <>
      <div>Menu bar</div>
>>>>>>> origin/main
    </>
  );
};
export { MenuBarDocs };
