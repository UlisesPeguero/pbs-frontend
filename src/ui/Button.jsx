import React from 'react';
import { Icon } from './Icon';

export default function Button({
  id,
  text,
  icon,
  children,
  type = 'button',
  onClick,
  classes = 'btn-primary',
  busy = false,
  spinnerClass = 'spinner-border spinner-border-sm',
  tooltip,
  disabled,
  ...rest
}) {
  // TODO: Testing styles
  const style = {
    outline: 'none',
    borderWidth: '0',
    borderRadius: '2px',
    boxShadow: '0 1px 4px rgba(0, 0, 0, .6)',

  };

  let ButtonContent = null;
  if (text || icon) {
    ButtonContent = () =>
      <>
        {
          (icon && !busy) && <Icon iconName={icon} size={22} />
        }
        {
          busy && <span className={spinnerClass}></span>
        }
        {
          text && <span className={'d-none d-sm-inline' + (icon ? ' ms-1' : '')}>{text}</span>
        }
      </>;
  }

  return (
    <button
      id={id || 'btn' + (text ? text.replace(' ', '') : icon)}
      style={style}
      className={'btn ' + classes}
      type={type}
      onClick={onClick}
      title={tooltip}
      disabled={disabled || busy}
      {...rest}
    >
      {
        ButtonContent
          ? <ButtonContent />
          : children
      }
    </button>
  );
}
