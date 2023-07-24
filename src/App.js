import React from 'react';
import './App.css';
import OptionSelector from './components/js/OptionSelector';
import Nav from './components/js/Nav';

function App() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main className='flex justify-around'>
        <OptionSelector />
      </main>
    </>

  )
}
export default App;