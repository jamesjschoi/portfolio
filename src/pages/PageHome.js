import React, { useState, useEffect } from 'react';
import Intro from '../components/Intro';
import About from '../components/About';
import Works from '../components/Works';
import Contact from '../components/Contact';

function PageHome() {
  // Start from the Top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className='homepage'>
      <section className="home-sections">
        <Intro />
        <About />
        <Works />
        <Contact />
      </section>
    </section>
  );
}

export default PageHome;