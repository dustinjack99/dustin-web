import React from 'react';
import { HashRouter, Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <HashRouter>
      <nav className='navHead'>
        <div className='name'>
          <Link to='/'>
            <h3>Dustin Jackson</h3>
            <h4>Developer</h4>
          </Link>
        </div>
        <ul className='header'>
          <li>
            <Link to='/about'>About Me</Link>
          </li>
          <li>
            <Link to='/portfolio'>Portfolio</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
        <div className='menu-btn'>
          <i
            className='fas fa-bars fa-2x'
            onClick={() => {
              let header = document.querySelector('.header');
              if (header.className === 'header') {
                header.className = 'header show';
              } else if (header.className === 'header show') {
                header.className = 'header';
              }
            }}
          ></i>
        </div>
      </nav>
    </HashRouter>
  );
};

export default Navbar;
