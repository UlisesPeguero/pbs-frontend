import React from 'react';
import Select from '../form/Select';

export default function GridRowsPerPageSelector({
  gridName,
  onChange,
  selectedValue,
  options = [10, 20, 30],
  label = 'Rows per page'
}) {
  return (
    <>
      <label htmlFor={gridName + 'RowPerPageSelect'}>{label}&nbsp;</label>
      <Select containerClasses=''
        selectedValue={selectedValue}
        options={options}
        onChange={onChange}
      />
    </>
  );
}
