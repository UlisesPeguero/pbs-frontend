import React, { useState } from 'react';
import { Icon } from '../Icon';

function GridHeaderCell({
  name,
  type = 'string',
  classes = 'text-center',
  style = {},
  label,
  sortable,
  searchable,
  length,
  onSort,
  ...rest }
) {
  const [sortingState, setSortingState] = useState(null); // true:up, false:down, null:unsorted
  if (length)
    style.width = length + (typeof length === 'number' ? 'px' : '');

  let handleSortClick = null;
  let sortingIcon = null;
  if (sortable) {
    handleSortClick = () => {
      onSort(name, type, !sortingState, sortable);
      setSortingState(!sortingState);
    };
    sortingIcon = sortingState === null
      ? 'ChevronExpand'
      : sortingState
        ? 'ChevronUp'
        : 'ChevronDown';
  }

  return (
    <th

      className={classes}
      style={style}
      {...rest}
      onClick={handleSortClick}
    >
      {label}
      &nbsp;
      {
        sortable &&
        <Icon iconName={sortingIcon} />
      }
    </th>
  );
}

export default function GridHeader({ model, onSort }) {

  return (
    <thead>
      <tr>
        {
          model.map(column =>
            <GridHeaderCell
              key={column.name}
              onSort={onSort}
              {...column}
            />
          )
        }
      </tr>
    </thead>
  );
}