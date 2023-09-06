import React from "react";
import "../styles/mainstyle.css";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import CClogo from "../styles/CClogo.png";

function Tryout() {
  const redirectQ1 = useNavigate();

  const handleStart = () => {
    redirectQ1("/");
  };
  return (
    <div className="MainDivBackground ViewDiv">
      <div>
        <Link
          to="https://changeclubs.global/"
          target={"_blank"}
          rel={"noreferrer"}
        >
          <img src={CClogo} alt="Change Clubs logo" height={200}></img>
        </Link>
      </div>
      <div className="StartCard change-color">
        <div className="TryOurContentDiv">TRY OUT OUR BETA APP</div>
      </div>
      <div className="StartButtonsDiv">
        <Button
          variant="contained"
          className="StartButton"
          onClick={handleStart}
        >
          TRY IT NOW
        </Button>
      </div>
    </div>
  );
}

export default Tryout;
