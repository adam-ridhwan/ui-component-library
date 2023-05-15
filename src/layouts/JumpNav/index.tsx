import { FC } from 'react';
import styles from './styles.module.css';

interface IJumpNavProps {
  children: React.ReactNode;
}

const JumpNav: FC<IJumpNavProps> = ({ children }) => {
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
export default JumpNav;
