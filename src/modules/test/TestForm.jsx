import React from 'react';
import Input from '../../ui/form/Input';
import CheckBox from '../../ui/form/CheckBox';

export default function TestForm() {
  return (
    <form className="row g-3">
      <Input
        name='firstName'
        label='First name'
        containerClasses='col-md-6'
        placeholder='first name'
      />
      <Input
        name='lastName'
        label='Last name'
        containerClasses='col-md-6'
        placeholder='last name'
      />
      <Input
        name='address'
        label='Address'
        placeholder='123 Evergreen St'
      />
      <Input
        name='address2'
        label='Address (Additional)'
        placeholder='Apt A'
      />
      <CheckBox
        name='switchBox'
        label='Switch one'
        checked={true}
        isSwitch
      />
      <CheckBox
        name='regularBox'
        label='Regular one'
      />

    </form>
  );
}
