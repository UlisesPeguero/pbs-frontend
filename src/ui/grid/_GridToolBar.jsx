import React from 'react';
import { createPortal } from 'react-dom';
import { SimpleInput } from '../form/Input';
import ToolBar from '../ToolBar';
import { TOOLBAR_BUTTONS as Buttons, TOOLBAR_ACTIONS as Actions } from './_GridToolBarActions';

function getSearchEvents(search, onToolBarAction) {
  if (!search && typeof onToolBarAction !== 'function') return {};
  const searchAction = ({ target }) => onToolBarAction(Actions.SEARCH, target.value);
  if (typeof search === 'object') {
    let events = {};
    if (search.onEnter) {
      events.onKeyUp = (event) => {
        if (event.key === 'Enter' || event.keyCode === 13)
          searchAction(event);
      };
    }
    return events;
  }
  if (search) {
    return {
      onChange: searchAction
    };
  }
}

export default function GridToolBar({
  containerId,
  search,
  onToolBarAction,
  buttons = []
}) {

  const searchEvents = getSearchEvents(search, onToolBarAction);


  return createPortal(
    <div className='w-100 d-flex gap-2'>
      {
        search &&
        <SimpleInput name='gridSearch' classes='form-control-sm me-auto'  {...searchEvents} />
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
