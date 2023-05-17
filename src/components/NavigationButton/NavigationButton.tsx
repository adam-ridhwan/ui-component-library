import { useSideBarContext } from '@/hooks/useSideBarContext';
import { FC, ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface INavigationButtonProps {
  path: string;
  section: string;
  children: ReactNode;
  closeSidebar?: () => void;
}

const NavigationButton: FC<INavigationButtonProps> = ({ path, section, children, closeSidebar }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setCurrentSection } = useSideBarContext();

  const handleNavigateToSection = () => {
    console.log('navigate to section');
    closeSidebar?.();
    setCurrentSection(section);
    if (location.pathname !== path) navigate(path);
    window.scrollTo(0, 0);
  };

  return <button onClick={handleNavigateToSection}>{children}</button>;
};

export default NavigationButton;
