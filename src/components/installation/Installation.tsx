import Breadcrumbs from '@/components/breadcrumbs/Breadcrumbs';
import Divider from '@/layouts/divider/Divider';
import ContentContainer from '@/components/containers/content-container/ContentContainer';
import SectionContainer from '@/components/containers/section-container/SectionContainer';
import BodyContainer from '@/components/containers/body-container/BodyContainer';
import PaginationContainer from '@/components/containers/pagination-container/PaginationContainer';
import NavigationLink from '@/components/navigation-link/NavigationLink';
import { DOC_ROUTE, DOCUMENTATION } from '@/utils/constants';
import { convertToTitleCase } from '@/utils/convertToTitleCase';
import ChevronRightIcon from '@/assets/svg/ChevronRightIcon';
import QuickNavContainer from '@/components/containers/quick-nav-container/QuickNavContainer';
import QuickNav from '@/layouts/quick-nav/QuickNav';
import Heading from '@/components/containers/typography/heading/Heading';
import Subheading from '@/components/containers/typography/subheading/Subheading';

const Installation = () => {
  return (
    <>
      <ContentContainer>
        <SectionContainer>
          <Breadcrumbs section={'Installation'} />
          <Heading>Installation</Heading>
          <Subheading>Reusable components built from scratch</Subheading>

          <Divider />

          <BodyContainer>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur unde nisi quas repudiandae! Perferendis
              earum a minus dolorem, officia accusantium sapiente magnam quos sint, soluta expedita deleniti maxime
              perspiciatis necessitatibus!
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis consequuntur qui rerum repudiandae odio
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis consequuntur qui rerum repudiandae odio
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis consequuntur qui rerum repudiandae odio
              quidem veniam eos! Possimus eligendi illo ab! Quibusdam impedit totam natus quia ex sit quisquam aliquid.
            </span>

            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur unde nisi quas repudiandae! Perferendis
              earum a minus dolorem, officia accusantium sapiente magnam quos sint, soluta expedita deleniti maxime
              perspiciatis necessitatibus!
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis consequuntur qui rerum repudiandae odio
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis consequuntur qui rerum repudiandae odio
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis consequuntur qui rerum repudiandae odio
              quidem veniam eos! Possimus eligendi illo ab! Quibusdam impedit totam natus quia ex sit quisquam aliquid.
            </span>

            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur unde nisi quas repudiandae! Perferendis
              earum a minus dolorem, officia accusantium sapiente magnam quos sint, soluta expedita deleniti maxime
              perspiciatis necessitatibus!
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis consequuntur qui rerum repudiandae odio
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis consequuntur qui rerum repudiandae odio
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis consequuntur qui rerum repudiandae odio
              quidem veniam eos! Possimus eligendi illo ab! Quibusdam impedit totam natus quia ex sit quisquam aliquid.
            </span>
          </BodyContainer>

          <BodyContainer>
            <h2>FAQ</h2>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur unde nisi quas repudiandae! Perferendis
              earum a minus dolorem, officia accusantium sapiente magnam quos sint, soluta expedita deleniti maxime
              perspiciatis necessitatibus!
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis consequuntur qui rerum repudiandae odio
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis consequuntur qui rerum repudiandae odio
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis consequuntur qui rerum repudiandae odio
              quidem veniam eos! Possimus eligendi illo ab! Quibusdam impedit totam natus quia ex sit quisquam aliquid.
            </span>

            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur unde nisi quas repudiandae! Perferendis
              earum a minus dolorem, officia accusantium sapiente magnam quos sint, soluta expedita deleniti maxime
              perspiciatis necessitatibus!
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis consequuntur qui rerum repudiandae odio
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis consequuntur qui rerum repudiandae odio
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis consequuntur qui rerum repudiandae odio
              quidem veniam eos! Possimus eligendi illo ab! Quibusdam impedit totam natus quia ex sit quisquam aliquid.
            </span>
          </BodyContainer>

          <BodyContainer>
            <h2>Credits</h2>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur unde nisi quas repudiandae! Perferendis
              earum a minus dolorem, officia accusantium sapiente magnam quos sint, soluta expedita deleniti maxime
              perspiciatis necessitatibus!
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis consequuntur qui rerum repudiandae odio
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis consequuntur qui rerum repudiandae odio
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis consequuntur qui rerum repudiandae odio
              quidem veniam eos! Possimus eligendi illo ab! Quibusdam impedit totam natus quia ex sit quisquam aliquid.
            </span>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur unde nisi quas repudiandae! Perferendis
              earum a minus dolorem, officia accusantium sapiente magnam quos sint, soluta expedita deleniti maxime
              perspiciatis necessitatibus!
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis consequuntur qui rerum repudiandae odio
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis consequuntur qui rerum repudiandae odio
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis consequuntur qui rerum repudiandae odio
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
            {/*<span onClick={() => jumpToSection()}>FAQ</span>*/}
            {/*<span onClick={() => jumpToSection()}>Credits</span>*/}
          </QuickNav>
        </QuickNavContainer>
      </ContentContainer>
    </>
  );
};
export default Installation;
