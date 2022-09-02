import React from 'react';
import Typewriter from 'typewriter-effect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDownLong } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Intro() {
  return (
    <div className='intro' id="intro">
      <div className="intro-wrapper">
        <div className="heading-wrapper">
          <h1 className='intro-text'>
            Hello I'm&nbsp;
            <span className="highlight">James Choi</span>, front-end web developer.
            <br />
          </h1>
          <h2 className='intro-text-two'>
            I design and develop user-driven websites and web applications that are <span className='typewriter'><Typewriter
              options={{
                strings: ['interactive.', 'responsive.', 'accessible.'],
                autoStart: true,
                loop: true,
                wrapperClassName: 'underline',
              }}
            /></span>
          </h2>
          <div className='intro-btn-container'>
            <div className="intro-text-heading">
              <h2>Come find me at:</h2>
            </div>
            <div className="intro-btn-wrapper">
              <a href="https://www.linkedin.com/in/jchoi93/">LinkdeIn <FontAwesomeIcon icon={faLinkedin} /></a>
              <a href="https://github.com/jamesjschoi">GitHub <FontAwesomeIcon icon={faGithub} /></a>
            </div>
          </div>
        </div>
        <div className="scroll-arrow">
          <a className="arrow" href="#about">
            <FontAwesomeIcon icon={faArrowDownLong} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Intro;