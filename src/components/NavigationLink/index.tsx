import { useSideBarContext } from '@/hooks/useSideBarContext';
import { FC, MouseEvent, ReactNode, Ref, forwardRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface INavigationLinkProps {
  ref?: Ref<HTMLAnchorElement>;
  path: string;
  section?: string;
  children: ReactNode;
  closeModal?: () => void;
  style?: object;
  onMouseEnter?: () => void;
}

const NavigationLink: FC<INavigationLinkProps> = forwardRef<HTMLAnchorElement, INavigationLinkProps>(
  ({ path, section, children, closeModal, style, onMouseEnter }, ref) => {
    const navigate = useNavigate();
    const location = useLocation();
    const { setCurrentSection } = useSideBarContext();

    const handleNavigateToSection = (e: MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      closeModal?.();
      if (section) setCurrentSection(section);
      if (location.pathname !== path) navigate(path);
      window.scrollTo(0, 0);
    };

    return (
      <a ref={ref} href={path} onClick={handleNavigateToSection} onMouseEnter={onMouseEnter} style={style}>
        {children}
      </a>
    );
  }
);

export default NavigationLink;
