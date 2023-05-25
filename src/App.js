import { Route, Routes } from 'react-router-dom';
import './App.css';
import AppBar from './home/header/AppBar';
import NavigationBar from './home/navigation/NavigationBar';
import Home from './modules/Home';
import Test from './modules/Test';
import BreadCrumbs from './home/BreadCrumbs';

function App() {
  return (
    <>
      <AppBar appTitle='PET BOARDING SERVICE' />
      <div className='d-flex'>
        <NavigationBar />
        <div className='d-flex flex-column w-100'>
          <BreadCrumbs module={{ name: 'HOME', path: '/' }} />
          <main className='content pt-1 px-4'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/test' element={<Test />} />
            </Routes>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
