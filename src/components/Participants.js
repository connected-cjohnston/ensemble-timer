import React, { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function Participants({ setParticipants }) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted...");
  }

  const [participantsField, setParticipantsField] = useState("");

  return (
    <>
      <Typography variant="h4">Participants</Typography>
      <Typography variant="p">
        Enter the participants aa a comma separated list
      </Typography>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          id="participants"
          label="Participants"
          variant="filled"
          fullWidth
          onChange={event => setParticipantsField(event.target.value)}
        />
        <Button variant="contained">Submit</Button>
      </Box>
    </>
  );
}
