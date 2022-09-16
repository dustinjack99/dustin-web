import React from "react";
import profile from "../assets/images/placeholder.jpg";
import Collapsible from "react-collapsible";

// Image / Asset Imports
import angular from "../assets/images/angular.png";
import azure from "../assets/images/azure.png";
import docker from "../assets/images/docker.png";
import git from "../assets/images/git-real.png";
import jslogo from "../assets/images/jslogo.png";
import kotlin from "../assets/images/kotlin.png";
import ts from "../assets/images/tslogo.png";
import linux from "../assets/images/linux.png";
import mongo from "../assets/images/mongo.png";
import mysql from "../assets/images/mysql.png";
import node from "../assets/images/node.png";
import postgres from "../assets/images/postgres.png";
import react from "../assets/images/react.png";
import resume from "../assets/resumes/Developer Resume.pdf";
import sass from "../assets/images/sass.png";
import swift from "../assets/images/swift.png";

const About = () => {
  function fadeInProgLang() {
    let li = document.querySelector(".ProgLang__contentInner");
    li.classList.add("text-focus-in");
    li.style.visibility = "visible";
  }
  function fadeInWebLang() {
    let li = document.querySelector(".WebLang__contentInner");
    li.classList.add("text-focus-in");
    li.style.visibility = "visible";
  }
  function fadeInTools() {
    let li = document.querySelector(".Tools__contentInner");
    li.classList.add("text-focus-in");
    li.style.visibility = "visible";
  }
  function fadeInSkills() {
    let li = document.querySelector(".Skills__contentInner");
    li.classList.add("text-focus-in");
    li.style.visibility = "visible";
  }

  function picMajesty() {
    let pic = document.querySelector("#profile-pic");
    let li = document.querySelector(".Collapsible__contentInner");
    li.classList.add("pulsate-bck");
    pic.classList.add("glow");
  }

  function beautyWarn() {
    let beauty =
      document.querySelector(".Collapsible__trigger.is-closed") ||
      document.querySelector(".Collapsible__trigger.is-open");

    if (beauty.textContent !== "so majestic...") {
      beauty.textContent = "click i dare you";
    }
  }

  function warnAway() {
    let beauty =
      document.querySelector(".Collapsible__trigger.is-closed") ||
      document.querySelector(".Collapsible__trigger.is-open");

    if (beauty.textContent !== "so majestic...") {
      beauty.textContent = "***click here for Beauty***";
    }
  }

  function clickClear() {
    let beauty =
      document.querySelector(".Collapsible__trigger.is-closed") ||
      document.querySelector(".Collapsible__trigger.is-open");
    if (beauty.textContent !== "so majestic...") {
      beauty.textContent = "so majestic...";
    } else {
      beauty.textContent = "***click here for Beauty***";
    }
  }

  return (
    <>
      <div className="about-me">
        <div className="left-about">
          <div
            className="picDiv"
            onMouseEnter={beautyWarn}
            onMouseOut={warnAway}
            onClick={clickClear}
          >
            <Collapsible
              trigger="***click here for Beauty***"
              triggerStyle={{
                color: "whitesmoke",
                display: "block",
                cursor: "pointer",
                paddingBottom: "20px",
              }}
              onOpen={picMajesty}
            >
              <img alt="dustinjackson" id="profile-pic" src={profile} />
            </Collapsible>
          </div>
          <div id="bio">
            <p>
              Dustin is a developer familiar with agile development, leading
              creative teams, and has a deep love for learning new technologies
              and libraries. His biggest passions are tinkering, breaking, and
              fixing things.
            </p>
            <br></br>
            <p>
              He also loves hiking with his daughter, annoying his cats, and
              playing way too much Dwarf Fortress.
            </p>
          </div>
        </div>
        <p></p>

        <div className="skillbox">
          <h5 className="hover">Click Titles!</h5>
          <div className="skills">
            <Collapsible
              classParentString="ProgLang"
              onOpen={fadeInProgLang}
              triggerStyle={{
                fontSize: "20px",
                display: "block",
                color: "#4d89f8",
                cursor: "pointer",
              }}
              trigger="Languages:"
            >
              <ul>
                <li>
                  Javascript{" "}
                  <img alt="javascript" className="wider" src={jslogo} />
                </li>
                <li>
                  Typescript <img alt="typescript" src={ts} />
                </li>
                <li>
                  Swift <img alt="swift" src={swift} />
                </li>
                <li>
                  Kotlin <img alt="kotlin" className="wider" src={kotlin} />
                </li>
                <li>
                  Node.js <img alt="nodejs" className="wider" src={node} />
                </li>
              </ul>
            </Collapsible>
            <Collapsible
              classParentString="WebLang"
              onOpen={fadeInWebLang}
              triggerStyle={{
                fontSize: "20px",
                display: "block",
                color: "#4d89f8",
                cursor: "pointer",
              }}
              trigger="Web:"
            >
              <ul>
                <li>
                  React
                  <img alt="react" className="wider" src={react} />
                </li>
                <li>
                  Angular <img alt="angular" src={angular} />
                </li>
                <li>
                  SASS
                  <img alt="sass" src={sass} />
                </li>
                <li>
                  Docker
                  <img alt="docker" src={docker} />
                </li>
                <li>
                  Azure
                  <img alt="azure" src={azure} />
                </li>
              </ul>
            </Collapsible>
            <Collapsible
              classParentString="Tools"
              onOpen={fadeInTools}
              triggerStyle={{
                fontSize: "20px",
                display: "block",
                color: "#4d89f8",
                cursor: "pointer",
              }}
              trigger="Tools:"
            >
              <ul>
                <li>
                  Linux
                  <img alt="shellscript" className="wider" src={linux} />
                </li>
                <li>
                  Git <img alt="git" src={git} />
                </li>
                <li>
                  MySQL <img alt="mysql" className="wider" src={mysql} />
                </li>
                <li>
                  Postgres
                  <img alt="postgres" className="wider" src={postgres} />
                </li>
                <li>
                  NoSQL <img alt="mongodb" src={mongo} />
                </li>
              </ul>
            </Collapsible>
            <Collapsible
              classParentString="Skills"
              onOpen={fadeInSkills}
              triggerStyle={{
                fontSize: "20px",
                display: "block",
                color: "#4d89f8",
                cursor: "pointer",
              }}
              trigger="Skills:"
            >
              <ul className="textSkills">
                <li className="skill">
                  Lead large, highly collaborative teams.
                </li>
                <li className="skill">
                  Professionally trained public speaker.
                </li>
                <li className="skill">
                  Working in demanding, fast-paced work environment.
                </li>
                <li className="skill">Agile software development</li>
                <li className="skill">Test Driven Development</li>
              </ul>
            </Collapsible>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
