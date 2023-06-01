import Installation from '@/components/installation';
import Introduction from '@/components/introduction';
import Theming from '@/components/theming';
import Typography from '@/components/typography';
import Documentation from '@/pages/Documentation';
import Home from '@/pages/Home';
import { COMPONENTS, COMPONENTS_ROUTES } from '@/utils/constants';
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
              <Route path='/docs' element={<Introduction />} />
              <Route path='/docs/installation' element={<Installation />} />
              <Route path='/docs/theming' element={<Theming />} />
              <Route path='/docs/typography' element={<Typography />} />

              {Object.entries(COMPONENTS).map(([path, component], index) => {
                return <Route key={index} path={`${COMPONENTS_ROUTES}/${path}`} element={createElement(component)} />;
              })}
            </Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
