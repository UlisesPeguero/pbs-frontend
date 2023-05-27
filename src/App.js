import { Route, Routes } from 'react-router-dom';
import './App.css';
import AppBar from './home/header/AppBar';
import NavigationBar from './home/navigation/NavigationBar';
import Home from './modules/Home';
import Test from './modules/Test';
import BreadCrumbs from './home/BreadCrumbs';
import { useEffect, useState } from 'react';

function App() {
  const [modules, setModules] = useState([]);
  const [activeModule, setActiveModule] = useState(null);
  useEffect(() => {
    // TODO: Fetch modules from API
    const listModules = [
      { id: 1, name: 'Home', path: '/', icon: 'House', active: false },
      { id: 2, name: 'Test', path: '/test', icon: 'PeopleFill', active: false },
    ];
    setModules(state => listModules);
    setActiveModule(
      listModules.find(module => module.path === window.location.pathname)
    );
  }, []);

  return (
    <>
      <AppBar appTitle='PET BOARDING SERVICE' />
      <div className='d-flex'>
        <NavigationBar modules={modules} activeModule={activeModule} />
        <div className='d-flex flex-column w-100'>
          <BreadCrumbs module={{ name: 'HOME', path: '/' }} />
          <main className='content pt-1 px-4'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/test' element={<Test />} />
            </Routes>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
