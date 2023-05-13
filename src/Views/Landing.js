import React from "react";
import Button from "@mui/material/Button";
import "../styles/mainstyle.css";
import { useNavigate } from "react-router-dom";

function landing() {
  const redirectQ1 = useNavigate();

  const handleStart = () => {
    redirectQ1("/Q1");
  };

  return (
    <div>
      <div className="StartButtonDiv">
        <Button
          variant="contained"
          className="StartButton"
          onClick={handleStart}
        >
          Start
        </Button>
      </div>
    </div>
  );
}

export default landing;
