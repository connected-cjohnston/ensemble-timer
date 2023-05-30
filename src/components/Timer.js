import React, { useRef } from "react";
import useSound from 'use-sound';
import switchSfx from '../sound/switch.mp3';
import { Grid, IconButton, Tooltip, Typography } from "@mui/material";
import ReplayIcon from "@mui/icons-material/Replay";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import Countdown, { zeroPad } from "react-countdown";

export default function Timer({ handleNext }) {
  const SECONDS = 1000;
  const MINUTES = 60 * SECONDS;

  const clockRef = useRef();

  const [play] = useSound(switchSfx);

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

  function signalCompletion() {
    play();
  }

  return (
    <>
      <Grid item xs={12}>
        <Typography variant="body1" fontSize="8rem" textAlign="center">
          <Countdown date={Date.now() + 8 * MINUTES}
                     ref={clockRef}
                     autoStart={false}
                     onComplete={signalCompletion}
                     renderer={({ minutes, seconds }) => (<span>{minutes}:{zeroPad(seconds)}</span>)}
          />
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1" textAlign="center" marginTop="-50px">
          <Tooltip title="Start timer without rotating roles" arrow>
            <IconButton aria-label="play" size="large" onClick={handlePlay}>
              <PlayArrowIcon fontSize="inherit" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Pause timer" arrow>
            <IconButton aria-label="pause" size="large" onClick={handlePause}>
              <PauseIcon fontSize="inherit" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Reset the timer and rotate participant roles" arrow>
            <IconButton aria-label="replay" size="large" onClick={handleStart}>
              <ReplayIcon fontSize="inherit" />
            </IconButton>
          </Tooltip>
        </Typography>
      </Grid>
    </>
  );
}
