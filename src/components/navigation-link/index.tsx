import { useSideBarContext } from '@/hooks/useSideBarContext';
import jumpToSection from '@/utils/jumpToSection';
import { FC, MouseEvent, ReactNode, Ref, RefObject, forwardRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface INavigationLinkProps {
  ref?: Ref<HTMLAnchorElement>;
  sectionRef?: RefObject<HTMLDivElement>;
  path: string;
  section?: string;
  children: ReactNode;
  closeModal?: () => void;
  style?: object;
  onMouseEnter?: () => void;
}

const NavigationLink: FC<INavigationLinkProps> = forwardRef<HTMLAnchorElement, INavigationLinkProps>(
  ({ path, sectionRef, section, children, closeModal, style, onMouseEnter }, ref) => {
    const navigate = useNavigate();
    const location = useLocation();
    const { setCurrentSection } = useSideBarContext();

    const handleNavigateToSection = (e: MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      closeModal?.();
      if (section) setCurrentSection(section);
      const [pathWithoutHash, hash] = path.split('#');

      // Determine whether the navigation should be performed
      const shouldNavigate =
        location.pathname !== pathWithoutHash || // Different path
        (!hash && location.hash) || // Navigating from hashed to non-hashed
        (hash && location.hash !== `#${hash}`); // Different hash

      if (shouldNavigate) {
        navigate(path);
        if (hash && sectionRef) jumpToSection(sectionRef);
        else window.scrollTo(0, 0);
      }
    };

    return (
      <a ref={ref} href={path} onClick={handleNavigateToSection} onMouseEnter={onMouseEnter} style={style}>
        {children}
      </a>
    );
  }
);

export default NavigationLink;