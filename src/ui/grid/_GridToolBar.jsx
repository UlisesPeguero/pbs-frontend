import React from 'react';
import { createPortal } from 'react-dom';
import Input from '../form/Input';
import ToolBar from '../ToolBar';
import { TOOLBAR_BUTTONS as Buttons, TOOLBAR_ACTIONS as Actions } from './_GridToolBarActions';

export default function GridToolBar({
  containerId,
  search,
  onToolBarAction,
  buttons = []
}) {

  return createPortal(
    <div className='w-100 d-flex gap-2'>
      {
        search &&
        <Input name='gridSearch' containerClasses='me-auto' onChange={({ target }) => onToolBarAction('search', target.value)} />
      }

      {buttons.length > 0 &&
        <ToolBar gap={2} buttons={
          buttons.map(item => {
            if (typeof item === 'string') {
              const button = Buttons[item] || null;
              button.onClick = () => onToolBarAction(item, item);
              return button;
            }
            return null;
          })
        } />

      }
    </div>,
    document.getElementById(containerId));
}
