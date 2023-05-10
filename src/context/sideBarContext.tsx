import { FC, ReactNode, createContext, useState } from 'react';

export interface SideBarContextValue {
  isSidebarToggled: boolean;
  toggleSidebar: () => void;
}

export const SideBarContext = createContext<SideBarContextValue | null>(null);

interface MyComponentProps {
  children: ReactNode;
}

const SidebarProvider: FC<MyComponentProps> = ({ children }) => {
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

export { SidebarProvider };
