import React from 'react';
import './App.css';
import StudySchedule from './components/js/StudySchedule';
import Nav from './components/js/Nav';
import SiteInstruction from './components/js/SiteInstruction';

function App() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <section>
        <SiteInstruction />
      </section>
      <main className='flex justify-around'>
        <StudySchedule />
      </main>
    </>

  )
}
export default App;