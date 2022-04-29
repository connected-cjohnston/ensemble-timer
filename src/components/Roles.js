import React from "react";
import { Typography } from "@mui/material";

export default function Roles({ participants }) {
  return (
    <>
      <Typography variant="h4">Roles</Typography>
      <div>
        <Typography variant="body1">Navigator: {participants[0]}</Typography>
      </div>
      <div>
        <Typography variant="body1">Typist: {participants[1]}</Typography>
      </div>
      {participants.slice(2).map((p, index) => (
        <div key={index}>
          <Typography variant="body1">
            Co-Navigator: {participants[2 + index]}
          </Typography>
        </div>
      ))}
    </>
  );
}
