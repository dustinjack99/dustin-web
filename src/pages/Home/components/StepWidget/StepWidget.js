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
      }}
      position="static"
      activeStep={activeStep}
      nextButton={
        <IconButton
          color="primary"
          size="small"
          onClick={() => setActiveStep((prevActiveStep) => prevActiveStep + 1)}
          disabled={activeStep === eventArr.length - 1}
        >
          Next
          <KeyboardArrowRight />
        </IconButton>
      }
      backButton={
        <IconButton
          color="primary"
          size="small"
          onClick={() => setActiveStep((prevActiveStep) => prevActiveStep - 1)}
          disabled={activeStep === 0}
        >
          <KeyboardArrowLeft />
          Back
        </IconButton>
      }
    />
  );
};

export default StepWidget;
