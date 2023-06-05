import SearchBar from '@/components/search-bar';
import SideNavBar from '@/layouts/side-nav-mobile/SideNavMobile.tsx';
import TopNavBar from '@/layouts/top-nav/TopNavBar.tsx';
import { CSSProperties } from 'react';

const Examples = () => {
  const style: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  };
  return (
    <>
      <div style={style}>
        <TopNavBar />
        <SideNavBar />
        <SearchBar />
      </div>
    </>
  );
};
export default Examples;
