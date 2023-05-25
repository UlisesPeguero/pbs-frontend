import React from 'react';
import { Icon } from '../../ui/Icon';
import { Link } from 'react-router-dom';

export default function NavigationItem(props) {
  const { name, path, icon, active } = props.module;
  const ModuleIcon = () => <Icon iconName={icon} />;
  return (
    <li className="nav-item">
      {
        active ?
          <ModuleIcon />
          :
          <Link className='nav-link py-1 px-3 border-bottom rounded-0' to={path}>
            <ModuleIcon />
          </Link>
      }
    </li>
  );
}
