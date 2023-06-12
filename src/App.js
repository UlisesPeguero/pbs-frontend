import Layout from './dashboard/Layout';
import './App.css';
import Home from './modules/home/Home';
import Test from './modules/test/Test';
import BreadCrumbs from './dashboard/BreadCrumbs';
import { useEffect, useState } from 'react';
import TestGrid from './modules/test/TestGrid';
import { RouterProvider } from 'react-router';
import router from './router';

function App() {
  return <RouterProvider router={router} />;
}

export default App;
