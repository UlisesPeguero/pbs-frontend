import React, { useState } from 'react';

export default function Input({
  name,
  label,
  type = 'text',
  containerClasses = 'col-12',
  inputClasses = '',
  initialValue = '',
  ...rest }) {
  const _containerClass = '' + containerClasses;
  const _inputClass = 'form-control' + inputClasses;
  const _labelClass = 'form-label';


  return (
    <div className={_containerClass}>
      {
        label && <label htmlFor={name} className={_labelClass}>{label}</label>
      }
      <input id={name}
        name={name}
        type={type}
        className={_inputClass}
        {...rest} />
    </div>
  );
}
