import React, { useEffect, useState } from 'react';
import NavigationItem from './NavigationItem';

export default function NavigationBar() {
  const [modules, setModules] = useState([]);
  const [activeModuleId, setActiveModuleId] = useState(0);
  const handleActive = id => {
    setActiveModuleId(id);
  };

  useEffect(() => {

    // TODO: Fetch modules from API
    setModules(state => [
      { id: 1, name: 'Home', path: '/', icon: 'House', active: false },
      { id: 2, name: 'Test', path: '/test', icon: 'PeopleFill', active: false }
    ]);

    return () => setModules([]);
  }, []);
  useEffect(() => {
    const currentPath = window.location.pathname;
    for (let index in modules) { // TODO: Figure out why .find didn't work
      if (modules[index].path === currentPath) {
        setActiveModuleId(id => modules[index].id);
        break;
      }
    }
  }, [modules]);


  return (
    <nav className="navigation-sidebar d-flex flex-column fleshrink-0 shadow-sm mb-auto">
      <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
        <div className='navigation-spacer w-100'></div>
        {
          modules.map(module =>
            <NavigationItem key={module.id} module={module} setActive={handleActive} isActive={activeModuleId === module.id} />
          )
        }
      </ul>
    </nav>
  );
}
