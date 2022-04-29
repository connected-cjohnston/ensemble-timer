import React, { useState } from "react";
import { Container, Typography } from "@mui/material";
import "./App.css";
import Participants from "./components/Participants";
import Roles from "./components/Roles";
import Timer from "./components/Timer";

function App() {
  const [participants, setParticipants] = useState([]);

  function handleNext() {
    console.log('handleNext');
    const firstElement = participants.shift();
    const list = [...participants];
    list.push(firstElement);
    setParticipants(list);
  }

  return (
    <Container maxWidth="sm">
      <div className="App">
        <Typography variant="h3">EPT</Typography>
        <Participants setParticipants={setParticipants} />
        <Roles participants={participants} />
        <Timer handleNext={handleNext} />
      </div>
      <pre>{JSON.stringify(participants)}</pre>
    </Container>
  );
}

export default App;
