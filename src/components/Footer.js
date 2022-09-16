import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  const getYear = () => {
    const d = new Date();
    return d.getFullYear();
  };

  return (
    <footer className='footer'>
      <p>
        Copyright &copy; {getYear()} James Choi. All Rights Reserved.
        <br />
        Made with React.js&nbsp;
        <span>
          <FontAwesomeIcon icon={faReact} />
        </span>
        .
      </p>
    </footer>
  );
}

export default Footer;
