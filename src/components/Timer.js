import React from "react";
import { Button, Typography } from "@mui/material";
import Countdown from "react-countdown";

export default function Timer() {
  return (
    <>
      <Typography variant="h4">Timer</Typography>
      <Countdown date={Date.now() + 480000} />
      <Button variant="outlined">Prev</Button>
      <Button variant="contained">Next</Button>
    </>
  );
}
