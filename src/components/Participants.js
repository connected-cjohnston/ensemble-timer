import React, { useState } from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function Participants({ setParticipants, editParticipants, setEditParticipants }) {
  const [names, setNames] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const participants = names.split(", ");
    setParticipants(participants);

    setEditParticipants(false);
  }

  return (
    <>
      {editParticipants &&
        <Grid item xs={12}>
          <Box
            component="form"
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <Typography variant="body1">
              Enter the participants as a comma separated list
            </Typography>
            <TextField
              id="participants"
              label="Participants"
              variant="filled"
              fullWidth
              value={names}
              onChange={event => setNames(event.target.value)}
            />
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </Box>
        </Grid>
      }
    </>
  );
}
