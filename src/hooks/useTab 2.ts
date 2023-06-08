import { useState } from 'react';

enum Tab {
  PREVIEW = 'preview',
  CODE = 'code',
}

const useTab = () => {
  const [selectedTab, setSelectedTab] = useState(Tab.PREVIEW);

  const switchTab = (tabName: Tab) => {
    setSelectedTab(tabName);
  };

  return { selectedTab, switchTab };
};

export { Tab, useTab };
