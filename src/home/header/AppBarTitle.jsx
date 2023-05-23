import React from 'react';

export default function AppBarTitle(props) {
  return (
    <span className='px-4 fw-bold d-none d-md-block'>
      {props.appTitle}
    </span>
  );
}
