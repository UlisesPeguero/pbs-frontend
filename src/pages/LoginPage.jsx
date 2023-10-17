import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
//import Axios from '../common/AxiosWithCredentials';
import axios from 'axios';

export default function LoginPage() {

  const signinTest = async () => {
    try {
      const response = await axios.post(
        'http://localhost:8088/api/auth/signin',
        {
          "username": "admin",
          "password": "admin"
        }, {
        withCredentials: true
      });
      console.log(response.data);
    } catch (ex) {
      console.log(ex);
    }
  };

  useEffect(() => {
    //login
    signinTest();
  }, []);

  return (
    <h2 className='w-100 text-center'> <Link to={'/'}>Home</Link> (TODO)</h2>
  );
}
