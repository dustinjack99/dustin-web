import React from 'react';

// Image Imports
import teetimenat from '../assets/gifs/tee-time-nat-demo.gif';
import teetime from '../assets/gifs/tee-time-demo.gif';
import duckpals from '../assets/gifs/duck-demo.gif';
import scrabble from '../assets/gifs/scrabble-demo.gif';

const Portfolio = () => {
  return (
    <div className='portfolio'>
      <h2>Portfolio</h2>

      <h4>Projects:</h4>

      <div>
        <div className='portAnchors'>
          <a href='https://dustinjack99.github.io/code-quiz/'>Tee Time!</a>
          <a href='https://github.com/dustinjack99/code-quiz'>Git Repo</a>
        </div>
        <div>
          <div>
            <h5>Web Client</h5>
          </div>
          <img className='portImages' src={teetime} />
        </div>
        <div>
          <h5>Android App made with React Native</h5>
          <div>
            <img className='portImages' src={teetimenat} />
          </div>
        </div>
      </div>
      <div>
        <div className='portAnchors'>
          <a href='https://dustinjack99.github.io/ScrabbleDabble/landing.html'>
            Scrabble Dabble!
          </a>
          <a href='https://github.com/dustinjack99/ScrabbleDabble'>Git Repo</a>
        </div>
        <img className='portImagesWide' src={scrabble} />
      </div>
      <div>
        <div className='portAnchors'>
          <a href='https://duckpals.herokuapp.com'>DuckPals!</a>
          <a href='https://github.com/austenpturner/DuckPals'>Git Repo</a>{' '}
        </div>

        <img className='portImages' src={duckpals} />
      </div>
    </div>
  );
};

export default Portfolio;
