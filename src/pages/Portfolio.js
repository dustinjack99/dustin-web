import React from 'react';
import Collapsible from 'react-collapsible';

// Image Imports
import teetimenat from '../assets/gifs/tee-time-nat-demo-min.gif';
import teetime from '../assets/gifs/tee-time-demo-min.gif';
import exOrb from '../assets/gifs/ex-orb-min.gif';
import scrabble from '../assets/gifs/scrabble-demo-min.gif';

const Portfolio = () => {
  function fadeInExOrb() {
    let li = document.querySelector('.ExOrb__contentInner');
    li.classList.add('text-focus-in');
    li.style.visibility = 'visible';
  }
  function fadeInTeeTime() {
    let li = document.querySelector('.TeeTime__contentInner');
    li.classList.add('text-focus-in');
    li.style.visibility = 'visible';
  }
  function fadeInScrabble() {
    let li = document.querySelector('.Scrabble__contentInner');
    li.classList.add('text-focus-in');
    li.style.visibility = 'visible';
  }

  return (
    <div className='portfolio'>
      <h5 className='hover'>Click Titles!</h5>
      <div className='portContainer'>
        <Collapsible
          trigger='ExOrb'
          classParentString='ExOrb'
          onOpen={fadeInExOrb}
          triggerStyle={{
            fontSize: '20px',
            display: 'block',
            color: '#4d89f8',
            cursor: 'pointer',
          }}
        >
          <div className='portAnchors'>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='http://www.ex-orb.com/'
            >
              Live Demo
            </a>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://github.com/dustinjack99/ex-orb'
            >
              Git Repo
            </a>
          </div>

          <img alt='exorbgif' className='portImagesWide' src={exOrb} />
        </Collapsible>
        <Collapsible
          trigger='Tee-Time'
          classParentString='TeeTime'
          onOpen={fadeInTeeTime}
          triggerStyle={{
            fontSize: '20px',
            display: 'block',
            color: '#4d89f8',
            cursor: 'pointer',
          }}
        >
          <div className='portAnchors'>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='http://www.teetimeproject.com/'
            >
              Live Demo
            </a>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://exp.host/@dustinjack99/tee-time-nat'
            >
              Molbile Demo
            </a>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://github.com/E-Bossler/tee-time'
            >
              Git Repo
            </a>
          </div>
          <div>
            <div>
              <h5>Web Client</h5>
            </div>
            <img alt='teetimegif' className='portImages' src={teetime} />
          </div>
          <div>
            <h5>Android App made with React Native</h5>
            <div>
              <img
                alt='teetimenatgif'
                className='portImagesWide'
                src={teetimenat}
              />
            </div>
          </div>
        </Collapsible>
        <Collapsible
          trigger='Scrabble Dabble'
          classParentString='Scrabble'
          onOpen={fadeInScrabble}
          triggerStyle={{
            fontSize: '20px',
            display: 'block',
            color: '#4d89f8',
            cursor: 'pointer',
          }}
        >
          <div className='portAnchors'>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='http://www.scrabble-dabble.com'
            >
              Live Demo
            </a>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://github.com/dustinjack99/ScrabbleDabble'
            >
              Git Repo
            </a>
          </div>
          <img alt='scrabblegif' className='portImages' src={scrabble} />
        </Collapsible>
      </div>
    </div>
  );
};

export default Portfolio;
