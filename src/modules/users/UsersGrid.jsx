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
        <div id='usersGridToolbar' className='ms-auto'></div>
      </ContentHeader>
      <Grid
        id='usersGrid'
        toolbar={{
          containerId: 'usersGridToolbar',
          search: true,
          buttons: [
            'refresh',
            'filter'
          ]
        }}
        classes='table-striped table-bordered table-hover'
        // pagination
        pagination={{
          maxPagesShown: 3, // besides prev, next, first and last
          rowsPerPage: 5,
          selector: {
            onChange: value => console.log("Trigger rows per page changed"),
            options: [5, 10, 15, 20, 25, 30]
          }
        }}
        currentPage={1}
        model={[
          {
            name: 'id',
            label: 'ID',
            hidden: true
          }, {
            name: 'username',
            label: 'Username',
            searchable: true,
            length: 200,
            classes: 'fw-semibold text-center',
          }, {
            name: 'roles',
            label: 'Roles',
            searchable: true,
            length: 400
          }, {
            name: 'toolbar',
          }
        ]}
        data={[
          { id: 1, username: 'fox', roles: 'ADMIN' },
          { id: 2, username: 'ulises', roles: 'EMPLOYEES.ADMIN' },
          { id: 3, username: 'peguero', roles: 'INVOICE.ADMIN, STAYS.ADMIN' },
          { id: 2, username: 'ulises2', roles: 'EMPLOYEES.ADMIN' },
          { id: 3, username: 'peguero2', roles: 'INVOICE.ADMIN, STAYS.ADMIN' },
          { id: 2, username: 'ulises3', roles: 'EMPLOYEES.ADMIN' },
          { id: 3, username: 'peguero3', roles: 'INVOICE.ADMIN, STAYS.ADMIN' },
          { id: 2, username: 'ulises4', roles: 'EMPLOYEES.ADMIN' },
          { id: 3, username: 'peguero4', roles: 'INVOICE.ADMIN, STAYS.ADMIN' },
          { id: 2, username: 'ulises5', roles: 'EMPLOYEES.ADMIN' },
          { id: 3, username: 'peguero5', roles: 'INVOICE.ADMIN, STAYS.ADMIN' },
          { id: 3, username: 'peguero6', roles: 'INVOICE.ADMIN, STAYS.ADMIN' },
          { id: 2, username: 'ulises6', roles: 'EMPLOYEES.ADMIN' },
          { id: 3, username: 'peguero7', roles: 'INVOICE.ADMIN, STAYS.ADMIN' },
          { id: 3, username: 'peguero8', roles: 'INVOICE.ADMIN, STAYS.ADMIN' },
          { id: 2, username: 'ulises7', roles: 'EMPLOYEES.ADMIN' },
          { id: 3, username: 'peguero9', roles: 'INVOICE.ADMIN, STAYS.ADMIN' },
          { id: 3, username: 'peguero10', roles: 'INVOICE.ADMIN, STAYS.ADMIN' },
          { id: 2, username: 'ulises8', roles: 'EMPLOYEES.ADMIN' },
          { id: 3, username: 'peguero11', roles: 'INVOICE.ADMIN, STAYS.ADMIN' },
          { id: 3, username: 'peguero12', roles: 'INVOICE.ADMIN, STAYS.ADMIN' }, { id: 2, username: 'ulises', roles: 'EMPLOYEES.ADMIN' },
          { id: 3, username: 'peguero13', roles: 'INVOICE.ADMIN, STAYS.ADMIN' },
        ]}
        rowToolBar={[
          {
            icon: 'Trash',
            size: 'sm',
            style: null,
            classes: 'btn-outline-danger',
            onClick: (data) => console.log(`Delete row ID:${data.id}`)
          }, {
            icon: 'Pen',
            size: 'sm',
            style: null,
            classes: 'btn-outline-primary',
            onClick: (data) => console.log(`Open for edition row ID:${data.id}`)
          }
        ]}
      />
    </>
  );
}
