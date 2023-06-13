import React from 'react';


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

function GridBody({ model, data }) {
  return (
    <tbody>
      {
        data.map((row, index) => <DataRow key={index} model={model} data={row} />)
      }
    </tbody>
  );
}

export default function Grid({
  model = [],
  data = [],
  classes = '',
  ...rest
}) {
  const _tableClass = 'table ' + classes;
  return (
    <table className={_tableClass} {...rest}>
      <GridHeader model={model} />
      <GridBody data={data} model={model} />
    </table>
  );
}
