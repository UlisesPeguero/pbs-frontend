import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import AppBar from './dashboard/header/AppBar';
import NavigationBar from './dashboard/navigation/NavigationBar';
import Home from './modules/home/Home';
import Test from './modules/test/Test';
import BreadCrumbs from './dashboard/BreadCrumbs';
import { useEffect, useState } from 'react';
import TestGrid from './modules/test/TestGrid';

function mainPathFromLocation() {
  const [currentPath = ''] = window.location.pathname.match(/^([/]\w*)/gi);
  return currentPath;
}

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

    const currentPath = mainPathFromLocation();
    const module = listModules.find(module => module.path === currentPath);
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
              <Route
                path='/users'
                element={
                  <>
                    <Outlet />
                  </>
                }
              >
                <Route index element={<TestGrid />} />
                <Route path='add' element={<Test />} />
              </Route>
            </Routes>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
