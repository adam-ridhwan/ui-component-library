import DocContent from '@/components/MainContent';
import SearchBar from '@/components/SearchBar';
import Footer from '@/layouts/Footer';
import SideNavBar from '@/layouts/SideNavBar';
import TopNavBar from '@/layouts/TopNavBar';
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
