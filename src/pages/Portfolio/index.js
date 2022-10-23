import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Link,
  Typography,
} from "@mui/material";
import React from "react";

const Portfolio = () => {
  return (
    <Container>
      <Typography variant="h5">Current Projects!</Typography>

      <Accordion>
        <AccordionSummary>SpellCraft</AccordionSummary>
        <AccordionDetails>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://spell-craft.net"
          >
            Live Demo
          </Link>
          <Typography>
            Speed spelling game that tests your skill with words.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
};

export default Portfolio;
