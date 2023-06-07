import React from 'react';
import CheckBoxInput from './_CheckBoxInput';

export default function Radio({
  containerClasses = 'col-12',
  options = [],
  name,
  selectedValue,
  inline,
  ...rest
}) {
  return (
    <div className={containerClasses}>
      {
        options.map((option, index) =>
          <CheckBoxInput
            containerClasses={inline ? 'form-check-inline' : null}
            key={name + index}
            type='radio'
            id={name + index}
            name={name}
            //checked={option.value === selectedValue}
            {...option}
          />
        )
      }
    </div>
  );
}
