import React, { useContext, useEffect } from "react";
import "../../styles/energystyle.css";
import { Link, useNavigate } from "react-router-dom";
import { ResultsContext } from "../../Context/context";
import CClogo from "../../styles/CClogo.png";
import orangestar from "../../styles/Pictures/orangestar.png";
import { Button } from "@mui/material";

function FullRec4Energy() {
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
          <div className="EnergyCardTitleFullReco">Be energy aware</div>
          <div className="EnergyCardtextFullReco">
            <div>
              Being energy-aware means contributing to climate protection and
              saving money at the same time. Here are more simple steps to
              integrate energy-aware habits in your daily life.
            </div>
            <div>
              <div className="EnergySingleRecoBulletDiv">
                <img src={orangestar} alt="YellowStar" height={25}></img>
                <div>
                  {" "}
                  <span style={{ fontWeight: "bold" }}>
                    {" "}
                    Turn off the lights
                  </span>{" "}
                  when it is bright enough or when you leave the room.
                </div>
              </div>
              <div className="EnergySingleRecoBulletDiv">
                <img src={orangestar} alt="YellowStar" height={25}></img>
                <div>
                  {" "}
                  <span style={{ fontWeight: "bold" }}>
                    {" "}
                    Turn off appliances that you are not using.{" "}
                  </span>
                  The notion that computers consume large amounts of energy when
                  starting up is a myth, same as that constant start-ups damage
                  computer components. It is much more cost-effective to shut
                  down the computer and will also reduce the wear on your
                  system.
                </div>
              </div>
            </div>

            <div>
              To reduce energy usage, make sure these devices are completely
              unplugged and not connected to a power source when not in use.
              Appliances such as televisions, stereos, computers, and more draw
              energy from the power grid when plugged into a wall even when they
              are off.
            </div>
          </div>
          <div className="ExtraTipDiv">
            <div className="ExtraTipIconDiv">
              <span class="material-symbols-outlined ExtraTipIcon ">
                campaign
              </span>{" "}
            </div>
            <div>
              <span style={{ fontWeight: "bold" }}>Extra tip: </span> You can
              connect several appliances to a power strip with a switch to
              disconnect them all at the same time.
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
      <div className="ExtraTipBackButton">
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

export default FullRec4Energy;
