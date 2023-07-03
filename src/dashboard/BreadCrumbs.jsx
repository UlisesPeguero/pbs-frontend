import React, { useEffect, useState } from 'react';
import { Link, useLocation, useMatches } from 'react-router-dom';
import getCurrentPath from '../common/currentLocation';
export default function BreadCrumbs() {
  const [locations, setLocations] = useState([]);
  const [path, setPath] = useState();
  const [name, setName] = useState();
  const appLocation = useLocation();
  const matches = useMatches();
  const currentPath = getCurrentPath();

  useEffect(() => {
    if (matches.length > 0) {
      setName(matches.find(match => match.pathname === currentPath && match?.handle?.rootLocationName)?.handle?.rootLocationName);
      setPath(currentPath);
      setLocations(matches.filter(match => match.pathname !== currentPath && match?.handle?.locationName));
    }
  }, [appLocation]);

  return (
    <div className="module-breadcrumbs py-0 px-4">
      <ol className="breadcrumb">

        <li className='breadcrumb-item'>
          {
            locations.length > 0
              ? <Link className='link-primary' to={path}>{name}</Link>
              : name
          }
        </li>
        {
          locations.map(location => <li key={location.pathname} className="breadcrumb-item active">{location.handle.locationName}</li>)
        }
      </ol>
    </div>
  );
}
