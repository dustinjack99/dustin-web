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
          <li className='link'>
            <Link to='/about'>About Me</Link>
          </li>
          <li className='link'>
            <Link to='/portfolio'>Portfolio</Link>
          </li>
          <li className='link'>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
        <div className='menu-btn'>
          <i
            className='fas fa-bars fa-2x'
            onClick={() => {
              let header = document.querySelector('.header');
              let icon =
                document.querySelector('.fas.fa-bars.fa-2x') ||
                document.querySelector('.fas.fa-times.fa-2x');
              if (header.className === 'header') {
                icon.className = 'fas fa-times fa-2x';
                header.className = 'header show';
                header.addEventListener('click', () => {
                  header.className = 'header';
                  icon.className = 'fas fa-bars fa-2x';
                });
              } else if (header.className === 'header show') {
                header.className = 'header';
                icon.className = 'fas fa-bars fa-2x';
              }
            }}
          ></i>
        </div>
      </nav>
    </HashRouter>
  );
};

export default Navbar;
