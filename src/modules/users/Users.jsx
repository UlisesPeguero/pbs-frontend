import React from 'react';
import ContentHeader from '../../dashboard/content/ContentHeader';
import ToolBar from '../../ui/ToolBar';
import UsersForm from './UsersForm';

export default function Users() {

  return (
    <>
      <ContentHeader title='User'>
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
      <UsersForm />
    </>
  );
}
