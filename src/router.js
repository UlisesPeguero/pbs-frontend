import { createBrowserRouter } from 'react-router-dom';
import Layout from './dashboard/Layout';
import Home from './modules/home/Home';
import UsersGrid from './modules/users/UsersGrid';
import Users from './modules/users/Users';
import MainContainer from './dashboard/MainContent';
import NotFoundPage from './pages/NotFoundPage';
import LoginPage from './pages/LoginPage';

export default createBrowserRouter([
  {
    path: '/auth/login',
    element: <LoginPage />,
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
        handle: {
          rootLocationName: 'Home',
        },
      },
      {
        path: '/users',
        element: <MainContainer />,
        errorElement: <p>User's error </p>,
        handle: {
          rootLocationName: 'Users',
        },
        children: [
          {
            index: true,
            element: <UsersGrid />,
          },
          {
            path: 'add',
            element: <Users action='ADD' />,
            handle: {
              locationName: 'New',
            },
          },
        ],
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);
