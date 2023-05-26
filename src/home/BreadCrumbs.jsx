import React from 'react';
import { Link } from 'react-router-dom';

export default function BreadCrumbs({ module }) {
  return (
    <div className="module-breadcrumbs py-0 px-4">
      <ol className="breadcrumb">
        <li className='breadcrumb-item'>
          <Link to={module.path}>
            {module.name}
          </Link>
        </li>
        <li className="breadcrumb-item active">LOCATION</li>
      </ol>
    </div>
  );
}
