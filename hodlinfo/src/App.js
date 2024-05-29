import React from 'react';

import NavBar from './components/NavBar';
import Header from './components/Header';
import Tabel from './components/Tabel';

function App() {
  return (
    <>
      <div className='bg-dark'>
        <NavBar/>
        <Header/>
        <Tabel/>
      </div>
    </>
  );
}

export default App;
