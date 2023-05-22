import DocContent from '@/components/DocContent';
import SearchBar from '@/components/SearchBar';
import Footer from '@/layouts/Footer';
import SideNavBar from '@/layouts/MobileSideNav';
import TopNavBar from '@/layouts/TopNav';
import { CSSProperties } from 'react';

const Documentation = () => {
  const style: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  };

  return (
    <>
      <div style={style}>
        <TopNavBar />
        <DocContent />
        <SearchBar />
        <SideNavBar />
      </div>
      <Footer />
    </>
  );
};
export default Documentation;
