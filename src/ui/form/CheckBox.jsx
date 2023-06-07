import React from 'react';
import CheckBoxInput from './_CheckBoxInput';

export default function CheckBox({
  containerClasses = 'col-12',
  ...rest
}) {
  const _containerClass = containerClasses;
  return (
    <div className={_containerClass}>
      <CheckBoxInput {...rest} />
    </div>
  );
}
