import React from "react";
import Button from "@mui/material/Button";
import CClogo from "../styles/CClogo.png";
import Q1 from "../Components/Q1";
import "../styles/mainstyle.css";
import { useNavigate } from "react-router-dom";
import { Fade, Tooltip, Zoom } from "@mui/material";

function Landing() {
  const redirectQ1 = useNavigate();

  const handleStart = () => {
    redirectQ1("/Q1");
  };

  const Instructions = `
  Answer the questions to get to know your CO2 footprint and specific recommendations for the Housing Module.Average data from your location will be used if you don’t know an answer. 

Go straight to the recommendations at any time with the end button. 

Have fun!
  `;

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
        <Tooltip
          TransitionComponent={Zoom}
          title={
            <span>
              {[
                "Answer the questions and get to know your CO2 footprint with specific recommendations for the housing module.",
                <br></br>,

                "Average data from your location will be used if you don’t know an answer.",
                <br></br>,

                "Go straight to the recommendations at any time with the end button. ",
                <br></br>,

                "Have fun!",
              ]}
            </span>
          }
        >
          <span className="material-symbols-outlined InfoButton">info</span>
        </Tooltip>
      </div>
      <div className="CClogo">
        <a
          href="https://changeclubs.global/"
          target={"_blank"}
          rel={"noreferrer"}
        >
          <img src={CClogo} alt="Change Clubs logo" height={50}></img>
        </a>
        <p className="PoweredbyText">Powered by</p>
      </div>
    </div>
  );
}

export default Landing;
