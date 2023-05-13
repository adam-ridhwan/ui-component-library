import { FC, ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface NavigationButtonProps {
  path: string;
  children: ReactNode;
}

const NavigationButton: FC<NavigationButtonProps> = ({ path, children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    if (location.pathname !== path) navigate(path);
  };

  return <button onClick={handleClick}>{children}</button>;
};

export default NavigationButton;
