import React from 'react';
import './App.css';
import StudySchedule from './components/js/StudySchedule';
import Nav from './components/js/Nav';
import SiteInstruction from './components/js/SiteInstruction';
import Footer from './components/js/Footer';

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
      <footer className=' bg-gray-800' >
        <Footer />
      </footer>
    </>

  )
}
export default App;