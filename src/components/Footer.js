import React from 'react';

// Image Imports target="_blank"
import gitlogo from '../assets/images/git-logo.png';
import linkedIn from '../assets/images/linkedIn_logo.png';
import facebook from '../assets/images/facebook-logo.png';

const Footer = () => {
  return (
    <nav className='footer'>
      <p id='copy'>Copyright &copy;</p>
      <a target='_blank' href='https://github.com/dustinjack99'>
        <img id='git' src={gitlogo} />
      </a>
      <a target='_blank' href='https://www.linkedin.com/in/funnydustin/'>
        <img id='linkedin' src={linkedIn} />
      </a>
      <a target='_blank' href='https://www.facebook.com/dustin.guy.jackson'>
        <img id='facebook' src={facebook} />
      </a>
    </nav>
  );
};

export default Footer;
