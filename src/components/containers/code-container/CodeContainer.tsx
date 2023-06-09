import { FC, ReactNode } from 'react';
import CopyIcon from '@/assets/svg/CopyIcon.tsx';

import styles from './CodeContainer-styles.module.css';

interface CodeContainerProps {
  children: ReactNode;
}

const CodeContainer: FC<CodeContainerProps> = ({ children }) => {
  return (
    <>
      <div className={styles.container}>
        <button className={styles.copy_icon_container}>
          <div className={styles.copy_icon}>
            <CopyIcon />
          </div>
        </button>

        {children}
      </div>
    </>
  );
};

export default CodeContainer;
