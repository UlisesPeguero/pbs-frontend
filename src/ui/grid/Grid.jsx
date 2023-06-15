import React, { useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'react-bootstrap-icons';
import GridRowsPerPageSelector from './_GridRowsPerPageSelector';
import GridToolBar from './_GridToolBar';


function GridHeader({ model }) {
  return (
    <thead>
      <tr>
        {
          model.map(column => <th key={column.name} className='text-center'>{column.label}</th>)
        }
      </tr>
    </thead>
  );
}

function DataRow({ model, data }) {
  return (
    <tr>
      {
        model.map(({ name, classes = '' }) => <td key={name} className={classes}>{data[name]}</td>)
      }
    </tr>
  );
}

function GridBody({ model, data, idName }) {
  return (
    <tbody>
      {
        data.map((row, index) => <DataRow key={row[idName] || `row-${index}`} model={model} data={row} />)
      }
    </tbody>
  );
}

export default function Grid({
  name = '_grid',
  model = [],
  data = [],
  idName = 'id',
  classes = '',
  rowsPerPage = 20,
  labelRowsPerPageSelector,
  optionsRowsPerPageSelector,
  toolbarContainerId,
  ...rest
}) {
  const _tableClass = 'table ' + classes;
  const filteredModel = model.filter(col => !col.hidden);

  useEffect({}, []);

  return (
    <>
      {toolbarContainerId && <GridToolBar containerId={toolbarContainerId} />}
      <table className={_tableClass} {...rest}>
        <GridHeader model={filteredModel} />
        <GridBody data={data} model={filteredModel} idName={idName} />
      </table>
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
    </>
  );
}
