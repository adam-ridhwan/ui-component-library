import { FC, ReactNode } from 'react';
import styles from './PreviewContainer-styles.module.css';

interface PreviewContainerProps {
  children: ReactNode;
}

const PreviewContainer: FC<PreviewContainerProps> = ({ children }) => {
  return (
    <>
      <div className={styles.preview_container}>{children}</div>
    </>
  );
};

export default PreviewContainer;
