import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import React from "react";
import profile from "../../assets/images/placeholder.jpg";

// Image / Asset Imports
import resume from "../../assets/resumes/Developer Resume.pdf";
import VirtualizedList from "./components/VirtualList";
import technologies from "./assetInfo.json";

const About = () => {
  function fadeIn(styleClass) {
    let li = document.querySelector(styleClass);
    li.classList.add("text-focus-in");
    li.style.visibility = "visible";
  }

  function picMajesty() {
    let pic = document.querySelector("#profile-pic");
    let li = document.querySelector(".Collapsible__contentInner");
    li.classList.add("pulsate-bck");
    pic.classList.add("glow");
  }

  function beauty(type) {
    let beauty =
      document.querySelector(".Collapsible__trigger.is-closed") ||
      document.querySelector(".Collapsible__trigger.is-open");

    if (beauty.textContent !== "so majestic...") {
      switch (type) {
        case "clear":
          beauty.textContent = "so majestic...";
          break;
        case "warning":
          beauty.textContent = "***click here for Beauty***";
          break;
        default:
          beauty.textContent = "click i dare you";
      }
    } else {
      beauty.textContent = "***click here for Beauty***";
    }
  }

  return (
    <div className="about-me">
      <div className="left-about">
        <div
          className="picDiv"
          onMouseEnter={() => beauty("warning")}
          onMouseOut={beauty}
          onClick={() => beauty("clear")}
        >
          <Accordion
            triggerStyle={{
              color: "whitesmoke",
              display: "block",
              cursor: "pointer",
              paddingBottom: "20px",
            }}
            onOpen={picMajesty}
          >
            <AccordionSummary>***click here for Beauty***</AccordionSummary>
            <AccordionDetails>
              <img alt="dustinjackson" id="profile-pic" src={profile} />
            </AccordionDetails>
          </Accordion>
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
        <div className="skills">
          <Accordion>
            <AccordionSummary>
              <h5 className="hover">Click Titles!</h5>
            </AccordionSummary>
            <AccordionDetails>
              <VirtualizedList technologies={technologies} />
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default About;
