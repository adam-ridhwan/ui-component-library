import Content from '@/components/content/Content';
import SearchBar from '@/components/search-bar/SearchBar';
import SideNavBar from '@/layouts/side-nav-mobile/SideNavMobile';
import TopNavBar from '@/layouts/top-nav/TopNavBar';

const DocumentationPage = () => {
  return (
    <>
      <div className='pages_container'>
        <TopNavBar />
        <Content />
        <SearchBar />
        <SideNavBar />
      </div>
    </>
  );
};
export default DocumentationPage;
