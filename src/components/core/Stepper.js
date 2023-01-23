import * as React from "react";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

export default function Stepper({ activeStep, handleBack }) {
  const theme = useTheme();

  return (
    <MobileStepper
      variant='dots'
      steps={5}
      activeStep={activeStep}
      sx={{ width: "100%", position: "absolute", bottom: 0, backgroundColor: "unset" }}
      nextButton={
        <Button size='small' type='submit' disabled={activeStep === 4}>
          Next
          {theme.direction === "rtl" ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </Button>
      }
      backButton={
        <Button size='small' onClick={handleBack} disabled={activeStep === 0}>
          {theme.direction === "rtl" ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
          Back
        </Button>
      }
    />
  );
}
