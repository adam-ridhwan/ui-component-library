import { FC } from 'react';

import { useSideBarContext } from '@/hooks/useSideBarContext';

import styles from './styles.module.css';

const MobileSidebar: FC = () => {
  const { isSidebarToggled, toggleSidebar } = useSideBarContext();

  const containerStyle = `${styles.container} ${isSidebarToggled && styles.container_visible}`;
  const contentStyle = `${styles.content} ${isSidebarToggled && styles.content_active}
`;

  return (
    <>
      {/* Blurry overlay */}
      <div className={containerStyle} onClick={toggleSidebar} />

      <div className={contentStyle}></div>
    </>
  );
};

export default MobileSidebar;
