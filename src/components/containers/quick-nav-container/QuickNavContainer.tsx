import { FC, ReactElement } from 'react';
import useResolution, { DeviceType } from '@/hooks/useResolution.tsx';
import styles from './QuickNavContainer-styles.module.css';

interface QuickNavContainerProps {
  children: ReactElement<HTMLElement>;
}

const QuickNavContainer: FC<QuickNavContainerProps> = ({ children }) => {
  const [deviceType] = useResolution();
  const isLargeDesktop = [DeviceType.LARGE_DESKTOP].includes(deviceType);

  return <div className={styles.quick_nav_container}>{isLargeDesktop && children}</div>;
};

export default QuickNavContainer;
