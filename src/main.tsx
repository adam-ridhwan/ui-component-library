import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

import { SidebarProvider } from './context/sideBarContext.tsx';

import { SearchBarProvider } from './context/searchBarContext.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SidebarProvider>
      <SearchBarProvider>
        <App />
      </SearchBarProvider>
    </SidebarProvider>
  </React.StrictMode>
);
