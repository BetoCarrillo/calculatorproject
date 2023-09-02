import React, { useContext, useEffect } from "react";
import "../../styles/energystyle.css";
import { Link, useNavigate } from "react-router-dom";
import { ResultsContext } from "../../Context/context";
import CClogo from "../../styles/CClogo.png";
import orangestar from "../../styles/Pictures/orangestar.png";
import { Button } from "@mui/material";

function FullRec10Energy() {
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
            Upgrade to a renewable heating system
          </div>
          <div className="EnergyCardtextFullReco">
            <div>
              Upgrading to a renewable heating system has a lot of benefits,
              here are some compelling reasons to consider making the switch:
            </div>
            <div>
              <div className="EnergySingleRecoBulletDiv">
                <img src={orangestar} alt="YellowStar" height={25}></img>
                <div>Reduced carbon emissions and cleaner air</div>
              </div>
              <div className="EnergySingleRecoBulletDiv">
                <img src={orangestar} alt="YellowStar" height={25}></img>
                <div>
                  Lower bills and stable energy costs by energy efficiency.
                </div>
              </div>
              <div className="EnergySingleRecoBulletDiv">
                <img src={orangestar} alt="YellowStar" height={25}></img>
                <div>Increase property value</div>
              </div>
              <div className="EnergySingleRecoBulletDiv">
                <img src={orangestar} alt="YellowStar" height={25}></img>
                <div>Less reliance on fossil fuels.</div>
              </div>
              <div className="EnergySingleRecoBulletDiv">
                <img src={orangestar} alt="YellowStar" height={25}></img>
                <div>Government incentives in some cases.</div>
              </div>
              <div className="EnergySingleRecoBulletDiv">
                <img src={orangestar} alt="YellowStar" height={25}></img>
                <div>Supports sustainability goals.</div>
              </div>
              <div className="EnergySingleRecoBulletDiv">
                <img src={orangestar} alt="YellowStar" height={25}></img>
                <div>
                  Improved performance with latest technological advancements
                </div>
              </div>

              <div className="EnergySingleRecoBulletDiv">
                <img src={orangestar} alt="YellowStar" height={25}></img>
                <div>Reduced maintenance</div>
              </div>
              <div className="EnergySingleRecoBulletDiv">
                <img src={orangestar} alt="YellowStar" height={25}></img>
                <div>Sets a green example and positive impact</div>
              </div>
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

export default FullRec10Energy;
