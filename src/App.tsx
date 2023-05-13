import Documentation from '@/pages/Documentation';
import Home from '@/pages/Home';
import { COMPONENTS } from '@/utils/constants';
import { convertToURL } from '@/utils/convertToURL';
import { createElement } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Installation from './components/GettingStarted/Installation';
import Introduction from './components/GettingStarted/Introduction';
import Theming from './components/GettingStarted/Theming';
import Typography from './components/GettingStarted/Typography';

function App() {
  return (
    <>
      <div className='app'>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/docs' element={<Documentation />}>
              <Route path='/docs' element={<Introduction />} />
              <Route path='/docs/installation' element={<Installation />} />
              <Route path='/docs/theming' element={<Theming />} />
              <Route path='/docs/typography' element={<Typography />} />

              {Object.entries(COMPONENTS).map(([name, component], index) => {
                const path = convertToURL(name);
                return <Route key={index} path={`/docs/components${path}`} element={createElement(component)} />;
              })}
            </Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
