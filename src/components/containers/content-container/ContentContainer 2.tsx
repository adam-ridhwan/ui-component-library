import { FC, ReactNode } from 'react';
import styles from './ContentContainer-styles.module.css';

interface ContentContainerProps {
  children: ReactNode;
}

const ContentContainer: FC<ContentContainerProps> = ({ children }) => {
  return (
    <>
      <div className={styles.content_container}>{children}</div>
    </>
  );
};

export default ContentContainer;
