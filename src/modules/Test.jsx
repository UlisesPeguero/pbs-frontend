import React from 'react';
import Button from '../ui/Button';
import { PeopleFill } from 'react-bootstrap-icons';

export default function Test() {
  return (
    <>
      <h1>Testing</h1>
      <Button>
        <PeopleFill size={24} />
        &nbsp;Meow
      </Button>
    </>
  );
}
