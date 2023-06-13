import { FC, ReactElement } from 'react';
import styles from './QuickNav-styles.module.css';

interface QuickNavProps {
  children: ReactElement<HTMLSpanElement>[];
}

const QuickNav: FC<QuickNavProps> = ({ children }) => {
  return (
    <>
      <aside>
        <div className={styles.container}>
          <span>On this page</span>
          {children}
        </div>
      </aside>
    </>
  );
};
export default QuickNav;
