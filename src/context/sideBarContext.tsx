import { GETTING_STARTED_COMPONENTS } from '@/utils/constants';
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
  const [currentSection, setCurrentSection] = useState<string>(Object.keys(GETTING_STARTED_COMPONENTS)[0]);

  const toggleSidebar = () => {
    setIsSidebarToggled(!isSidebarToggled);
  };

  return (
    <SideBarContext.Provider value={{ isSidebarToggled, toggleSidebar, currentSection, setCurrentSection }}>
      {children}
    </SideBarContext.Provider>
  );
};

export { SideBarProvider };
