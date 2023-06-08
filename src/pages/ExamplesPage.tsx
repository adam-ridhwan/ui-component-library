import SearchBar from '@/components/search-bar/SearchBar.tsx';
import SideNavBar from '@/layouts/side-nav-mobile/SideNavMobile.tsx';
import TopNavBar from '@/layouts/top-nav/TopNavBar.tsx';

const ExamplesPage = () => {
  return (
    <>
      <div className="pages_container">
        <TopNavBar />
        <SideNavBar />
        <SearchBar />
      </div>
    </>
  );
};
export default ExamplesPage;
