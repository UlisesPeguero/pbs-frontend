import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Axios from '../common/AxiosWithCredentials';

export default function LoginPage() {

  const signinTest = async () => {
    try {
      const response = await Axios.post(
        '/auth/signin',
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
    signinTest();
  }, []);

  return (
    <h2 className='w-100 text-center'> <Link to={'/'}>Home</Link> (TODO)</h2>
  );
}
