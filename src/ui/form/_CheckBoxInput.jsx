import React, { useState } from 'react';

export default function _CheckBoxInput({
  id,
  name,
  label,
  checked: _checked = false,
  containerClasses = '',
  inputClasses = '',
  labelClasses = '',
  ...rest
}) {
  const _containerClass = 'form-check ' + containerClasses;
  const _inputClass = 'form-check-input ' + inputClasses;
  const _labelClass = 'form-check-label ' + labelClasses;
  const _id = id ? id : name;
  const [checked, setChecked] = useState(_checked);

  const handleCheckStatus = () => setChecked(!checked);
  return (
    <>
      <div className={_containerClass}>
        <input
          id={_id}
          name={name}
          className={_inputClass}
          checked={checked}
          onChange={handleCheckStatus}
          {...rest}
        />
        <label htmlFor={_id} className={_labelClass}>{label}</label>
      </div>
    </>
  );
}
