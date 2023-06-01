import Content from '@/components/content/Content.tsx';
import SearchBar from '@/components/search-bar';
import Footer from '@/layouts/footer';
import SideNavBar from '@/layouts/side-nav-mobile';
import TopNavBar from '@/layouts/top-nav/TopNavBar.tsx';
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
        <Content />
        <SearchBar />
        <SideNavBar />
      </div>
      <Footer />
    </>
  );
};
export default Documentation;
