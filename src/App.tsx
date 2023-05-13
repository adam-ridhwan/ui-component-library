import Documentation from '@/pages/Documentation';
import { createElement } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Home';
import { COMPONENTS } from './utils/constants';

function App() {
  return (
    <>
      <div className='app'>
        <Router>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/docs' element={<Documentation />} />

            {Object.entries(COMPONENTS).map(([name, component], index) => {
              const path = name.toLowerCase().replace(' ', '-');
              return <Route path={`/docs/components/${path}`} key={index} element={createElement(component)} />;
            })}
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
