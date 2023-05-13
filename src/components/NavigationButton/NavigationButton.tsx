import { useSideBarContext } from '@/hooks/useSideBarContext';
import { FC, ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface NavigationButtonProps {
  path: string;
  section: string;
  children: ReactNode;
}

const NavigationButton: FC<NavigationButtonProps> = ({ path, section, children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setCurrentSection } = useSideBarContext();

  const handleClick = () => {
    setCurrentSection(section);
    if (location.pathname !== path) navigate(path);
  };

  return <button onClick={handleClick}>{children}</button>;
};

export default NavigationButton;
