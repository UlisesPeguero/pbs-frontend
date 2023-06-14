import React from 'react';
import ToolBar from '../../ui/ToolBar';
import ContentHeader from '../../dashboard/content/ContentHeader';
import Grid from '../../ui/grid/Grid';
import { useNavigate } from 'react-router-dom';

export default function UsersGrid() {
  const navigate = useNavigate();
  const handleAddClick = () => navigate('./add');
  return (
    <>
      <ContentHeader title='Test grid'>
        <ToolBar
          gap={2}
          buttons={[
            {
              text: 'Add Test',
              message: 'Add some test.',
              icon: 'PlusSquare',
              onClick: handleAddClick
            }, {
              message: 'Some other test stuff..',
              icon: 'Table',
              onClick: () => console.log('Other test something')
            }
          ]} />
        <ToolBar align='right'
          buttons={[
            {
              text: 'Other stuff',
              message: 'Some other stuff..',
              icon: 'Table',
              onClick: () => console.log('Other something')
            }
          ]} />
      </ContentHeader>
      <Grid id='usersGrid'
        classes='table-striped table-bordered table-hover'
        model={[
          {
            name: 'id',
            label: 'ID',
            hidden: true
          }, {
            name: 'username',
            label: 'Username',
            classes: 'fw-semibold text-center',
          }, {
            name: 'roles',
            label: 'Roles'
          }
        ]}
        data={[
          { id: 1, username: 'fox', roles: 'ADMIN' },
          { id: 2, username: 'ulises', roles: 'EMPLOYEES.ADMIN' },
          { id: 3, username: 'peguero', roles: 'INVOICE.ADMIN, STAYS.ADMIN' },
        ]}
      />
    </>
  );
}
