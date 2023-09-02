import React, { useContext, useEffect } from "react";
import "../../styles/energystyle.css";
import { Link, useNavigate } from "react-router-dom";
import { ResultsContext } from "../../Context/context";
import CClogo from "../../styles/CClogo.png";
import orangestar from "../../styles/Pictures/orangestar.png";
import { Button } from "@mui/material";

function FullRec6Energy() {
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
            Reduce warm water usage and install efficient plumbing fixtures
          </div>
          <div className="EnergyCardtextFullReco">
            <div>
              Around 25% of the energy used in our homes is used to heat water
              for showering, bathing, washing and doing the dishes. Reducing the
              use of hot water will make a big difference in our lives and in
              the impact to the environment.
            </div>
            <div>
              Reducing the time of your shower and showering instead of bathing
              is another way to help conserve energy at home, since a short
              shower uses about half as much water as a bath which will also
              cost you less.
            </div>
            <div>
              Even better, if you install efficient plumbing fixtures and
              appliances, such as showerheads, taps and toilets you reduce water
              consumption and save even more energy.
            </div>
            <div>Here are some extra tips to lower hot water usage:</div>
            <div>
              <div className="EnergySingleRecoBulletDiv">
                <img src={orangestar} alt="YellowStar" height={25}></img>
                <div>
                  Try a 5:2 shower diet, which involves having five “normal”
                  length showers and two super-speedy ones throughout the week.
                </div>
              </div>
              <div className="EnergySingleRecoBulletDiv">
                <img src={orangestar} alt="YellowStar" height={25}></img>
                <div>
                  Soak your dishes before you wash them to avoid wasting hot
                  water. Do not leave the tap running.
                </div>
              </div>
              <div className="EnergySingleRecoBulletDiv">
                <img src={orangestar} alt="YellowStar" height={25}></img>
                <div>
                  Remember that soap and detergent already kill germs and
                  bacteria – so you truly only need hot water in a few cases.
                </div>
              </div>
              <div className="EnergySingleRecoBulletDiv">
                <img src={orangestar} alt="YellowStar" height={25}></img>
                <div>
                  When you need hot water in the sink, put the plug in or use a
                  bucket instead of letting the tap run.
                </div>
              </div>
              <div className="EnergySingleRecoBulletDiv">
                <img src={orangestar} alt="YellowStar" height={25}></img>
                <div>Try not to use small amounts of hot water frequently.</div>
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

export default FullRec6Energy;
