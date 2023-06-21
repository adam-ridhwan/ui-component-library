import ContentContainer from '@/components/containers/content-container/ContentContainer';
import SectionContainer from '@/components/containers/section-container/SectionContainer';
import Breadcrumbs from '@/components/breadcrumbs/Breadcrumbs';
import Heading from '@/components/containers/typography/heading/Heading';
import Subheading from '@/components/containers/typography/subheading/Subheading';
import Divider from '@/layouts/divider/Divider';
import ComponentContainer from '@/components/containers/component-container/ComponentContainer';
import PaginationContainer from '@/components/containers/pagination-container/PaginationContainer';
import NavigationLink from '@/components/navigation-link/NavigationLink';
import ChevronRightIcon from '@/assets/svg/ChevronRightIcon';
import ChevronLeftIcon from '@/assets/svg/ChevronLeftIcon';
import QuickNavContainer from '@/components/containers/quick-nav-container/QuickNavContainer';
import QuickNav from '@/layouts/quick-nav/QuickNav';
import { COMPONENTS } from '@/utils/constants';
import { convertToTitleCase } from '@/utils/convertToTitleCase';
import { getPaginationIndex } from '@/utils/getPaginationIndex';

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
