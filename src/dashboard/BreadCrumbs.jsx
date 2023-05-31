import React from 'react';
import { Link } from 'react-router-dom';

export default function BreadCrumbs({ name, path, location }) {
  const locations = location?.split('/') || [];
  return (
    <div className="module-breadcrumbs py-0 px-4">
      <ol className="breadcrumb">

        <li className='breadcrumb-item'>
          {
            locations.length > 0
              ? <Link to={path}>{name}</Link>
              : name?.toUpperCase()
          }
        </li>
        {
          locations.map(location => <li className="breadcrumb-item active">{location}</li>)
        }
      </ol>
    </div>
  );
}
