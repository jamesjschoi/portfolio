import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import movieMobile from '../assets/movie-galaxy-mobile.png';
import movieTablet from '../assets/movie-galaxy-tablet.png';
import movieDesktop from '../assets/movie-galaxy-desktop.png';
import hoMobile from '../assets/honey-mobile.png';
import hoTablet from '../assets/honey-tablet.png';
import hoDesktop from '../assets/honey-desktop.png';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Works() {
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);

  return (
    <div className='works' id='works' data-aos='zoom'>
      <h2 className='works-title'>Featured Projects</h2>
      <div className='works-wrapper'>
        <article className='work-item'>
          <div className='work-item-wrapper'>
            <div className='work'>
              <div className='work-image-container'>
                <img
                  className='img1'
                  src={movieDesktop}
                  loading='lazy'
                  alt='movie website on desktop device'
                />
                <img
                  src={movieMobile}
                  data-aos='fade-right'
                  loading='lazy'
                  alt='movie website on mobile device'
                />
                <img
                  src={movieTablet}
                  data-aos='fade-left'
                  loading='lazy'
                  alt='movie website on tablet device'
                />
              </div>
            </div>
            <div className='work-info'>
              <div className='work-info-title'>
                <h3>Movie Galaxy</h3>
              </div>
              <p className='work-detail'>
                A dynamic movie app to view, search and store your favourite
                movies!
              </p>
              <p className='work-tags'>#React #SCSS #API </p>
              <div className='work-buttons'>
                <a href='https://jschoi.ca/movie-galaxy'>Live Site</a>
                <Link to='/works/1/movie-galaxy'>Development</Link>
              </div>
            </div>
          </div>
        </article>
        <article className='work-item'>
          <div className='work-item-wrapper'>
            <div className='work'>
              <div className='work-image-container'>
                <img
                  className='img1'
                  src={hoDesktop}
                  loading='lazy'
                  alt='honey oat website on desktop device'
                />
                <img
                  src={hoMobile}
                  data-aos='fade-right'
                  loading='lazy'
                  alt='honey oat website on mobile device'
                />
                <img
                  src={hoTablet}
                  data-aos='fade-left'
                  loading='lazy'
                  alt='honey oat website on tablet device'
                />
              </div>
            </div>
            <div className='work-info'>
              <div className='work-info-title'>
                <h3>Honey Oat</h3>
              </div>
              <p className='work-detail'>
                An e-commerce website for a sandwich store, created by WordPress
                and WooCommerce.
              </p>
              <p className='work-tags'>#WordPress #SCSS #PHP #WooCommerce </p>
              <div className='work-buttons'>
                <a href='https://honeyoat.bcitwebdeveloper.ca/'>Live Site</a>
                <Link to='/works/0/honey-oat'>Development</Link>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default Works;
