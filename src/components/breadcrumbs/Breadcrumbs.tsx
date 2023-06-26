import ChevronRightIcon from '@/assets/svg/ChevronRightIcon';
import { FC } from 'react';
import styles from './Breadcrumbs-styles.module.css';
import HomeIcon from '@/assets/svg/HomeIcon.tsx';
import NavigationLink from '@/components/navigation-link/NavigationLink.tsx';

interface BreadcrumbsProps {
  section: string;
}

const Breadcrumbs: FC<BreadcrumbsProps> = ({ section }) => {
  return (
    <>
      <div className={styles.breadcrumbs}>
        <NavigationLink path='/'>
          <button className={styles.home_icon}>
            <HomeIcon />
          </button>
        </NavigationLink>

        <span className={styles.chevron_right_icon}>
          <ChevronRightIcon />
        </span>

        <span>Docs</span>

        <span className={styles.chevron_right_icon}>
          <ChevronRightIcon />
        </span>
        <span>{section}</span>
      </div>
    </>
  );
};
export default Breadcrumbs;
