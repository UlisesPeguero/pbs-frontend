import React, { useEffect, useState } from 'react';
import GridRowsPerPageSelector from './_GridRowsPerPageSelector';
import GridToolBar from './_GridToolBar';
import { TOOLBAR_ACTIONS as Toolbar } from './_GridToolBarActions';
import ToolBar from '../ToolBar';
import GridPaginator from './_GridPaginator';
import GridHeader from './_GridHeader';

const DEFAULT_ROWS_PER_PAGE = 20;

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

function filterOrShowAllData(data, filter, onTrue) {
  return [...data];
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
  toolbar: _toolbar,
  ...rest
}) {
  const _tableClass = 'table w-auto bg-white shadow ' + classes;
  const filteredModel = model.filter(col => !col.hidden);
  const [domReady, setDomReady] = useState(false);
  const [currentActivePage, setCurrentActivePage] = useState(currentPage);
  const [currentRowsPerPage, setCurrentRowsPerPage] = useState(pagination?.rowsPerPage || DEFAULT_ROWS_PER_PAGE);
  const [currentData, setCurrentData] = useState(data);
  const [toolbar, setToolbar] = useState(_toolbar);
  const [showPagination, setShowPagination] = useState(!!pagination);

  useEffect(() => { // wait for DOM to be ready for the toolbar
    setDomReady(true);
  }, []);

  const toggleButton = (target, newButton) => {
    let _toolbar = { ...toolbar };
    let indexTarget = _toolbar?.buttons.indexOf(target);
    console.log({ toolbar, target, newButton, indexTarget });
    if (indexTarget !== -1) {
      _toolbar.buttons[indexTarget] = newButton;
      setToolbar(_toolbar);
    }
  };
  // toolbar handler
  const handleToolBarActions = (action, value) => {
    switch (action) {
      case Toolbar.SEARCH:
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
      case Toolbar.REFRESH:
        if (localData) {
          setCurrentData(data);
          return;
        }
        break;
      case Toolbar.FILTER:
        toggleButton(action, Toolbar.SHOW_ALL);
        break;
      case Toolbar.SHOW_ALL:
        toggleButton(action, Toolbar.FILTER);
        break;
      case Toolbar.PAGINATION:
        toggleButton(action, Toolbar.TABLE);
        setShowPagination(true);
        break;
      case Toolbar.TABLE:
        toggleButton(action, Toolbar.PAGINATION);
        setShowPagination(false);
        break;
      default: //
    }
  };

  const handleRowsPerPageChange = value => {
    setCurrentRowsPerPage(value);
    setCurrentActivePage(1);

  };

  const handlePageChange = value => setCurrentActivePage(value);

  if (showPagination && toolbar.buttons.includes(Toolbar.PAGINATION))
    toggleButton(Toolbar.PAGINATION, Toolbar.TABLE);

  const handleOnSort = (name, state, sortFunction) => {
    console.log({ name, state, sortFunction });
  };

  return (
    <div className='vstack gap-3' style={{ height }}>
      {
        domReady && toolbar?.containerId &&
        <GridToolBar {...toolbar} onToolBarAction={handleToolBarActions} />
      }
      <div className="d-flex p-0 w-100 overflow-auto" style={{ backgroundColor: 'darkgray', }}>
        <table className={_tableClass} {...rest}>
          <GridHeader model={filteredModel} onSort={handleOnSort} />
          <GridBody
            data={showPagination
              ? getCurrentPageData(currentData, currentRowsPerPage, currentActivePage)
              : currentData}
            model={filteredModel}
            rowToolBar={rowToolBar}
            idName={idName}
          />
        </table>
      </div>
      {
        showPagination &&
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
