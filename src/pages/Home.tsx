import LandingPage from '@/components/LandingPage';
import MobileSearchBar from '@/components/MobileSearchBar';
import MobileSidebar from '@/components/MobileSideBar';
import NavBar from '@/layouts/NavBar';

const Homepage = () => {
  return (
    <>
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
        }}
      >
        <NavBar />
        <LandingPage />

        <MobileSearchBar />
        <MobileSidebar />
      </div>
    </>
  );
};
export default Homepage;
