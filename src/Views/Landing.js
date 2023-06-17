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

  //   const Instructions = `
  // Aliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus.
  // Praesent non nunc mollis, fermentum neque at, semper arcu.
  // Nullam eget est sed sem iaculis gravida eget vitae justo.
  // `;

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
        {/* <Tooltip TransitionComponent={Zoom} title={Instructions}>
          <span className="material-symbols-outlined InfoButton">info</span>
        </Tooltip> */}
        <span className="material-symbols-outlined InfoButton">info</span>
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
