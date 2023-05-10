import { FC, ReactNode, createContext, useState } from 'react';

export interface SideBarContextValue {
  isSidebarToggled: boolean;
  toggleSidebar: () => void;
}

export const SideBarContext = createContext<SideBarContextValue | null>(null);

interface SideBarProps {
  children: ReactNode;
}

const SideBarProvider: FC<SideBarProps> = ({ children }) => {
  const [isSidebarToggled, setIsSidebarToggled] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarToggled(!isSidebarToggled);
  };

  return (
    <SideBarContext.Provider value={{ isSidebarToggled, toggleSidebar }}>
      {children}
    </SideBarContext.Provider>
  );
};

export { SideBarProvider };
