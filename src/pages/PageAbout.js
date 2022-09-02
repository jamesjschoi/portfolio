import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import {
  faHtml5,
  faCss3,
  faJsSquare,
  faReact,
  faSass,
  faBootstrap,
  faWordpress,
  faPhp,
  faGit,
  faGithubSquare,
  faJira,
  faSlack,
  faGulp,
  faNpm,
  faPython,
  faFigma,
  faCodepen,
  faJsfiddle,
} from '@fortawesome/free-brands-svg-icons';

function PageAbout() {
  // Start from the Top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className='page-about'>
      <div className='page-about-wrapper'>
        <div className='page-about-intro'>
          <ul className='ul'>
            <Link to='/'>
              <li className='first-li'>JsChoi Main</li>
            </Link>
            <li className='second-li'>
              <FontAwesomeIcon icon={faCaretRight} /> About{' '}
            </li>
          </ul>
          <h2>
            Connecting people from Web Applications
            <br />
            <span>Who am I?</span>
          </h2>
        </div>
        <div className='page-about-main'>
          <p>
            My name is James Choi and I am based in Vancouver, Canada. The
            moment I learned the basics of HTML, CSS and JavaScript, I
            immediately fell in love with how fun and meaningful it is to create
            an interactive domain for users that not only provides a robust
            styling and user-centric UI, but also convenience in their lives
            with its core functionality. I firmly believe that there is no end
            to learning in this field. I am constantly pushing myself to
            experiment with other frameworks and libraries and to hone out the
            fundamental of core programming skills like JavaScript.
          </p>
          <br />
          <p>
            With the Bachelor's Degree in Commerce and extensive work experience
            under my belt, I am confident in producing and publishing
            deliverables in a team environment. I worked with other developers
            in creating websites and web applications together and I realized
            the key metrics of succeeding in team collaboration are clear
            communication, detailed work division and debugging abilities. I
            like working in HTML, SCSS and React.js at the moment but I plan to
            explore more variations like TypeScript and Next.js in the near
            future.
          </p>
        </div>
        <div className='page-about-skills'>
          <h2>Skills</h2>
          <p>
            These are the tools that I have hands-on experience with in working
            on projects.
            <br />I can bring out a deliverable with these tools and I am
            capable of understanding and reading the developed source code.
          </p>
          <div className='skills-wrapper'>
            <ul>
              <li>
                <FontAwesomeIcon icon={faHtml5} />
                <span>HTML</span>
                <span className='type'>Front-End</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faCss3} />
                <span>CSS</span>
                <span className='type'>Front-End</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faJsSquare} />
                <span>JavaScript</span>
                <span className='type'>Front-End</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faReact} />
                <span>React</span>
                <span className='type'>Front-End</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faSass} />
                <span>Sass</span>
                <span className='type'>Front-End</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faBootstrap} />
                <span>BootStrap</span>
                <span className='type'>Front-End</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faWordpress} />
                <span>Wordpress</span>
                <span className='type'>CMS</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faPhp} />
                <span>PHP</span>
                <span className='type'>Back-End</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faPython} />
                <span>Python</span>
                <span className='type'>Back-End</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faNpm} />
                <span>Npm</span>
                <span className='type'>DevOps</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faGulp} />
                <span>Gulp</span>
                <span className='type'>DevOps</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faGit} />
                <span>Git</span>
                <span className='type'>Version Control</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faGithubSquare} />
                <span>GitHub</span>
                <span className='type'>Version Control</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faJira} />
                <span>Jira</span>
                <span className='type'>Project Management</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faSlack} />
                <span>Slack</span>
                <span className='type'>Communication</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faFigma} />
                <span>Figma</span>
                <span className='type'>Design</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faCodepen} />
                <span>Codepen</span>
                <span className='type'>Code Editor</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faJsfiddle} />
                <span>JsFiddle</span>
                <span className='type'>Code Editor</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PageAbout;
