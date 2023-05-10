import { useSideBarContext } from '@/hooks/useSideBarContext';

import styles from './styles.module.css';

const MobileSidebar = () => {
  const { isSidebarToggled, toggleSidebar } = useSideBarContext();

  return (
    <>
      <div
        className={`
					${styles.mobilesidebar_container}
					${isSidebarToggled && styles.mobilesidebar_container_visible}
				`}
        onClick={toggleSidebar}
      ></div>

      <div
        className={`
						${styles.mobilesidebar_content}
						${isSidebarToggled && styles.mobilesidebar_content_active}
					`}
      ></div>
    </>
  );
};

export default MobileSidebar;
