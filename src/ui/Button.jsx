import React from 'react';

export default function Button({ children, type = 'button', onClick, classes = 'btn-primary' }) {
  // TODO: Testing styles
  const style = {
    outline: 'none',
    borderWidth: '0',
    borderRadius: '2px',
    boxShadow: '0 1px 4px rgba(0, 0, 0, .6)'
  };
  return (
    <button style={style} className={'btn ' + classes} type={type} onClick={onclick}>
      {children}
    </button>
  );
}
