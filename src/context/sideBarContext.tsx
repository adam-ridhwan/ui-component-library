import { FC, ReactNode, createContext, useState } from 'react';

export interface SideBarContextValue {
  isSidebarToggled: boolean;
  toggleSidebar: () => void;
  currentSection: string;
  setCurrentSection: (section: string) => void;
}

export const SideBarContext = createContext<SideBarContextValue | null>(null);

interface SideBarProps {
  children: ReactNode;
}

const SideBarProvider: FC<SideBarProps> = ({ children }) => {
  const [isSidebarToggled, setIsSidebarToggled] = useState<boolean>(false);
  const [currentSection, setCurrentSection] = useState<string>('Introduction');

  const toggleSidebar = () => {
    setIsSidebarToggled((isSidebarToggled) => !isSidebarToggled);
  };

  return (
    <SideBarContext.Provider value={{ isSidebarToggled, toggleSidebar, currentSection, setCurrentSection }}>
      {children}
    </SideBarContext.Provider>
  );
};

export { SideBarProvider };
