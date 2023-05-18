import { useSideBarContext } from '@/hooks/useSideBarContext';
import { FC, ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface INavigationButtonProps {
  path: string;
  section: string;
  children: ReactNode;
  closeSidebar?: () => void;
  style?: object;
}

const NavigationButton: FC<INavigationButtonProps> = ({ path, section, children, closeSidebar, style }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setCurrentSection } = useSideBarContext();

  const handleNavigateToSection = () => {
    closeSidebar?.();
    setCurrentSection(section);
    if (location.pathname !== path) navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <button onClick={handleNavigateToSection} style={style}>
      {children}
    </button>
  );
};

export default NavigationButton;
