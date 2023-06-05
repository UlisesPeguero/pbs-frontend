import React from 'react';
import Input from '../../ui/form/Input';

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
        name='lasstName'
        label='Last name'
        containerClasses='col-md-6'
        placeholder='last name'
      />
    </form>
  );
}
