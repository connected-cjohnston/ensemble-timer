import React, { useRef, useState } from "react";
import { Button, Grid, IconButton, Typography } from "@mui/material";
import ReplayIcon from "@mui/icons-material/Replay";
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
      <Grid item xs={12}>
        <Typography variant="body1" fontSize="8rem" textAlign="center">
          <Countdown date={Date.now() + 8 * SECONDS * MICROSECONDS} autoStart={false} ref={clockRef}
                     renderer={({ minutes, seconds }) => (<span>{minutes}:{zeroPad(seconds)}</span>)} />
          <IconButton aria-label="replay" size="large" onClick={handleStart}>
            <ReplayIcon fontSize="inherit" />
          </IconButton>
        </Typography>
      </Grid>
    </>
  );
}
