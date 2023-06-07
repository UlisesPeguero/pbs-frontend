import React from 'react';
import CheckBoxInput from './_CheckBoxInput';

export default function CheckBox({
  containerClasses = 'col-12',
  isSwitch,
  ...rest
}) {
  const switchProps = isSwitch ? { role: 'switch', containerClasses: 'form-switch' } : {};
  return (
    <div className={containerClasses}>
      <CheckBoxInput
        type='checkbox'
        {...switchProps}
        {...rest}
      />
    </div>
  );
}
