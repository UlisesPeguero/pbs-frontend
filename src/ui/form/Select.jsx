import React, { useState } from 'react';

export default function Select({
  name,
  selectedValue: _selectedValue,
  label,
  options = [],
  containerClasses = 'col-12',
  selectClasses = '',
  labelClasses = '',
  ...rest
}) {
  const [selectedValue, setSelectedValue] = useState(_selectedValue);

  const _containerClass = containerClasses;
  const _selectClass = 'form-select ' + selectClasses;
  const _labelClass = 'form-label ' + labelClasses;

  const handleSelectedOption = ({ target }) => setSelectedValue(target.value);
  return (
    <div className={_containerClass}>
      {label && <label htmlFor={name} className={_labelClass}>{label}</label>}
      <select
        name={name}
        id={name}
        aria-label={name}
        className={_selectClass}
        value={selectedValue}
        onChange={handleSelectedOption}
      >
        {
          options.map((option, index) => {
            const id = option.id ? option.id : option.value;
            return (
              <option key={id} value={id}>
                {option.description}
              </option>);
          })
        }
      </select>
    </div>
  );
}
