import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

function Contact() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: 'ease-in-sine'
    });
  }, []);

  return (
    <div className='contact' id="contact" data-aos="zoom">
      <div className="contact-wrapper">
        <div className="contact-title">
          <h2>Contact</h2>
        </div>
        <div className="contact-info">
          <a href="mailto:jjschoi93@gmail.com">Let's Chat</a>
          <p>How do you like your coffee?</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;