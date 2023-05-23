import { FC, ReactNode } from 'react';
import styles from './styles.module.css';

interface IQuickNavProps {
  children: ReactNode;
}

const QuickNav: FC<IQuickNavProps> = ({ children }) => {
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
