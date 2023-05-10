import { CSSProperties } from 'react';

import LandingPage from '@/components/LandingPage';
import MobileSidebar from '@/components/MobileSideBar';
import SearchBar from '@/components/SearchBar';
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

        <MobileSidebar />
        <SearchBar />
      </div>
    </>
  );
};
export default Homepage;
