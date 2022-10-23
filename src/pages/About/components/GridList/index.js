import {
  Stack,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import IconDesc from "../IconDesc";

import technologies from "../../assetInfo.json";

export default function GridList() {
  return (
    <Grid
      justifyContent="center"
      container
      spacing={4}
      columns={2}
      sx={{
        border: "1px solid blue",
        width: "90%",
        backgroundColor: "text",
        overflowY: "scroll",
        maxHeight: "30rem",
      }}
    >
      {technologies.fields.map((field, i) => (
        <Grid key={field.name + i}>
          <Accordion
            sx={{
              "& .Mui-expanded": {
                backgroundColor: "secondary.light",
              },
            }}
          >
            <AccordionSummary
              sx={{
                borderRadius: "5px",
                color: "text",
                backgroundColor: "secondary.dark",
                "& .Mui-expanded": {
                  backgroundColor: "secondary.light",
                },
              }}
            >
              {field.name}
            </AccordionSummary>
            <AccordionDetails>
              <Stack spacing={2}>
                {field.data.map((tech, i) => (
                  <IconDesc key={tech.name + i} tech={tech} idx={i} />
                ))}
              </Stack>
            </AccordionDetails>
          </Accordion>
        </Grid>
      ))}
    </Grid>
  );
}
