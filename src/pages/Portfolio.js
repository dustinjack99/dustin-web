import React from 'react';
import Collapsible from 'react-collapsible';

// Image Imports
import teetimenat from '../assets/gifs/tee-time-nat-demo.gif';
import teetime from '../assets/gifs/tee-time-demo.gif';
import duckpals from '../assets/gifs/duck-demo.gif';
import scrabble from '../assets/gifs/scrabble-demo.gif';

const Portfolio = () => {
  function fadeInDuckPals() {
    let li = document.querySelector('.DuckPals__contentInner');
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
      <h5 className='hover'>Hover and Click!</h5>
      <div className='portContainer'>
        <Collapsible
          trigger='Tee-Time'
          classParentString='TeeTime'
          onOpen={fadeInTeeTime}
          triggerStyle={{ fontSize: '20px', display: 'block' }}
        >
          <div className='portAnchors'>
            <a href='https://dustinjack99.github.io/code-quiz/'>Tee Time!</a>
            <a href='https://github.com/dustinjack99/code-quiz'>Git Repo</a>
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
          triggerStyle={{ fontSize: '20px', display: 'block' }}
        >
          <div className='portAnchors'>
            <a href='https://dustinjack99.github.io/ScrabbleDabble/landing.html'>
              Scrabble Dabble!
            </a>
            <a href='https://github.com/dustinjack99/ScrabbleDabble'>
              Git Repo
            </a>
          </div>
          <img alt='scrabblegif' className='portImages' src={scrabble} />
        </Collapsible>
        <Collapsible
          trigger='DuckPals'
          classParentString='DuckPals'
          onOpen={fadeInDuckPals}
          triggerStyle={{ fontSize: '20px', display: 'block' }}
        >
          <div className='portAnchors'>
            <a href='https://duckpals.herokuapp.com'>DuckPals!</a>
            <a href='https://github.com/austenpturner/DuckPals'>Git Repo</a>
          </div>

          <img alt='duckpalsgif' className='portImagesWide' src={duckpals} />
        </Collapsible>
      </div>
    </div>
  );
};

export default Portfolio;
