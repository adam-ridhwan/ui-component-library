import { useRef } from 'react';
import ChevronRightIcon from '@/assets/svg/ChevronRightIcon';
import { DOC_ROUTE, DOCUMENTATION } from '@/utils/constants';
import Breadcrumbs from '@/components/breadcrumbs/Breadcrumbs';
import Divider from '@/layouts/divider/Divider';
import QuickNav from '@/layouts/quick-nav/QuickNav';
import { convertToTitleCase } from '@/utils/convertToTitleCase';
import NavigationLink from '@/components/navigation-link/NavigationLink';
import ContentContainer from '@/components/containers/content-container/ContentContainer';
import SectionContainer from '@/components/containers/section-container/SectionContainer';
import BodyContainer from '@/components/containers/body-container/BodyContainer';
import PaginationContainer from '@/components/containers/pagination-container/PaginationContainer';
import QuickNavContainer from '@/components/containers/quick-nav-container/QuickNavContainer';
import Heading from '@/components/containers/typography/heading/Heading';
import Subheading from '@/components/containers/typography/subheading/Subheading';

const Introduction = () => {
  const faqRef = useRef<HTMLDivElement>(null);
  const creditsRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <ContentContainer>
        <SectionContainer>
          <Breadcrumbs section={'Introduction'} />
          <Heading>Introduction</Heading>
          <Subheading>Reusable components built from scratch</Subheading>

          <Divider />

          <BodyContainer>
            <span>
              Lorem ipsum dolor sit amet, lyka sombody adipisicing elit. Pariatur unde nisi quas repudiandae!
              Perferendis earum a minus dolorem, officia accusantium sapiente magnam quos sint, soluta expedita deleniti
              maxime perspiciatis necessitatibus!
              <br />
              <br />
              Lorem ipsum dolor sit amet lyka sombody, adipisicing elit. Debitis consequuntur qui rerum repudiandae odio
              Lorem ipsum dolor sit amet lyka sombody, adipisicing elit. Debitis consequuntur qui rerum repudiandae odio
              Lorem ipsum dolor sit amet lyka sombody, adipisicing elit. Debitis consequuntur qui rerum repudiandae odio
              quidem veniam eos! Possimus eligendi illo ab! Quibusdam impedit totam natus quia ex sit quisquam aliquid.
            </span>

            <span>
              Lorem ipsum dolor sit amet, lyka sombody adipisicing elit. Pariatur unde nisi quas repudiandae!
              Perferendis earum a minus dolorem, officia accusantium sapiente magnam quos sint, soluta expedita deleniti
              maxime perspiciatis necessitatibus!
              <br />
              <br />
              Lorem ipsum dolor sit amet lyka sombody, adipisicing elit. Debitis consequuntur qui rerum repudiandae odio
              Lorem ipsum dolor sit amet lyka sombody, adipisicing elit. Debitis consequuntur qui rerum repudiandae odio
              Lorem ipsum dolor sit amet lyka sombody, adipisicing elit. Debitis consequuntur qui rerum repudiandae odio
              quidem veniam eos! Possimus eligendi illo ab! Quibusdam impedit totam natus quia ex sit quisquam aliquid.
              Perferendis earum a minus dolorem, officia accusantium sapiente magnam quos sint, soluta expedita deleniti
              maxime perspiciatis necessitatibus! Lorem ipsum dolor sit amet, lyka sombody adipisicing elit. Pariatur
              unde nisi quas repudiandae!
            </span>

            <span>
              <br />
              <br />
              Lorem ipsum dolor sit amet lyka sombody, adipisicing elit. Debitis consequuntur qui rerum repudiandae odio
              Lorem ipsum dolor sit amet lyka sombody, adipisicing elit. Debitis consequuntur qui rerum repudiandae odio
              Lorem ipsum dolor sit amet lyka sombody, adipisicing elit. Debitis consequuntur qui rerum repudiandae odio
              quidem veniam eos! Possimus eligendi illo ab! Quibusdam impedit totam natus quia ex sit quisquam aliquid.
            </span>
          </BodyContainer>

          <BodyContainer ref={faqRef}>
            <h2>FAQ</h2>
            <span>
              Lorem ipsum dolor sit amet, lyka sombody adipisicing elit. Pariatur unde nisi quas repudiandae!
              Perferendis earum a minus dolorem, officia accusantium sapiente magnam quos sint, soluta expedita deleniti
              maxime perspiciatis necessitatibus!
              <br />
              <br />
              Lorem ipsum dolor sit amet lyka somgggbody, adipisicing elit. Debitis consequuntur qui rerum repudiandae
              odio Lorem ipsum dolor sit amet lyka sombody, adipisicing elit. Debitis consequuntur qui rerum repudiandae
              odio Lorem ipsum dolor sit amet lyka sombody, adipisicing elit. Debitis consequuntur qui rerum repudiandae
              odio quidem veniam eos! Possimus eligendi illo ab! Quibusdam impedit totam natus quia ex sit quisquam
              aliquid.
            </span>

            <span>
              Lorem ipsum dolor sit amet, lyka sombody adipisicing elit. Pariatur unde nisi quas repudiandae!
              Perferendis earum a minus dolorem, officia accusantium sapiente magnam quos sint, soluta expedita deleniti
              maxime perspiciatis necessitatibus!
              <br />
              <br />
              Lorem ipsum dolor sit amet lyka sombody, adipisicing elit. Debitis consequuntur qui rerum repudiandae odio
              Lorem ipsum dolor sit amet lyka sombody, adipisicing elit. Debitis consequuntur qui rerum repudiandae odio
              Lorem ipsum dolor sit amet lyka sombody, adipisicing elit. Debitis consequuntur qui rerum repudiandae odio
              quidem veniam eos! Possimus eligendi illo ab! Quibusdam impedit totam natus quia ex sit quisquam aliquid.
            </span>
          </BodyContainer>

          <BodyContainer ref={creditsRef}>
            <h2>Credits</h2>
            <span>
              Lorem ipsum dolor sit amet, lyka sombody adipisicing elit. Pariatur unde nisi quas repudiandae!
              Perferendis earum a minus dolorem, officia accusantium sapiente magnam quos sint, soluta expedita deleniti
              maxime perspiciatis necessitatibus!
              <br />
              <br />
              Lorem ipsum dolor sit amet lyka sombody, adipisicing elit. Debitis consequuntur qui rerum repudiandae odio
              Lorem ipsum dolor sit amet lyka sombody, adipisicing elit. Debitis consequuntur qui rerum repudiandae odio
              Lorem ipsum dolor sit amet lyka sombody, adipisicing elit. Debitis consequuntur qui rerum repudiandae odio
              quidem veniam eos! Possimus eligendi illo ab! Quibusdam impedit totam natus quia ex sit quisquam aliquid.
            </span>

            <span>
              Lorem ipsum dolor sit amet, lyka sombody adipisicing elit. Pariatur unde nisi quas repudiandae!
              Perferendis earum a minus dolorem, officia accusantium sapiente magnam quos sint, soluta expedita deleniti
              maxime perspiciatis necessitatibus!
              <br />
              <br />
              Lorem ipsum dolor sit amet lyka sombody, adipisicing elit. Debitis consequuntur qui rerum repudiandae odio
              Lorem ipsum dolor sit amet lyka sombody, adipisicing elit. Debitis consequuntur qui rerum repudiandae odio
              Lorem ipsum dolor sit amet lyka sombody, adipisicing elit. Debitis consequuntur qui rerum repudiandae odio
              quidem veniam eos! Possimus eligendi illo ab! Quibusdam impedit totam natus quia ex sit quisquam aliquid.
            </span>
          </BodyContainer>

          <Divider />

          <PaginationContainer>
            <NavigationLink path={`${DOC_ROUTE}/${DOCUMENTATION[1]}`} section={DOCUMENTATION[1]}>
              <span>{convertToTitleCase(DOCUMENTATION[1])}</span>
              <span>
                <ChevronRightIcon />
              </span>
            </NavigationLink>
          </PaginationContainer>
        </SectionContainer>

        <QuickNavContainer>
          <QuickNav>
            <NavigationLink path={`${DOC_ROUTE}#faq`} sectionRef={faqRef}>
              FAQ
            </NavigationLink>
            <NavigationLink path={`${DOC_ROUTE}#credits`} sectionRef={creditsRef}>
              Credits
            </NavigationLink>
          </QuickNav>
        </QuickNavContainer>
      </ContentContainer>
    </>
  );
};
export default Introduction;
