import React from 'react';
import Input from '../../ui/form/Input';
import CheckBox from '../../ui/form/CheckBox';
import Radio from '../../ui/form/Radio';

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
      <Radio
        name='testRadio'
        //selectedValue='test2'
        inline
        options={[
          { value: 'test1', label: 'Test 1' },
          { value: 'test2', label: 'Test 2' },
          { value: 'test3', label: 'Test 3' },
        ]}
      />
    </form>
  );
}
