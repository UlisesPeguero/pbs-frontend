import React, { useState } from 'react';
import { Icon } from '../../ui/Icon';
import { useNavigate } from 'react-router-dom';

export default function NavigationItem(props) {
  const { id, path, icon } = props.module;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(path);
    props.setActive(id);
  };
  const ModuleIcon = () => <Icon iconName={icon} className='my-2' />;
  return (
    <li className={`nav-item ${props.isActive ? 'active-module' : ''}`}>
      {
        props.isActive ?
          <ModuleIcon />
          :
          <button
            className='nav-link py-1 px-3 border-bottom rounded-0'
            onClick={handleClick}
          >
            <ModuleIcon />
          </button>
      }
    </li>
  );
}
