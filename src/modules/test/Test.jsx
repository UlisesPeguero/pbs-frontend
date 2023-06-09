import React from 'react';
import ContentHeader from '../../dashboard/content/ContentHeader';
import ToolBar from '../../ui/ToolBar';
import TestForm from './TestForm';

export default function Test() {

  return (
    <>
      <ContentHeader title='Test title'>
        <ToolBar align='right'
          buttons={[
            {
              text: 'Delete',
              message: 'Delete some test.',
              classes: 'btn-danger',
              icon: 'Trash',
              onClick: () => console.log('Delete something')
            }, {
              separator: true
            }, {
              text: 'Other stuff',
              message: 'Some other stuff..',
              icon: 'Table',
              onClick: () => console.log('Other something')
            }
          ]} />
      </ContentHeader>
      <TestForm />
    </>
  );
}
