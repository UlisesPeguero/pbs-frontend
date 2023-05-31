import React from 'react';
import AppBarTitle from './AppBarTitle';

import logo from '../../img/logo.svg';
import UserInformation from './UserInformation';

export default function AppBar(props) {
  return (
    <header className='app-header border-bottom shadow-sm'>
      <div className='container-fluid d-grid gap-3 alignt-items-center px-2 px-md-3' style={{ gridTemplateColumns: '1fr 1fr' }}>
        <div className='d-flex align-items-center app-header-title'>
          <img src={logo} height={48} alt="PBS Logo" className='app-logo' />
          <AppBarTitle appTitle={props.appTitle} />
        </div>
        <UserInformation user={{ name: 'Place Holder', profilePicture: '' }} />
      </div>
    </header>
  );
}
