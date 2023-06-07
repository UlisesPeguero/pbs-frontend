import React, { useState } from 'react';

export default function CheckBoxInput({
  name,
  label,
  checked: _checked = false,
  isSwitch,
  inputClasses = '',
  labelClasses = '',
  ...rest
}) {
  const _containerCheckClass = 'form-check' + (isSwitch ? ' form-switch' : '');
  const _inputClass = 'form-check-input ' + inputClasses;
  const _labelClass = 'form-check-label ' + labelClasses;
  const [checked, setChecked] = useState(_checked);

  const handleCheckStatus = () => setChecked(!checked);
  return (
    <>
      <div className={_containerCheckClass}>
        <input
          id={name}
          name={name}
          className={_inputClass}
          type='checkbox'
          checked={checked}
          onChange={handleCheckStatus}
          role={isSwitch ? 'switch' : null}
          {...rest}
        />
        <label htmlFor={name} className={_labelClass}>{label}</label>
      </div>
    </>
  );
}
