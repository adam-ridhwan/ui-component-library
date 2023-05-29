import { Tab } from '@/hooks/useTab';
import React from 'react';
import styles from './styles.module.css';

interface TabSelectorProps {
  selectedTab: Tab;
  switchTab: (tab: Tab) => void;
}

const TabSelector: React.FC<TabSelectorProps> = ({ selectedTab, switchTab }) => {
  const previewClassName = `${styles.tab} ${selectedTab === Tab.PREVIEW ? styles.tab_active : styles.tab_not_active}`;
  const codeTabClassName = `${styles.tab} ${selectedTab === Tab.CODE ? styles.tab_active : styles.tab_not_active}`;

  return (
    <div className={styles.tab}>
      <button onClick={() => switchTab(Tab.PREVIEW)} className={previewClassName}>
        Preview
      </button>
      <button onClick={() => switchTab(Tab.CODE)} className={codeTabClassName}>
        Code
      </button>
    </div>
  );
};

export default TabSelector;
