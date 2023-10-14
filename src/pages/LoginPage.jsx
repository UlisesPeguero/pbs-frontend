import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function LoginPage() {
  const navigate = useNavigate();

  const signinTest = async () => {
    try {
      const response = await axios.post(
        'http://localhost:8088/auth/signin',
        {
          "username": "admin",
          "password": "admin"
        });
      console.log(response.data);
    } catch (ex) {
      console.log(ex);
    }
  };

  useEffect(() => {
    //login

  }, []);

  return (
    <h2 className='w-100 text-center'> <a href='#' onClick={() => navigate('./')}>Home</a> (TODO)</h2>
  );
}
