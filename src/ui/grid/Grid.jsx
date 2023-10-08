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
  return [...data].slice(start, (start) + rowsPerPage);
}

function filterAllData(data, onFilter) {
  return [...data].filter(row => {
    onFilter = typeof onFilter === 'function' ? onFilter : row => row?.active;
    return onFilter(row);
  });
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
  api,
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
    let indexTarget = _toolbar?.buttons
      .findIndex(button => typeof button === 'string' ? button === target : button?.name === target) || -1;
    if (indexTarget !== -1) {
      _toolbar.buttons[indexTarget] = newButton;
      setToolbar(_toolbar);
    }
  };
  // toolbar handler
  const handleToolBarActions = (action, value) => {
    console.log('Action: ', action, value);
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
        // const allButton = Toolbar.SHOW_ALL;
        const allButton = typeof value === 'function' ? { name: Toolbar.SHOW_ALL, filter: value } : Toolbar.SHOW_ALL;
        toggleButton(action, allButton);
        if (localData) {
          setCurrentData(filterAllData(data, value));
        }
        break;
      case Toolbar.SHOW_ALL:
        // const filterButton = Toolbar.FILTER;
        const filterButton = typeof value === 'function' ? { name: Toolbar.FILTER, filter: value } : Toolbar.FILTER;
        toggleButton(action, filterButton);
        if (localData) {
          setCurrentData(data);
        }
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
    setCurrentRowsPerPage(Number(value));
    setCurrentActivePage(1);

  };

  const handlePageChange = value => setCurrentActivePage(value);

  if (showPagination && toolbar.buttons.includes(Toolbar.PAGINATION))
    toggleButton(Toolbar.PAGINATION, Toolbar.TABLE);

  const handleOnSort = ({ name, type, sortFunction }, state) => {
    let sortedData = [...currentData];
    const getSortDirection = () => (!state ? -1 : 1);
    if (typeof sortFunction !== 'function') {
      switch (type) {
        case 'number':
          sortFunction = (a, b) => getSortDirection() * (a[name] - b[name]);
          break;
        case 'string':
        default:
          sortFunction = (a, b) => getSortDirection() * String(a[name]).localeCompare(b[name]);
      }
    } else {
      sortFunction = (a, b) => getSortDirection * sortFunction(a, b);
    }
    setCurrentData(sortedData.sort(sortFunction));
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
