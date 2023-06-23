import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { SideBarProvider } from './context/sideBarContext';

import { SearchBarProvider } from './context/searchBarContext';
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
