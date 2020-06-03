import React from 'react';
import profile from '../assets/images/placeholder.jpg';
import { HashRouter } from 'react-router-dom';

// Image Imports
import ts from '../assets/images/tslogo.png';
import jslogo from '../assets/images/jslogo.png';
import html from '../assets/images/html.png';
import node from '../assets/images/node.png';
import mongo from '../assets/images/mongo.png';
import express from '../assets/images/express.png';
import cmd from '../assets/images/cmd.png';
import css from '../assets/images/css.png';
import mysql from '../assets/images/mysql.png';
import postgres from '../assets/images/postgres.png';
import react from '../assets/images/react.png';
import sass from '../assets/images/sass.png';
import git from '../assets/images/git.png';
import resume from '../assets/resumes/DeveloperResume.pdf';
import Collapsible from 'react-collapsible';

const About = () => {
  function fadeInProgLang() {
    let li = document.querySelector('.ProgLang__contentInner');
    li.classList.add('text-focus-in');
    li.style.visibility = 'visible';
  }
  function fadeInWebLang() {
    let li = document.querySelector('.WebLang__contentInner');
    li.classList.add('text-focus-in');
    li.style.visibility = 'visible';
  }
  function fadeInTools() {
    let li = document.querySelector('.Tools__contentInner');
    li.classList.add('text-focus-in');
    li.style.visibility = 'visible';
  }
  function fadeInSkills() {
    let li = document.querySelector('.Skills__contentInner');
    li.classList.add('text-focus-in');
    li.style.visibility = 'visible';
  }

  function picMajesty() {
    let pic = document.querySelector('#profile-pic');
    let li = document.querySelector('.Collapsible__contentInner');
    li.classList.add('pulsate-bck');
    pic.classList.add('glow');
  }

  function beautyWarn() {
    let beauty =
      document.querySelector('.Collapsible__trigger.is-closed') ||
      document.querySelector('.Collapsible__trigger.is-open');

    if (beauty.textContent !== 'so majestic...') {
      beauty.textContent = 'click i dare you';
    }
  }

  function warnAway() {
    let beauty =
      document.querySelector('.Collapsible__trigger.is-closed') ||
      document.querySelector('.Collapsible__trigger.is-open');

    if (beauty.textContent !== 'so majestic...') {
      beauty.textContent = 'Click here for Beauty';
    }
  }

  function clickClear() {
    let beauty =
      document.querySelector('.Collapsible__trigger.is-closed') ||
      document.querySelector('.Collapsible__trigger.is-open');
    if (beauty.textContent !== 'so majestic...') {
      beauty.textContent = 'so majestic...';
    } else {
      beauty.textContent = 'Click here for Beauty';
    }
  }

  return (
    <>
      <div className='about-me'>
        <div className='left-about'>
          <div
            className='picDiv'
            onMouseEnter={beautyWarn}
            onMouseOut={warnAway}
            onClick={clickClear}
          >
            <Collapsible
              trigger='Click here for Beauty'
              triggerStyle={{ display: 'block' }}
              onOpen={picMajesty}
            >
              <img id='profile-pic' src={profile} />
            </Collapsible>
          </div>
          <div id='bio'>
            <p>
              Dustin is a developer familiar with agile development, leading
              creative teams, and has a deep love for learning new technologies
              and libraries. His biggest passions are tinkering, breaking, and
              fixing things.
            </p>
            <HashRouter>
              <div className='profLinks'>
                <a target='_blank' href={resume}>
                  Check out my Resume!
                </a>
                <br></br>
                <a href='mailto:dustin.guy.jackson@gmail.com'>
                  Shoot me an Email!
                </a>
              </div>
            </HashRouter>
          </div>
        </div>
        <p></p>

        <div className='skills'>
          <Collapsible
            classParentString='ProgLang'
            onOpen={fadeInProgLang}
            triggerStyle={{ fontSize: '20px', display: 'block' }}
            trigger='Languages:'
          >
            <ul>
              <li>
                Javascript <img className='wider' src={jslogo} />
              </li>
              <li>
                Typescript <img src={ts} />
              </li>
              <li>
                Shell scripting <img className='wider' src={cmd} />
              </li>
            </ul>
          </Collapsible>
          <Collapsible
            classParentString='WebLang'
            onOpen={fadeInWebLang}
            triggerStyle={{ fontSize: '20px', display: 'block' }}
            trigger='Web:'
          >
            <ul>
              <li>
                HTML5 <img src={html} />
              </li>
              <li>
                CSS
                <img src={css} />
              </li>
              <li>
                SASS
                <img src={sass} />
              </li>
            </ul>
          </Collapsible>
          <Collapsible
            classParentString='Tools'
            onOpen={fadeInTools}
            triggerStyle={{ fontSize: '20px', display: 'block' }}
            trigger='Tools:'
          >
            <ul>
              <li>
                MySQL <img className='wider' src={mysql} />
              </li>
              <li>
                Postgres <img className='wider' src={postgres} />
              </li>
              <li>
                NoSQL <img src={mongo} />
              </li>
              <li>
                Git <img src={git} />
              </li>
              <li>
                Node.js <img className='wider' src={node} />
              </li>
              <li>
                React / React Native <img className='wider' src={react} />
              </li>
              <li>
                Express <img src={express} />
              </li>
            </ul>
          </Collapsible>
          <Collapsible
            classParentString='Skills'
            onOpen={fadeInSkills}
            triggerStyle={{ fontSize: '20px', display: 'block' }}
            trigger='Skills:'
          >
            <ul className='textSkills'>
              <li className='skill'>Lead large, highly collaborative teams.</li>
              <li className='skill'>Professionally trained public speaker.</li>
              <li className='skill'>
                Working in demanding, fast-paced work environment.
              </li>
              <li className='skill'>Agile software development</li>
              <li className='skill'>Test Driven Development</li>
            </ul>
          </Collapsible>
        </div>
      </div>
    </>
  );
};

export default About;
