import React, { useContext, useEffect } from "react";
import "../../styles/energystyle.css";
import { Link, useNavigate } from "react-router-dom";
import { ResultsContext } from "../../Context/context";
import CClogo from "../../styles/CClogo.png";
import orangestar from "../../styles/Pictures/orangestar.png";
import { Button } from "@mui/material";

function FullRec9Energy() {
  const redirectPrev = useNavigate();
  const handlePrev = () => {
    redirectPrev(-1);
  };
  //   const { inputQ1Energy, setInputQ1Energy } = useContext(ResultsContext);

  const handleChange = (event) => {
    // console.log("inputQ1Energy", inputQ1Energy);
  };

  return (
    <div className="EnergyDivBackground EnergyMainFlex">
      <h1 className="AreaHeading">ENERGY</h1>
      <div className="EnergyCardFullReco">
        <div className="EnergyCardContentFullReco">
          <div className="EnergyCardTitleFullReco">
            Drink your morning coffee in a room naturally warmed by the sun
          </div>
          <div className="EnergyCardtextFullReco">
            <div>Enjoy!</div>
          </div>

          <div className="EnergyCardButtonsDivFullReco">
            <Link
              //   to=""
              className="EnergyFullRecoButtonCompleteDiv"
            >
              <div className="EnergyFullRecoCompleteButton">COMPLETE</div>
            </Link>
          </div>
        </div>
      </div>
      <div className="BackFullRecoDiv">
        <Button to="/EnergyResults" className="EnergyFullRecoButtonBackDiv">
          <div className="EnergyFullRecoBackButton" onClick={handlePrev}>
            Back
          </div>
        </Button>
      </div>
      <div className="ChangeClubsLogo CClogo">
        <Link
          to="https://changeclubs.global/"
          target={"_blank"}
          rel={"noreferrer"}
        >
          <img src={CClogo} alt="Change Clubs logo" height={50}></img>
        </Link>
      </div>
    </div>
  );
}

export default FullRec9Energy;
