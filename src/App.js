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
      <footer className=' bg-neutral-700' >
        {/* site links */}
        <section className='flex justify-around p-7'>
          <a href='#' className='text-blue-500'>About</a>
          <a href='#' className='text-blue-500'>Contact</a>
          <a href='#' className='text-blue-500'>Privacy</a>
          <a href='#' className='text-blue-500'>Terms</a>
        </section>
        <p className='text-center text-gray-500 text-xs p-6'> &copy; 2021 Study Schedule</p>
        <section className='p-3'>
          <p className='text-center text-gray-500 text-xs'>Created by <a href='#' className='text-blue-500'>@Yanki</a></p>
          <p className='text-center text-gray-500 text-xs'>Powered by <a href='#' className='text-blue-500'>@react</a></p>
        </section>


      </footer>
    </>

  )
}
export default App;