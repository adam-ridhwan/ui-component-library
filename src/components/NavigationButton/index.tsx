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
  onMouseLeave?: () => void;
  reset?: () => void;
}

const NavigationButton: FC<INavigationButtonProps> = forwardRef<HTMLButtonElement, INavigationButtonProps>(
  ({ path, section, children, closeModal, style, onMouseEnter, onMouseLeave, reset }, ref) => {
    const navigate = useNavigate();
    const location = useLocation();
    const { setCurrentSection } = useSideBarContext();

    const handleNavigateToSection = () => {
      closeModal?.();
      reset?.();
      setCurrentSection(section);
      if (location.pathname !== path) navigate(path);
      window.scrollTo(0, 0);
    };

    return (
      <button
        ref={ref}
        onClick={handleNavigateToSection}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        style={style}
      >
        {children}
      </button>
    );
  }
);

export default NavigationButton;
