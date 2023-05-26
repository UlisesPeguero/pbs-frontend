import React, { useEffect, useState } from 'react';
import NavigationItem from './NavigationItem';

export default function NavigationBar() {
  const [modules, setModules] = useState([]);
  const [activeModuleId, setActiveModuleId] = useState(null);
  const handleActive = id => {
    setActiveModuleId(id);
  };

  useEffect(() => {

    setModules([
      { id: 1, name: 'Home', path: '/', icon: 'House', active: false },
      { id: 2, name: 'Test', path: '/test', icon: 'PeopleFill', active: false }
    ]);

    const currentPath = window.location.pathname;
    console.log(currentPath, modules.find(module => currentPath == module.path));
    setActiveModuleId(1);

  }, []);

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
