import React from 'react';
import NavigationItem from './NavigationItem';

export default function NavigationBar() {
  const modules = [{ name: 'Home', path: '/', icon: 'House', active: false }, { name: 'Test', path: '/test', icon: 'PeopleFill', active: false }];
  return (
    <nav className="navigation-sidebar d-flex flex-column fleshrink-0 shadow-sm mb-auto">
      <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
        <div className='navigation-spacer w-100'></div>
        {
          modules.map(module =>
            <NavigationItem key={module.name} module={module} />
          )
        }
      </ul>
    </nav>
  );
}
