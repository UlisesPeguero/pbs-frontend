import { Route, Routes } from 'react-router-dom';
import './App.css';
import AppBar from './dashboard/header/AppBar';
import NavigationBar from './dashboard/navigation/NavigationBar';
import Home from './modules/Home';
import Test from './modules/Test';
import BreadCrumbs from './dashboard/BreadCrumbs';
import { useEffect, useState } from 'react';

function App() {
  const [modules, setModules] = useState([]);
  const [activeModule, setActiveModule] = useState(null);
  const [breadCrumbsLocation, setBreadCrumbsLocation] = useState({});

  const handleActiveModule = module => {
    setActiveModule(module);
    setBreadCrumbsLocation({ name: module.name, path: module.path });
  };

  useEffect(() => {
    // TODO: Fetch modules from API
    const listModules = [
      { id: 1, name: 'Home', path: '/', icon: 'House', active: false },
      {
        id: 2,
        name: 'Users',
        path: '/users',
        icon: 'PeopleFill',
        active: false,
      },
    ];
    setModules(state => listModules);
    const module = listModules.find(
      module => module.path === window.location.pathname
    );
    handleActiveModule(module);
  }, []);

  return (
    <>
      <AppBar appTitle='PET BOARDING SERVICE' />
      <div className='d-flex'>
        <NavigationBar
          modules={modules}
          activeModule={activeModule}
          handleActiveModule={handleActiveModule}
        />
        <div className='d-flex flex-column w-100'>
          <BreadCrumbs {...breadCrumbsLocation} />
          <main className='content pt-1 px-4 col-md-12 col-lg-10 col-xl-8  col-xxl-6'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/users' element={<Test />} />
            </Routes>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
