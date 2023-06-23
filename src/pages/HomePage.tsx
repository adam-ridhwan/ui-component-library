import LandingPage from '@/components/landing-page';
import SearchBar from '@/components/search-bar/SearchBar';
import Footer from '@/layouts/footer';
import SideNavBar from '@/layouts/side-nav-mobile/SideNavMobile';
import TopNavBar from '@/layouts/top-nav/TopNavBar';

const HomePage = () => {
  return (
    <>
      <div className='pages_container'>
        <TopNavBar />
        <LandingPage />
        <SearchBar />
        <SideNavBar />
      </div>
      <Footer />
    </>
  );
};
export default HomePage;
