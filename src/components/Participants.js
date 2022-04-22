import React, { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function Participants({ setParticipants }) {
  const [names, setNames] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(names);
    const participants = names.split(", ");
    setParticipants(participants);
  }

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
          value={names}
          onChange={event => setNames(event.target.value)}
        />
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </Box>
    </>
  );
}
