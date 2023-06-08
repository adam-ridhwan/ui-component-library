import Content from '@/components/content/Content.tsx';
import SearchBar from '@/components/search-bar/SearchBar.tsx';
import Footer from '@/layouts/footer';
import SideNavBar from '@/layouts/side-nav-mobile/SideNavMobile.tsx';
import TopNavBar from '@/layouts/top-nav/TopNavBar.tsx';

const DocumentationPage = () => {
  return (
    <>
      <div className="pages_container">
        <TopNavBar />
        <Content />
        <SearchBar />
        <SideNavBar />
      </div>
      <Footer />
    </>
  );
};
export default DocumentationPage;
