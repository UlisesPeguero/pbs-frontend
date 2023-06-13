import React, { useState } from 'react';
import Input from '../../ui/form/Input';
import CheckBox from '../../ui/form/CheckBox';
import Radio from '../../ui/form/Radio';
import Select from '../../ui/form/Select';
import ToolBar from '../../ui/ToolBar';

export default function UsersForm() {
  const [btnSaveBusy, setBtnSaveBusy] = useState(false);
  const handleBtnSaveUpdate = () => setBtnSaveBusy(!btnSaveBusy);
  return (
    <form className="row g-3">
      <Select
        name='select'
        label='Select test'
        selectedValue={2}
        options={[
          { id: 1, description: 'This' },
          { id: 2, description: 'That' },
          { id: 3, description: 'Those' },
        ]}
      />
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
        label='Regular one "reverse"'
        reverse
      />
      <Radio
        name='testRadio'
        selectedValue='test2'
        inline
        options={[
          { value: 'test1', label: 'Test 1' },
          { value: 'test2', label: 'Test 2' },
          { value: 'test3', label: 'Test 3' },
        ]}
      />

      <ToolBar
        classes='w-100'
        gap={3}
        buttons={[
          {
            icon: 'Eraser',
            classes: 'btn-secondary me-auto',
            message: 'Reset form',
            type: 'reset',
          }, {
            text: 'Cancel',
            classes: 'btn-secondary',
            message: 'Cancel',
            onClick: handleBtnSaveUpdate
          }, {
            text: 'Save',
            icon: 'Save',
            message: 'Save all changes',
            busy: btnSaveBusy
          }
        ]}
      />

    </form>
  );
}
