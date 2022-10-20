import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import React from "react";

// Image Imports
import scrabble from "../../assets/gifs/scrabble-demo-min.gif";

const Portfolio = () => {
  function fadeInScrabble() {
    let li = document.querySelector(".Scrabble__contentInner");
    li.classList.add("text-focus-in");
    li.style.visibility = "visible";
  }

  return (
    <div className="portfolio">
      <h5 className="hover">Current Projects!</h5>
      <div className="portContainer">
        <Accordion
          classParentString="Scrabble"
          onOpen={fadeInScrabble}
          triggerStyle={{
            fontSize: "20px",
            display: "block",
            color: "#4d89f8",
            cursor: "pointer",
          }}
        >
          <AccordionSummary>SpellCraft</AccordionSummary>
          <AccordionDetails>
            <div className="portAnchors">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://spell-craft.net"
              >
                Live Demo
              </a>
            </div>
            <img alt="scrabblegif" className="portImages" src={scrabble} />
            <p>Speed spelling game that tests your skill with words.</p>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default Portfolio;
