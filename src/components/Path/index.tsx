import Chevronright from '@/assets/svg/ChevronRightIcon';
import { FC } from 'react';
import styles from './styles.module.css';

interface IPathProps {
  section: string;
}

const Path: FC<IPathProps> = ({ section }) => {
  return (
    <>
      <div className={styles.page_path}>
        <span>Docs</span>
        <span>
          <Chevronright />
        </span>
        <span>{section}</span>
      </div>
    </>
  );
};
export default Path;
