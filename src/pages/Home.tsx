import { CSSProperties } from 'react';

import LandingPage from '@/components/LandingPage';
import SearchBar from '@/components/SearchBar';
import Footer from '@/layouts/Footer';
import SideNavBar from '@/layouts/SideNavBar';
import TopNavBar from '@/layouts/TopNavBar';

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
