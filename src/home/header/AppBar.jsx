import React from 'react';
import AppBarTitle from './AppBarTitle';

import logo from '../../img/logo.svg';

export default function AppBar(props) {
  return (
    <header className='border-botton shadow-sm'>
      <div className='container-fluid d-grid gap-3 alignt-items-center px-2 px-md-3' style={{ gridTemplateColumns: '1fr 1fr' }}>
        <img src={logo} alt="PBS Logo" className='img-fluid' />
        <AppBarTitle appTitle={props.appTitle} />
      </div>
    </header>
  );
}
