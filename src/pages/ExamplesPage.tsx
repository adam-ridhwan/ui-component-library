import SearchBar from '@/components/search-bar/SearchBar';
import SideNavBar from '@/layouts/side-nav-mobile/SideNavMobile';
import TopNavBar from '@/layouts/top-nav/TopNavBar';

const ExamplesPage = () => {
  return (
    <>
      <div className='pages_container'>
        <TopNavBar />
        <SideNavBar />
        <SearchBar />
      </div>
    </>
  );
};
export default ExamplesPage;
