import { FC, ReactNode } from 'react';
import styles from './SectionContainer-styles.module.css';

interface SectionContainerProps {
  children: ReactNode;
}

const SectionContainer: FC<SectionContainerProps> = ({ children }) => {
  return (
    <>
      <div className={styles.section_container}>{children}</div>
    </>
  );
};

export default SectionContainer;
