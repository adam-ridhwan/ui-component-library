import { FC, ReactNode } from 'react';
import styles from './ComponentContainer-styles.module.css';

interface ComponentContainerProps {
  children: ReactNode;
}

const ComponentContainer: FC<ComponentContainerProps> = ({ children }) => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>{children}</div>
      </div>
    </>
  );
};

export default ComponentContainer;
