import LandingPage from '@/components/landing-page';
import SearchBar from '@/components/search-bar/SearchBar.tsx';
import Footer from '@/layouts/footer';
import SideNavBar from '@/layouts/side-nav-mobile/SideNavMobile.tsx';
import TopNavBar from '@/layouts/top-nav/TopNavBar.tsx';

const HomePage = () => {
  return (
    <>
      <div className="pages_container">
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
