import { useState } from 'react';

enum Tab {
  PREVIEW = 'preview',
  CODE = 'code',
}

const useTab = (initialTab: Tab) => {
  const [selectedTab, setSelectedTab] = useState(initialTab);

  const switchTab = (tabName: Tab) => {
    setSelectedTab(tabName);
  };

  return { selectedTab, switchTab };
};

export { Tab, useTab };
