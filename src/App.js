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
      <main>
        <section>
          <SiteInstruction />
        </section>
        <section className='flex justify-around'>
          <StudySchedule />
        </section>
      </main>

    </>

  )
}
export default App;