import React from 'react';
import gitlogo from '../assets/images/git-logo.png';
import linkedIn from '../assets/images/linkedIn_logo.png';
import facebook from '../assets/images/facebook-logo.png';

const Footer = () => {
  return (
    <nav className='footer'>
      <p id='copy'>Copyright &copy;</p>
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://github.com/dustinjack99'
      >
        <img className='footImg' alt='gitlogo' id='git' src={gitlogo} />
      </a>
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://www.linkedin.com/in/funnydustin/'
      >
        <img
          className='footImg'
          alt='linkedinlogo'
          id='linkedin'
          src={linkedIn}
        />
      </a>
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://www.facebook.com/dustin.guy.jackson'
      >
        <img
          className='footImg'
          alt='facebooklogo'
          id='facebook'
          src={facebook}
        />
      </a>
    </nav>
  );
};

export default Footer;
