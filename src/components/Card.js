import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJsSquare, faReact, faWordpress } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import { Link } from 'react-router-dom';

function Card({ cardItem }) {

  return (
    <div className="card">

      {
        cardItem.map((i) => {
          return <div key={i.id} className="card-wrapper">
            <div className="card-container">
              {/* <Link to={`/works/${i.id}/${i.slug}`}> */}
              <div className="card-image" id={i.slug}>
                <header className="top-part">
                  <div className="subtop">
                    <div className="code-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M414.8 40.79L286.8 488.8C281.9 505.8 264.2 515.6 247.2 510.8C230.2 505.9 220.4 488.2 225.2 471.2L353.2 23.21C358.1 6.216 375.8-3.624 392.8 1.232C409.8 6.087 419.6 23.8 414.8 40.79H414.8zM518.6 121.4L630.6 233.4C643.1 245.9 643.1 266.1 630.6 278.6L518.6 390.6C506.1 403.1 485.9 403.1 473.4 390.6C460.9 378.1 460.9 357.9 473.4 345.4L562.7 256L473.4 166.6C460.9 154.1 460.9 133.9 473.4 121.4C485.9 108.9 506.1 108.9 518.6 121.4V121.4zM166.6 166.6L77.25 256L166.6 345.4C179.1 357.9 179.1 378.1 166.6 390.6C154.1 403.1 133.9 403.1 121.4 390.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4L121.4 121.4C133.9 108.9 154.1 108.9 166.6 121.4C179.1 133.9 179.1 154.1 166.6 166.6V166.6z" /></svg>
                    </div>
                    <div className="code-icon-two">
                      {/* {(i.main === "WordPress") ? <FontAwesomeIcon icon={faWordpress} /> : (i.main === "React.js") ? <FontAwesomeIcon icon={faReact} /> : <FontAwesomeIcon icon={faJs} />} */}
                      {(() => {
                        if (i.main === "WordPress") {
                          return (<FontAwesomeIcon icon={faWordpress} />);
                        } else if (i.main === "React.js") {
                          return (<FontAwesomeIcon icon={faReact} />);
                        } else if (i.main === "JavaScript") {
                          return (<FontAwesomeIcon icon={faJsSquare} />);
                        }
                      })()}
                    </div>
                  </div>
                  <div className="middle-part">
                    <Link to={`/works/${i.id}/${i.slug}`}><h2>{i.name}</h2></Link>
                    {/* <p>{i.description}</p> */}
                    <p>{i.description}</p>
                  </div>
                </header>
                <footer className="bottom-part">
                  <p>Category: {i.category}</p>
                  <div className='lists'>
                    {i.tags.map((t, id) => {
                      return <li key={id}>#{t}</li>;
                    })}
                  </div>
                  <div className="bottom-btn">
                    {(() => {
                      if (i.id === 0) {
                        return (
                          <>
                            <a href='https://github.com/jamesjschoi'>GitHub</a>
                            <a href="https://jschoi.ca/honeyoat">Live Site</a>
                          </>);
                      } else if (i.id === 1) {
                        return (
                          <>
                            <a href="https://github.com/jamesjschoi/movie-galaxy">GitHub</a>
                            <a href="https://jschoi.ca/movie-galaxy">Live Site</a>
                          </>
                        );
                      } else if (i.id === 2) {
                        return (
                          <>
                            <a href="https://github.com/jamesjschoi/">GitHub</a>
                            <a href="https://jschoi.ca">Live Site</a>
                          </>
                        );
                      } else if (i.id === 3) {
                        return (
                          <>
                            <a href="https://github.com/jamesjschoi/weather-app">GitHub</a>
                            <a href="https://jschoi.ca/weather-app">Live Site</a>
                          </>
                        );
                      } else if (i.id === 4) {
                        return (
                          <>
                            <a href="https://github.com/jamesjschoi/dropdown-navigation">GitHub</a>
                            <a href="https://jschoi.ca/fm-challenge-one/index.html">Live Site</a>
                          </>
                        );
                      }
                    })()}
                  </div>
                </footer>
              </div>
            </div>
          </div>;
        })
      }
    </div>
  );
}

export default Card;