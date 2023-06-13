import { FC, ReactNode } from 'react';
import styles from './ComponentContainer-styles.module.css';

interface ComponentContainerProps {
  children: ReactNode;
}

const ComponentContainer: FC<ComponentContainerProps> = ({ children }) => {
  return (
    <>
      <div className={styles.container}>{children}</div>
    </>
  );
};

export default ComponentContainer;
