import React from "react";
import Button from "@mui/material/Button";
import CClogo from "../styles/CClogo.png";
import Q1 from "../Components/Q1";
import "../styles/mainstyle.css";
import { useNavigate } from "react-router-dom";

function Landing() {
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
      <div className="CClogo">
        <img src={CClogo} alt="Change Clubs logo" height={50}></img>
        <p className="PoweredbyText">Powered by</p>
      </div>
    </div>
  );
}

export default Landing;
