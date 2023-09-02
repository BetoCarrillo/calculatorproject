import React, { useContext, useEffect } from "react";
import "../../styles/energystyle.css";
import { Link, useNavigate } from "react-router-dom";
import { ResultsContext } from "../../Context/context";
import CClogo from "../../styles/CClogo.png";
import orangestar from "../../styles/Pictures/orangestar.png";
import { Button } from "@mui/material";

function FullRec3Energy() {
  //   const { inputQ1Energy, setInputQ1Energy } = useContext(ResultsContext);
  const redirectPrev = useNavigate();
  const handleChange = (event) => {
    // console.log("inputQ1Energy", inputQ1Energy);
  };

  const handlePrev = () => {
    redirectPrev(-1);
  };

  return (
    <div className="EnergyDivBackground EnergyMainFlex">
      <h1 className="AreaHeading">ENERGY</h1>
      <div className="EnergyCardFullReco">
        <div className="EnergyCardContentFullReco">
          <div className="EnergyCardTitleFullReco">
            Invest in energy-efficient appliances
          </div>
          <div className="EnergyCardtextFullReco">
            <div>
              Substitute and be more efficient! Exchanging certain old or broken
              appliances with more efficient ones is a way of saving energy.
              Making items and devices you need to use on a daily basis energy
              efficient will result in valuable energy savings.
            </div>
            <div>
              Energy efficient labelled appliances use a quarter less energy and
              a third less water than standard models and can save you more than
              $575 a year on energy bills – plus they are becoming more
              affordable every day. Some of the best energy efficient labels
              around the world are Energy Star —a voluntary program managed by
              the U.S. Environmental Protection Agency and the Department of
              Energy; and the EU Energy Label also gives information about the
              energy efficiency of a product.
            </div>
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

export default FullRec3Energy;
