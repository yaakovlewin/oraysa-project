import React from 'react';
import './App.css';
import StudySchedule from './components/js/StudySchedule';
import Nav from './components/js/Nav';

function App() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main className='flex justify-around'>
        <StudySchedule />
      </main>
    </>

  )
}
export default App;