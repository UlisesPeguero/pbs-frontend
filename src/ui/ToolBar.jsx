import React from 'react';
import Button from './Button';

export default function ToolBar({ buttons, align, classes = '', gap, ...rest }) {
  return (
    <div className={`hstack ${gap ? 'gap-' + gap : ''}  ${align === 'right' ? 'ms-auto' : ''} ${classes}`} {...rest}>
      {
        buttons.map((button, index) => {
          return button.separator
            ? <div className='vr mx-2' key={'separator' + index} />
            : <Button
              key={button.id || 'btn' + index}
              text={button.text}
              icon={button.icon}
              classes={button.classes}
              tooltip={button.message}
              onClick={button.onClick}
              type={button.type}
              busy={button.busy}
            />;
        })
      }
    </div>
  );
}
