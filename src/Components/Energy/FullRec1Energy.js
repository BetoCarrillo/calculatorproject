import React, { useContext, useEffect } from "react";
import "../../styles/energystyle.css";
import { Link, useNavigate } from "react-router-dom";
import { ResultsContext } from "../../Context/context";
import CClogo from "../../styles/CClogo.png";
import orangestar from "../../styles/Pictures/orangestar.png";
import { Button } from "@mui/material";

function FullRec1Energy() {
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
            Change to a clean energy provider
          </div>
          <div className="EnergyCardtextFullReco">
            <div>
              Energy is fundamental to our society and our economic and social
              development. Therefore, we must achieve a sustainable and
              needs-based energy supply to be climate-neutral.
            </div>
            <div>
              We can make a big difference by changing to a clean energy
              provider. Renewable energy sources, provided by sun, wind, water,
              waste, and heat from the Earth, are abundant and replenished by
              nature while emitting little to no greenhouse gases or pollutants
              into the air.
            </div>
            <div>
              Burning fossil fuels for electricity production corresponds to 25%
              of all greenhouse gas emissions, roughly half of which (total of
              12%) is for electricity used in buildings and homes. In 2020,
              about 29% of electricity worldwide came from renewable sources –
              you can increase that number by changing to a clean electricity
              provider (if your conditions allow for it).
            </div>
            <div>
              Depending on where you live, you may also be able to change from
              fossil fuel gas (methane or butane) to a biogas provider. Biogas
              is generated through a natural process in which microbes digest
              organic material in absence of oxygen. It can be used for cooking,
              heating, cooling, and electricity production, or upgraded and used
              for vehicle fuel or gas-grid injection.
            </div>
            <div>
              5 additional reasons why accelerating the transition to clean
              energy is beneficial:
            </div>
            <div>
              <div className="EnergySingleRecoBulletDiv">
                <img src={orangestar} alt="YellowStar" height={25}></img>
                <div>Energy sources are all around us.</div>
              </div>
              <div className="EnergySingleRecoBulletDiv">
                <img src={orangestar} alt="YellowStar" height={25}></img>
                <div>It is cheaper.</div>
              </div>
              <div className="EnergySingleRecoBulletDiv">
                <img src={orangestar} alt="YellowStar" height={25}></img>
                <div>It is healthier.</div>
              </div>
              <div className="EnergySingleRecoBulletDiv">
                <img src={orangestar} alt="YellowStar" height={25}></img>
                <div>It creates jobs.</div>
              </div>
              <div className="EnergySingleRecoBulletDiv">
                <img src={orangestar} alt="YellowStar" height={25}></img>
                <div>It makes economic sense.</div>
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

export default FullRec1Energy;
