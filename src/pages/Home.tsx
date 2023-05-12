import { CSSProperties } from 'react';

import LandingPage from '@/components/LandingPage';
import SearchBar from '@/components/SearchBar';
import SideNavBar from '@/components/SideNavBar';
import TopNavBar from '@/layouts/TopNavBar';

const Homepage = () => {
  const style: CSSProperties = {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  };

  return (
    <>
      <div style={style}>
        <TopNavBar />
        <LandingPage />
        <SideNavBar />
        <SearchBar />
      </div>
    </>
  );
};
export default Homepage;
