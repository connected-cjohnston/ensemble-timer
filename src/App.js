import React, { useState } from "react";
import { Container, Typography } from "@mui/material";
import "./App.css";
import Participants from "./components/Participants";
import Roles from "./components/Roles";
import Timer from "./components/Timer";

function App() {
  const [participants, setParticipants] = useState([]);

  return (
    <Container fixed>
      <div className="App">
        <Typography variant="h1">Ensemble Programming Timer</Typography>
        <Participants setParticipants={setParticipants} />
        <Roles participants={participants} />
        <Timer />
      </div>
      <pre>{JSON.stringify(participants)}</pre>
    </Container>
  );
}

export default App;
