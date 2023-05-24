import React from 'react';
import { PersonCircle } from 'react-bootstrap-icons';

export default function UserInformation(props) {
  const { name, profilePicture } = props.user || { name: 'Place Holder', profilePicture: null };
  return (
    <div className='d-flex align-items-center justify-content-end'>
      <span className='user-name mx-1'>{name}</span>
      <span className='d-none d-sm-inline-block mx-2'>
        {
          profilePicture ?
            <img src={profilePicture} alt="User's profile avatar" className='user-profile-picture img-thumbnail' />
            :
            <PersonCircle size={48} />
        }
      </span>
    </div>
  );
}
