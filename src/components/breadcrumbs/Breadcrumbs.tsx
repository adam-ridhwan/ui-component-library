import ChevronRightIcon from '@/assets/svg/ChevronRightIcon';
import { FC } from 'react';
import styles from './styles.module.css';

interface BreadcrumbsProps {
  section: string;
}

const Breadcrumbs: FC<BreadcrumbsProps> = ({ section }) => {
  return (
    <>
      <div className={styles.breadcrumbs}>
        <span>Docs</span>
        <span>
          <ChevronRightIcon />
        </span>
        <span>{section}</span>
      </div>
    </>
  );
};
export default Breadcrumbs;
