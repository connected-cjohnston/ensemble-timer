import React, { useRef, useState } from "react";
import { Button, IconButton, Typography } from "@mui/material";
import ReplayIcon from '@mui/icons-material/Replay';
import Countdown, { zeroPad } from "react-countdown";

export default function Timer({ handleNext }) {
  const MICROSECONDS = 1000;
  const SECONDS = 60;

  const clockRef = useRef();

  function handleStart() {
    clockRef.current.stop();
    handleNext();
    clockRef.current.start();
  }

  return (
    <>
      <Typography variant="h4">Timer</Typography>
      <Typography variant="h1">
        <Countdown date={Date.now() + 8 * SECONDS * MICROSECONDS} autoStart={false} ref={clockRef}
                   renderer={({ minutes, seconds }) => (<span>{minutes}:{zeroPad(seconds)}</span>)} />
      </Typography>
      <IconButton aria-label="replay" size="large">
        <ReplayIcon fontSize="inherit" />
      </IconButton>
      <Button variant="contained" onClick={handleStart}>Next</Button>
    </>
  );
}
