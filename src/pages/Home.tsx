import { CSSProperties } from 'react';

import LandingPage from '@/components/LandingPage';
import SearchBar from '@/components/SearchBar';
import SideNavBar from '@/components/SideNavBar';
import NavBar from '@/layouts/NavBar';

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
        <NavBar />
        <LandingPage />
        <SideNavBar />
        <SearchBar />
      </div>
    </>
  );
};
export default Homepage;
