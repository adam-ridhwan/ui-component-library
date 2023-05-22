import { useSideBarContext } from '@/hooks/useSideBarContext';
import { FC, ReactNode, Ref, forwardRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface INavigationButtonProps {
  ref: Ref<HTMLButtonElement>;
  path: string;
  section: string;
  children: ReactNode;
  closeModal?: () => void;
  style?: object;
  onMouseEnter?: () => void;
}

const NavigationButton: FC<INavigationButtonProps> = forwardRef<HTMLButtonElement, INavigationButtonProps>(
  ({ path, section, children, closeModal, style, onMouseEnter }, ref) => {
    const navigate = useNavigate();
    const location = useLocation();
    const { setCurrentSection } = useSideBarContext();

    const handleNavigateToSection = () => {
      closeModal?.();
      setCurrentSection(section);
      if (location.pathname !== path) navigate(path);
      window.scrollTo(0, 0);
    };

    return (
      <button ref={ref} onClick={handleNavigateToSection} onMouseEnter={onMouseEnter} style={style}>
        {children}
      </button>
    );
  }
);

export default NavigationButton;
