import { FC, ReactNode } from 'react';
import styles from './Subheading-styles.module.css';

interface SubheadingProps {
  children: ReactNode;
}

const Subheading: FC<SubheadingProps> = ({ children }) => {
  return (
    <>
      <h3 className={styles.subheading}>{children}</h3>
    </>
  );
};

export default Subheading;
