import { MobileStepper, IconButton, Typography } from "@mui/material";
import { KeyboardArrowRight, KeyboardArrowLeft } from "@mui/icons-material";

const StepWidget = ({ activeStep, setActiveStep, eventArr }) => {
  return (
    <MobileStepper
      steps={eventArr.length}
      sx={{
        border: "3px solid",
        borderColor: "primary.dark",
        borderBottom: "none",
        borderRadius: "5px",
        display: {
          xs: "none",
          sm: "flex",
        },
      }}
      position="static"
      activeStep={activeStep}
      nextButton={
        <IconButton
          color="primary"
          size="small"
          onClick={() => setActiveStep((prevActiveStep) => prevActiveStep + 1)}
          disabled={activeStep === eventArr.length - 1}
          sx={{
            display: {
              xs: "none",
              md: "flex",
            },
          }}
        >
          <Typography sx={{ display: { xs: "none", lg: "flex" } }}>
            Next
          </Typography>
          <KeyboardArrowRight />
        </IconButton>
      }
      backButton={
        <IconButton
          color="primary"
          size="small"
          onClick={() => setActiveStep((prevActiveStep) => prevActiveStep - 1)}
          disabled={activeStep === 0}
          sx={{
            display: {
              xs: "none",
              md: "flex",
            },
          }}
        >
          <KeyboardArrowLeft />
          <Typography sx={{ display: { xs: "none", lg: "flex" } }}>
            Back
          </Typography>
        </IconButton>
      }
    />
  );
};

export default StepWidget;
