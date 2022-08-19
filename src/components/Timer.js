import React, { useRef } from "react";
import { Grid, IconButton, Typography } from "@mui/material";
import ReplayIcon from "@mui/icons-material/Replay";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import Countdown, { zeroPad } from "react-countdown";

export default function Timer({ handleNext }) {
  const MICROSECONDS = 1000;
  const SECONDS = 60;
  const MINUTES = SECONDS * MICROSECONDS;

  const clockRef = useRef();

  function handleStart() {
    clockRef.current.stop();
    handleNext();
    clockRef.current.start();
  }

  function handlePlay() {
    clockRef.current.start();
  }

  function handlePause() {
    clockRef.current.pause();
  }

  return (
    <>
      <Grid item xs={12}>
        <Typography variant="body1" fontSize="8rem" textAlign="center">
          <Countdown date={Date.now() + 8 * MINUTES}
                     ref={clockRef}
                     autoStart={false}
                     renderer={({ minutes, seconds }) => (<span>{minutes}:{zeroPad(seconds)}</span>)}
          />
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1" textAlign="center" marginTop="-50px">
          <IconButton aria-label="play" size="large" onClick={handlePlay}>
            <PlayArrowIcon fontSize="inherit" />
          </IconButton>
          <IconButton aria-label="pause" size="large" onClick={handlePause}>
            <PauseIcon fontSize="inherit" />
          </IconButton>
          <IconButton aria-label="replay" size="large" onClick={handleStart}>
            <ReplayIcon fontSize="inherit" />
          </IconButton>
        </Typography>
      </Grid>
    </>
  );
}
