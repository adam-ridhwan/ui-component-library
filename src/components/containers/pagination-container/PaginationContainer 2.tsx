import { FC, ReactNode } from 'react';
import styles from './PaginationContainer-styles.module.css';

interface PaginationContainerProps {
  children: ReactNode;
}

const PaginationContainer: FC<PaginationContainerProps> = ({ children }) => {
  return (
    <>
      <div className={styles.pagination_container}>{children}</div>
    </>
  );
};

export default PaginationContainer;
