import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import AppBar from './header/AppBar';
import NavigationBar from './navigation/NavigationBar';
import BreadCrumbs from './BreadCrumbs';
import getCurrentLocation from '../common/currentLocation.js';

export default function Layout() {
  const [modules, setModules] = useState([]);
  const [activeModule, setActiveModule] = useState(null);

  const handleActiveModule = module => {
    setActiveModule(module);
  };

  useEffect(() => {
    // TODO: Fetch modules from API
    const listModules = [
      { id: 1, name: 'Home', path: '/', icon: 'House', active: false },
      {
        id: 2,
        name: 'Employees',
        path: '/employees',
        icon: 'PersonRolodex',
        active: false,
      },
      {
        id: 3,
        name: 'Users',
        path: '/users',
        icon: 'PeopleFill',
        active: false,
      },
    ];
    setModules(state => listModules);

    const currentPath = getCurrentLocation();
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
          <BreadCrumbs />
          <main className='content pt-1 px-4 col-md-12 col-lg-10 col-xl-8 col-xxl-6' style={{ overflow: 'hidden' }}>
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}
