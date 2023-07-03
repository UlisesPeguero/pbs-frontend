import React, { useState } from 'react';

function SimpleInput({
  name,
  type,
  classes,
  ...rest
}) {
  const inputClass = 'form-control ' + classes;
  return (
    <input id={name}
      name={name}
      type={type}
      className={inputClass}
      {...rest} />
  );
}

export default function Input({
  name,
  label,
  type = 'text',
  containerClasses = 'col-12',
  inputClasses = '',
  initialValue = '',
  ...rest }) {
  const _containerClass = '' + containerClasses;
  const _labelClass = 'form-label';

  return (
    <div className={_containerClass}>
      {
        label && <label htmlFor={name} className={_labelClass}>{label}</label>
      }
      <SimpleInput
        name={name}
        type={type}
        classes={inputClasses}
        {...rest} />
    </div>
  );
}

export { SimpleInput };
