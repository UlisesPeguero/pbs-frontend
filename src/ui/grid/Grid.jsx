import React, { useEffect, useState } from 'react';
import GridRowsPerPageSelector from './_GridRowsPerPageSelector';
import GridToolBar from './_GridToolBar';
import { TOOLBAR_ACTIONS as Toolbar } from './_GridToolBarActions';
import ToolBar from '../ToolBar';
import GridPaginator from './_GridPaginator';

const DEFAULT_ROWS_PER_PAGE = 20;

function GridHeader({ model }) {
  return (
    <thead>
      <tr>
        {
          model.map(column => {
            const style = { ...column?.style } || {};
            if (column.length)
              style.width = column.length + (typeof column.length === 'number' ? 'px' : '');
            return (
              <th
                key={column.name}
                className='text-center'
                style={style}
              >
                {column.label}
              </th>);
          }
          )
        }
      </tr>
    </thead>
  );
}

function RowToolBar({ data, rowToolBar }) {
  const newToolBar = rowToolBar.map(({ onClick, ...rest }) => ({ ...rest, onClick: () => onClick(data), iconSize: 14 }));
  return <ToolBar gap={1} buttons={newToolBar} />;
}

function DataRow({ model, data, rowToolBar }) {
  return (
    <tr>
      {
        model.map(({ name, classes = '' }) => {

          return (
            <td key={name} className={classes}>
              {
                (rowToolBar && name === 'toolbar')
                  ? <RowToolBar data={data} rowToolBar={rowToolBar} />
                  : data[name]
              }
            </td>);
        })
      }

    </tr>
  );
}

function GridBody({ model, data, rowToolBar, idName }) {
  return (
    <tbody>
      {
        data.map((row, index) => <DataRow key={row[idName] + '_' + index || `row-${index}`} rowToolBar={rowToolBar} model={model} data={row} />)
      }
    </tbody>
  );
}

function searchAndFilterLocalData(data, searchValue, searchableColumns) {
  const checkForValue = (value, row) => {
    for (let column of searchableColumns) {
      if (row[column].toLowerCase().includes(value.toLowerCase())) return true;
    }
    return false;
  };
  return [...data].filter(row => checkForValue(searchValue, row));
}

function getCurrentPageData(data, rowsPerPage, currentPage) {
  let start = (currentPage - 1 < 0 ? 0 : currentPage - 1) * rowsPerPage;
  return data.slice(start, (start) + rowsPerPage);
}

export default function Grid({
  name = '_grid',
  localData = true,
  model = [],
  data = [],
  idName = 'id',
  classes = '',
  pagination,
  currentPage,
  height = '40vh',
  rowToolBar = {},
  labelRowsPerPageSelector,
  optionsRowsPerPageSelector,
  toolbar,
  ...rest
}) {
  const _tableClass = 'table w-auto bg-white shadow ' + classes;
  const filteredModel = model.filter(col => !col.hidden);
  const [domReady, setDomReady] = useState(false);
  const [currentActivePage, setCurrentActivePage] = useState(currentPage);
  const [currentRowsPerPage, setCurrentRowsPerPage] = useState(pagination?.rowsPerPage || DEFAULT_ROWS_PER_PAGE);
  const [currentData, setCurrentData] = useState(data);

  useEffect(() => { // wait for DOM to be ready for the toolbar
    setDomReady(true);
  }, []);

  // toolbar handler
  const handleToolBarActions = (action, value) => {
    switch (action) {
      case Toolbar.SEARCH: console.log('S', action, value);
        if (localData) {
          if (value === null || value.trim() === '') {
            setCurrentData(data);
            return;
          }
          const searchableColumns = model.filter(column => column.searchable)
            .map(({ name }) => name);
          setCurrentData(searchAndFilterLocalData(currentData, value, searchableColumns));
        }
        break;
      case Toolbar.REFRESH: console.log('R', action, value);
        break;
      case Toolbar.FILTER: console.log('F', action, value);
        break;
      default: //
    }
  };

  const handleRowsPerPageChange = value => setCurrentRowsPerPage(value);
  const handlePageChange = value => setCurrentActivePage(value);

  return (
    <div className='vstack gap-3' style={{ height }}>
      {
        domReady && toolbar?.containerId &&
        <GridToolBar {...toolbar} onToolBarAction={handleToolBarActions} />
      }
      <div className="d-flex p-0 w-100 overflow-auto" style={{ backgroundColor: 'darkgray', }}>
        <table className={_tableClass} {...rest}>
          <GridHeader model={filteredModel} />
          <GridBody
            data={pagination
              ? getCurrentPageData(currentData, currentRowsPerPage, currentActivePage)
              : currentData}
            model={filteredModel}
            rowToolBar={rowToolBar}
            idName={idName}
          />
        </table>
      </div>
      {
        pagination &&
        <div className='d-flex align-items-center'>
          <GridRowsPerPageSelector
            gridName={name}
            selectedValue={currentRowsPerPage}
            label={pagination?.selector?.label}
            options={pagination?.selector?.options}
            customOnChangeHandler={pagination?.selector?.onChange}
            onChange={handleRowsPerPageChange}
          />
          <GridPaginator
            pagesShown={pagination?.maxPagesShown}
            currentPage={currentActivePage}
            totalRows={data.length}
            rowsPerPage={currentRowsPerPage}
            onClick={handlePageChange}
          />
        </div>
      }
    </div>
  );
}
