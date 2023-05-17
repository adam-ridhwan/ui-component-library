import { useSearchBarContext } from '@/hooks/useSearchBarContext';
import { FC, FunctionComponent, SVGProps } from 'react';
import styles from './styles.module.css';

interface ISectionProps {
  title: string;
  items: string[];
  Icon: FunctionComponent<SVGProps<SVGSVGElement>>;
}

const SearchSection: FC<ISectionProps> = ({ title, items, Icon }) => {
  const { searchInputValue } = useSearchBarContext();

  return (
    <>
      <div className={styles.section_container}>
        <span className={styles.title}>{title}</span>
        {items.map((item, index) => (
          <div key={index} className={styles.items}>
            <Icon />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </>
  );
};
export default SearchSection;
