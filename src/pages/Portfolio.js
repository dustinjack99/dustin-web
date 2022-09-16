import React from "react";
import Collapsible from "react-collapsible";

// Image Imports
import exOrb from "../assets/gifs/ex-orb-min.gif";
import scrabble from "../assets/gifs/scrabble-demo-min.gif";

const Portfolio = () => {
  function fadeInExOrb() {
    let li = document.querySelector(".ExOrb__contentInner");
    li.classList.add("text-focus-in");
    li.style.visibility = "visible";
  }
  function fadeInScrabble() {
    let li = document.querySelector(".Scrabble__contentInner");
    li.classList.add("text-focus-in");
    li.style.visibility = "visible";
  }

  return (
    <div className="portfolio">
      <h5 className="hover">Current Projects!</h5>
      <div className="portContainer">
        {/* {TODO: need to redo exorb, finish migration to react, and get new NASA api working} */}
        {/* <Collapsible
          trigger="ExOrb"
          classParentString="ExOrb"
          onOpen={fadeInExOrb}
          triggerStyle={{
            fontSize: "20px",
            display: "block",
            color: "#4d89f8",
            cursor: "pointer",
          }}
        >
          <div className="portAnchors">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.ex-orb.com/"
            >
              Live Demo
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/dustinjack99/ex-orb"
            >
              Git Repo
            </a>
          </div>

          <img alt="exorbgif" className="portImage" src={exOrb} />
          <p>App that generates an interactive map of NASA's exoplanet API.</p>
        </Collapsible> */}
        <Collapsible
          trigger="SpellCraft"
          classParentString="Scrabble"
          onOpen={fadeInScrabble}
          triggerStyle={{
            fontSize: "20px",
            display: "block",
            color: "#4d89f8",
            cursor: "pointer",
          }}
        >
          <div className="portAnchors">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.spell-craft.net"
            >
              Live Demo
            </a>
          </div>
          <img alt="scrabblegif" className="portImages" src={scrabble} />
          <p>Speed spelling game that tests your skill with words.</p>
        </Collapsible>
      </div>
    </div>
  );
};

export default Portfolio;
