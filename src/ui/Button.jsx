import React from 'react';
import { Icon } from './Icon';

export default function Button({ text, icon, children, type = 'button', onClick, classes = 'btn-primary', tooltip }) {
  // TODO: Testing styles
  const style = {
    outline: 'none',
    borderWidth: '0',
    borderRadius: '2px',
    boxShadow: '0 1px 4px rgba(0, 0, 0, .6)'
  };

  let ButtonContent = null;
  if (text || icon) {
    ButtonContent = () =>
      <>
        {
          icon && <Icon iconName={icon} size={24} />
        }
        {
          text && <span className={'d-none d-sm-inline' + (icon ? ' ms-1' : '')}>{text}</span>
        }
      </>;
  }


  return (
    <button style={style} className={'btn ' + classes} type={type} onClick={onClick} title={tooltip}>
      {
        ButtonContent
          ? <ButtonContent />
          : children
      }
    </button>
  );
}
