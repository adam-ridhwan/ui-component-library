import SearchBar from '@/components/SearchBar';
import SideNavBar from '@/layouts/MobileSideNav';
import TopNavBar from '@/layouts/TopNav';
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
