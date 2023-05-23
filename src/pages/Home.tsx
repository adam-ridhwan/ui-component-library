import { CSSProperties } from 'react';

import LandingPage from '@/components/landing-page';
import SearchBar from '@/components/search-bar';
import Footer from '@/layouts/footer';
import SideNavBar from '@/layouts/side-nav-mobile';
import TopNavBar from '@/layouts/top-nav';

const Homepage = () => {
  const style: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  };

  return (
    <>
      <div style={style}>
        <TopNavBar />
        <LandingPage />
        <SearchBar />
        <SideNavBar />
      </div>
      <Footer />
    </>
  );
};
export default Homepage;
