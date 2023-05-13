import Documentation from '@/pages/Documentation';
import { createElement } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Home';
import { COMPONENTS, GETTING_STARTED_NAVIGATION } from './utils/constants';

function App() {
  return (
    <>
      <div className='app'>
        <Router>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/docs' element={<Documentation />}>
              {GETTING_STARTED_NAVIGATION.map((navigation, index) => {
                return (
                  <Route
                    key={index}
                    path={`/docs/${navigation.toLowerCase().replace(' ', '-')}`}
                    element={<div>{navigation}</div>}
                  />
                );
              })}

              {Object.entries(COMPONENTS).map(([name, component], index) => {
                const path = name.toLowerCase().replace(' ', '-');
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
