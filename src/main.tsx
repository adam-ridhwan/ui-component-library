import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

import { SideBarProvider } from './context/sideBarContext.tsx';

import { SearchBarProvider } from './context/searchBarContext.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SideBarProvider>
      <SearchBarProvider>
        <App />
      </SearchBarProvider>
    </SideBarProvider>
  </React.StrictMode>
);
