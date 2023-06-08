import React from 'react';
import Button from './Button';

export default function ToolBar({ buttons, align, classes = '' }) {
  return (
    <div className={"d-flex" + (align === 'right' ? ' ms-auto' : '') + classes}>
      {
        buttons.map((button, index) => {
          return button.separator
            ? <div className='vr mx-2' key={'separator' + index} />
            : <Button
              key={button.name + index}
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
