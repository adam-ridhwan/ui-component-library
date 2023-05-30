import styles from './styles.module.css';
import { FC, ReactNode } from 'react';

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
