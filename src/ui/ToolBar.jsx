import React from 'react';
import Button from './Button';

export default function ToolBar({ buttons, align, classes = '' }) {
  return (
    <div className={"d-flex" + (align === 'right' ? ' ms-auto' : '') + classes}>
      {
        buttons.map(button => {
          return button.separator
            ? <div className='vr mx-2' />
            : <Button
              text={button.name}
              icon={button.icon}
              classes={button.classes}
              tooltip={button.message}
              onClick={button.onClick}
            />;
        })
      }
    </div>
  );
}
