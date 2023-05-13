import Documentation from '@/pages/Documentation';
import Home from '@/pages/Home';
import { COMPONENTS, GETTING_STARTED_COMPONENTS } from '@/utils/constants';
import { convertToURL } from '@/utils/convertToURL';
import { createElement } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <div className='app'>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/docs' element={<Documentation />}>
              {Object.entries(GETTING_STARTED_COMPONENTS).map(([name, component], index) => {
                if (index !== 0) {
                  const path = convertToURL(name);
                  return <Route key={index} path={`/docs/${path}`} element={createElement(component)} />;
                }
                return null; // Return null when skipping the first element
              })}
              {Object.entries(COMPONENTS).map(([name, component], index) => {
                const path = convertToURL(name);
                return <Route key={index} path={`/docs/components/${path}`} element={createElement(component)} />;
              })}
            </Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
