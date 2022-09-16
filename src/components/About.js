import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import profile from '../assets/profile-picture.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faLocationDot,
  faEnvelope,
  faGraduationCap,
} from '@fortawesome/free-solid-svg-icons';
import {
  faLinkedin,
  faGithubSquare,
  faJsSquare,
  faReact,
  faSass,
} from '@fortawesome/free-brands-svg-icons';
import Aos from 'aos';
import 'aos/dist/aos.css';

function About() {
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);

  return (
    <div className='about' id='about' data-aos='zoom'>
      <div className='about-wrapper'>
        <div className='about-title'>
          <h2 id='about-title'>Little About Myself</h2>
        </div>
        <div className='about-image'>
          <div className='about-image-wrapper'>
            <img src={profile} alt='profile' />
          </div>
        </div>
        <div className='about-info-wrapper'>
          <div className='about-info'>
            <div className='info-wrapper'>
              <div className='info-card'>
                <div className='about-icon'>
                  <FontAwesomeIcon icon={faUser} />
                </div>
                <div className='basic-info'>
                  <p className='info-title'>Name</p>
                  <p className='info-info'>James Choi</p>
                </div>
              </div>
            </div>
            <div className='info-wrapper'>
              <div className='info-card'>
                <div className='about-icon'>
                  <FontAwesomeIcon icon={faLocationDot} />
                </div>
                <div className='basic-info'>
                  <p className='info-title'>Based in</p>
                  <p className='info-info'>Vancouver, Canada</p>
                </div>
              </div>
            </div>
            <div className='info-wrapper'>
              <div className='info-card'>
                <div className='about-icon'>
                  <FontAwesomeIcon icon={faGraduationCap} />
                </div>
                <div className='basic-info'>
                  <p className='info-title'>Education</p>
                  <p className='info-info'>BCIT/ Ryerson</p>
                </div>
              </div>
            </div>
            <div className='info-wrapper'>
              <div className='info-card'>
                <div className='about-icon'>
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div className='basic-info'>
                  <p className='info-title'>Email</p>
                  <p className='info-info'>jjschoi93@gmail.com</p>
                </div>
              </div>
            </div>
            <div className='info-wrapper'>
              <div className='info-card'>
                <div className='about-icon'>
                  <FontAwesomeIcon icon={faGithubSquare} />
                </div>
                <div className='basic-info'>
                  <p className='info-title'>GitHub</p>
                  <a
                    href='https://linkedin.com/in/jchoi93'
                    className='info-info'
                  >
                    /jamesjschoi
                  </a>
                </div>
              </div>
            </div>
            <div className='info-wrapper'>
              <div className='info-card'>
                <div className='about-icon'>
                  <FontAwesomeIcon icon={faLinkedin} />
                </div>
                <div className='basic-info'>
                  <p className='info-title'>LinkedIn</p>
                  <a
                    href='https://linkedin.com/in/jchoi93'
                    className='info-info'
                  >
                    in/jchoi93
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='about-info-detail'>
          <div className='about-detail-text'>
            <p>
              I love bringing concepts to life through code. With the
              ever-increasing number of different device users in the world, I
              prioritize creating responsive web applications with mobile-first
              approach in mind. Some of my favourite{' '}
              <span className='decoration'>stacks</span> are as below!
            </p>
          </div>
          <div className='stacks'>
            <FontAwesomeIcon icon={faJsSquare} />
            <FontAwesomeIcon icon={faReact} />
            <FontAwesomeIcon icon={faSass} />
          </div>
        </div>
        <div className='info-cta'>
          <Link to='/about'>
            <div className='cta-button'>More About Me!</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
