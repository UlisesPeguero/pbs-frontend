import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function mainPathFromLocation() {
  const [currentPath = ''] = window.location.pathname.match(/^([/]\w*)/gi);
  return currentPath;
}
export default function BreadCrumbs({ name, path, location }) {
  const appLocation = useLocation();

  useEffect(() => {
    //TODO: resolve location automatically
  }, [appLocation]);

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
