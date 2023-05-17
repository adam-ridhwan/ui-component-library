import { COMPONENTS_ROUTES, DOC_ROUTE } from '@/utils/constants';
import { convertToTitleCase } from '@/utils/convertToTitleCase';
import { FC, FunctionComponent, SVGProps } from 'react';
import NavigationButton from '../NavigationButton/NavigationButton';
import styles from './styles.module.css';

interface ISectionProps {
  title: string;
  items: string[];
  Icon: FunctionComponent<SVGProps<SVGSVGElement>>;
}

const SearchSection: FC<ISectionProps> = ({ title, items, Icon }) => {
  return (
    <>
      <div className={styles.section_container}>
        <span className={styles.title}>{title}</span>
        {items.map((item, index) => (
          <NavigationButton key={index} path={`${COMPONENTS_ROUTES}/${item}`} section={item}>
            <div key={index} className={styles.item}>
              <Icon />
              <span>{convertToTitleCase(item)}</span>
            </div>
          </NavigationButton>
        ))}
      </div>
    </>
  );
};
export default SearchSection;
