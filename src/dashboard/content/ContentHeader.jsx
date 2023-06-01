import React from 'react';
import { Navigate } from 'react-router-dom';
import { BoxArrowInLeft } from 'react-bootstrap-icons';
import Button from '../../ui/Button';

const BackButton = function ({ backButtonTo, value, classes = 'btn-secondary' }) {
  return <Button classes={classes} onClick={() => Navigate(backButtonTo)}>
    {
      backButtonTo === -1
        ? <BoxArrowInLeft size={24} />
        : value
    }
  </Button>;
};

export default function ContentHeader({
  backButton = true,
  backButtonTo = -1,
  title = ''
}) {

  return (
    <div className="d-flex align-items-center col-12 border-bottom pb-2 mb-3">
      {
        backButton && typeof backButton === 'boolean' && <BackButton backButtonTo={backButtonTo} />
      }
      {
        backButton && typeof backButton !== 'boolean' && <BackButton backButtonTo={backButtonTo} value={backButton} />
      }
      <span className='fw-semibold px-2'>{title}</span>
    </div>
  );
}
