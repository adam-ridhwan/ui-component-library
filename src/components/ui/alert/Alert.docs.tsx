import ContentContainer from '@/components/containers/content-container/ContentContainer.tsx';
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
import ChevronRightIcon from '@/assets/svg/ChevronRightIcon.tsx';
import ChevronLeftIcon from '@/assets/svg/ChevronLeftIcon.tsx';
import QuickNavContainer from '@/components/containers/quick-nav-container/QuickNavContainer.tsx';
import QuickNav from '@/layouts/quick-nav/QuickNav.tsx';
import { COMPONENTS } from '@/utils/constants.ts';
import { convertToTitleCase } from '@/utils/convertToTitleCase.ts';
import { getPaginationIndex } from '@/utils/getPaginationIndex.ts';

const AlertDocs = () => {
  const [PREVIOUS_INDEX, NEXT_INDEX] = getPaginationIndex('alert');

  return (
    <>
      <ContentContainer>
        <SectionContainer>
          <Breadcrumbs section={'Alert'} />
          <Heading>Alert</Heading>
          <Subheading>Displays a callout for user attention.</Subheading>

          <Divider />

          <ComponentContainer></ComponentContainer>

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

export { AlertDocs };
