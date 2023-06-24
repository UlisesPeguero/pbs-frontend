import React, { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'react-bootstrap-icons';
import GridRowsPerPageSelector from './_GridRowsPerPageSelector';
import GridToolBar from './_GridToolBar';
import { TOOLBAR_ACTIONS as Toolbar } from './_GridToolBarActions';
import ToolBar from '../ToolBar';

function GridHeader({ model }) {
  return (
    <thead>
      <tr>
        {
          model.map(column => {
            const style = { ...column.style } || {};
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
  const newToolBar = rowToolBar.map(({ onClick, ...rest }) => ({ ...rest, onClick: () => onClick(data) }));
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

export default function Grid({
  name = '_grid',
  localData = true,
  model = [],
  data: _data = [],
  idName = 'id',
  classes = '',
  rowsPerPage = 20,
  height = '20vh',
  rowToolBar = {},
  labelRowsPerPageSelector,
  optionsRowsPerPageSelector,
  toolbar,
  ...rest
}) {
  const _tableClass = 'table w-auto bg-white shadow ' + classes;
  const filteredModel = model.filter(col => !col.hidden);
  const [domReady, setDomReady] = useState(false);
  const [data, setData] = useState(_data);

  useEffect(() => { // wait for DOM to be ready for the toolbar
    setDomReady(true);
  }, []);

  const searchableColumns = model.map(column => column.searchable);
  // toolbar handler
  const handleToolBarActions = (action, value) => {
    switch (action) {
      case Toolbar.SEARCH: console.log('S', action, value);
        if (localData) {
          // TODO: Filter local data searching thru the searchable fields
          setData(searchAndFilterLocalData(data, value, searchableColumns));
        }
        break;
      case Toolbar.REFRESH: console.log('R', action, value);
        break;
      case Toolbar.FILTER: console.log('F', action, value);
        break;
      default: //
    }
  };

  return (
    <div className='vstack gap-3' style={{ height }}>
      {
        domReady && toolbar?.containerId &&
        <GridToolBar {...toolbar} onToolBarAction={handleToolBarActions} />
      }
      <div className="d-flex p-0 w-100 bg-secondary overflow-auto">
        <table className={_tableClass} {...rest}>
          <GridHeader model={filteredModel} />
          <GridBody data={data} model={filteredModel} rowToolBar={rowToolBar} idName={idName} />
        </table>
      </div>
      <div className='d-flex align-items-center'>
        <GridRowsPerPageSelector
          gridName={name}
          selectedValue={rowsPerPage}
          label={labelRowsPerPageSelector}
          options={optionsRowsPerPageSelector}
          onChange={value => console.log(value)}
        />
        <nav aria-label="Page navigation example" className='ms-auto'>
          <ul className="pagination mb-0">
            <li className="page-item"><button className="page-link"><ArrowLeft /></button></li>
            <li className="page-item"><button className="page-link">1</button></li>
            <li className="page-item"><button className="page-link">2</button></li>
            <li className="page-item"><button className="page-link">3</button></li>
            <li className="page-item"><button className="page-link"><ArrowRight /></button></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
