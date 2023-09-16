import React from 'react';
import ToolBar from '../../ui/ToolBar';
import ContentHeader from '../../dashboard/content/ContentHeader';
import Grid from '../../ui/grid/Grid';
import { useNavigate } from 'react-router-dom';
import { TOOLBAR_ACTIONS as Toolbar } from '../../ui/grid/_GridToolBarActions';

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

            Toolbar.REFRESH,
            // Toolbar.FILTER,
            {
              name: Toolbar.FILTER,
              filter: row => row.username.includes('ulises')
            },
            Toolbar.PAGINATION
          ]
        }}
        classes='table-striped table-bordered table-hover'
        // pagination
        pagination={{
          maxPagesShown: 3, // besides prev, next, first and last
          rowsPerPage: 10,

        }}
        currentPage={1}
        model={[
          {
            name: 'id',
            label: 'ID',
            type: 'number',
            sortable: true
          }, {
            name: 'username',
            label: 'Username',
            searchable: true,
            sortable: true,
            length: 200,
            classes: 'fw-semibold text-center',
          }, {
            name: 'roles',
            label: 'Roles',
            searchable: true,
            sortable: true,
            length: 400
          }, {
            name: 'toolbar',
          }
        ]}
        data={[
          { id: 1, username: 'fox', roles: 'ADMIN', active: true },
          { id: 2, username: 'ulises', roles: 'EMPLOYEES.ADMIN' },
          { id: 3, username: 'peguero', roles: 'INVOICE.ADMIN, STAYS.ADMIN' },
          { id: 4, username: 'ulises2', roles: 'EMPLOYEES.ADMIN' },
          { id: 5, username: 'peguero2', roles: 'INVOICE.ADMIN, STAYS.ADMIN' },
          { id: 6, username: 'ulises3', roles: 'EMPLOYEES.ADMIN' },
          { id: 7, username: 'peguero3', roles: 'INVOICE.ADMIN, STAYS.ADMIN' },
          { id: 8, username: 'ulises4', roles: 'EMPLOYEES.ADMIN' },
          { id: 9, username: 'peguero4', roles: 'INVOICE.ADMIN, STAYS.ADMIN' },
          { id: 10, username: 'ulises5', roles: 'EMPLOYEES.ADMIN' },
          { id: 11, username: 'peguero5', roles: 'INVOICE.ADMIN, STAYS.ADMIN' },
          { id: 12, username: 'peguero6', roles: 'INVOICE.ADMIN, STAYS.ADMIN' },
          { id: 13, username: 'ulises6', roles: 'EMPLOYEES.ADMIN' },
          { id: 14, username: 'peguero7', roles: 'INVOICE.ADMIN, STAYS.ADMIN' },
          { id: 15, username: 'peguero8', roles: 'INVOICE.ADMIN, STAYS.ADMIN' },
          { id: 16, username: 'ulises7', roles: 'EMPLOYEES.ADMIN' },
          { id: 17, username: 'peguero9', roles: 'INVOICE.ADMIN, STAYS.ADMIN' },
          { id: 18, username: 'peguero10', roles: 'INVOICE.ADMIN, STAYS.ADMIN' },
          { id: 19, username: 'ulises8', roles: 'EMPLOYEES.ADMIN' },
          { id: 20, username: 'peguero11', roles: 'INVOICE.ADMIN, STAYS.ADMIN' },
          { id: 21, username: 'peguero12', roles: 'INVOICE.ADMIN, STAYS.ADMIN' },
          { id: 22, username: 'ulises', roles: 'EMPLOYEES.ADMIN' },
          { id: 23, username: 'peguero13', roles: 'INVOICE.ADMIN, STAYS.ADMIN' },
          { id: 15, username: 'peguero8', roles: 'INVOICE.ADMIN, STAYS.ADMIN' },
          { id: 16, username: 'ulises7', roles: 'EMPLOYEES.ADMIN' },
          { id: 17, username: 'peguero9', roles: 'INVOICE.ADMIN, STAYS.ADMIN' },
          { id: 18, username: 'peguero10', roles: 'INVOICE.ADMIN, STAYS.ADMIN' },
          { id: 19, username: 'ulises8', roles: 'EMPLOYEES.ADMIN' },
          { id: 20, username: 'peguero11', roles: 'INVOICE.ADMIN, STAYS.ADMIN' },
          { id: 21, username: 'peguero12', roles: 'INVOICE.ADMIN, STAYS.ADMIN' },
          { id: 22, username: 'ulises', roles: 'EMPLOYEES.ADMIN' },
          { id: 23, username: 'peguero13', roles: 'INVOICE.ADMIN, STAYS.ADMIN' },
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
