import React, { useState } from "react";
import Button from "@mui/material/Button";
import CClogo from "../styles/CClogo.png";
import "../styles/mainstyle.css";
import { Link, useNavigate } from "react-router-dom";
import { Fade, Tooltip, Zoom } from "@mui/material";

function Landing() {
  const [showTooltip, setShowTooltip] = useState(false);

  const redirectQ1 = useNavigate();

  const handleStart = () => {
    redirectQ1("/Q1");
  };

  return (
    <div className="divbackgroundHousing ">
      <div className="StartButtonDiv">
        <Button
          variant="contained"
          className="StartButton"
          onClick={handleStart}
        >
          Start
        </Button>
        <Tooltip
          disableTouchListener
          TransitionComponent={Zoom}
          title={
            <span className="TooltipText">
              {" "}
              {[
                "Answer the questions and get to know your CO2 footprint with specific recommendations for the housing module.",
                <br></br>,
                <br></br>,
                "Average data from Germany will be used if you don’t know any answer.",
                <br></br>,
                <br></br>,
                "Go straight to the recommendations at any time with the results button.",
                <br></br>,
                <br></br>,
                "Please email any feedback to: info@changeclubs.global",
                <br></br>,
                <br></br>,
                "Have fun!",
              ]}
            </span>
          }
          open={showTooltip}
          onOpen={() => setShowTooltip(true)}
          onClose={() => setShowTooltip(false)}
        >
          <span
            variant="outlined"
            color="primary"
            onClick={() => setShowTooltip(!showTooltip)}
            className="TooltipButton"
            leaveDelay={15000}
          >
            <span className="material-symbols-outlined "> info</span>
          </span>
        </Tooltip>
      </div>
      <div className="CClogo" style={{ paddingTop: 150 }}>
        <Link
          to="https://changeclubs.global/"
          target={"_blank"}
          rel={"noreferrer"}
        >
          <img src={CClogo} alt="Change Clubs logo" height={50}></img>
        </Link>
        <p className="PoweredbyText">Powered</p>
      </div>
    </div>
  );
}

export default Landing;
