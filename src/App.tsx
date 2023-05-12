import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Homepage from './pages/Home';
import { COMPONENTS } from './utils/constants';

import './App.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Homepage />} />
          {Object.keys(COMPONENTS).map((component, index) => {
            const path = component.toLowerCase().replace(' ', '-');
            const file = component
              .split(' ')
              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
              .join('');
            console.log(path, file);
            function renderComponent(file: string) {
              const Component = file;
              return <Component />;
            }

            return <Route path={`/${path}`} key={index} element={renderComponent(file)} />;
          })}
        </Routes>
      </Router>
    </>
  );
}

export default App;
