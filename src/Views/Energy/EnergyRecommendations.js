import React, { useContext, useState } from "react";
import "../../styles/energystyle.css";
import { Link, useNavigate } from "react-router-dom";
import { ResultsContext } from "../../Context/context";
import CClogo from "../../styles/CClogo.png";
import RecommendationsResultsEnergy from "../../Components/Energy/RecommendationsResultsEnergy";
import FootprintResultsEnergy from "../../Components/Energy/FootprintResultsEnergy";
import AnswersEnergy from "../../Components/Energy/AnswersEnergy";
import { Button } from "@mui/material";
import RecEnergy1 from "../../Components/Energy/Rec1Energy";
import RecEnergy2 from "../../Components/Energy/Rec2Energy";
import RecEnergy3 from "../../Components/Energy/Rec3Energy";
import RecEnergy4 from "../../Components/Energy/Rec4Energy";
import RecEnergy5 from "../../Components/Energy/Rec5Energy";
import RecEnergy6 from "../../Components/Energy/Rec6Energy";
import RecEnergy7 from "../../Components/Energy/Rec7Energy";
import RecEnergy8 from "../../Components/Energy/Rec8Energy";
import RecEnergy9 from "../../Components/Energy/Rec9Energy";
import RecEnergy10 from "../../Components/Energy/Rec10Energy";

function EnergyRecommendations() {
  // const { inputQ1Energy, setInputQ1Energy, } = useContext(ResultsContext);
  const [BI, setBI] = useState();
  const [ETD, setETD] = useState();
  const [FT, setFT] = useState();
  const [ALL, setALL] = useState(true);
  const redirectSummary = useNavigate();

  const handleStart = () => {
    redirectSummary("/EnergyResults");
  };

  const handleChange = (event) => {
    //   let valueQ2Energy = event.target.id;
    //   setInputQ2Energy(valueQ2Energy);
    // console.log("inputQ2Energy", inputQ2Energy);
  };

  const showBI = (event) => {
    setALL(false);
    setFT(false);
    setETD(false);
    setBI(true);
  };

  const showETD = (event) => {
    setALL(false);
    setFT(false);
    setBI(false);
    setETD(true);
  };

  const showFT = (event) => {
    setALL(false);
    setBI(false);
    setETD(false);
    setFT(true);
  };

  const showALL = (event) => {
    setBI(false);
    setETD(false);
    setFT(false);
    setALL(true);
  };

  return (
    <div className="EnergyDivBackground EnergyMainFlex">
      <h1 className="AreaHeading">ENERGY</h1>
      <div className="RecommendationsMainDiv">
        <div className="EnergyCardRecommendations">
          <div className="EnergyCardContentRecommendations">
            <div className="EnergyCardTitleRecommendations">
              All recommendations
            </div>

            <div className="DropdownDivFilter">
              <button
                type="button"
                className="btn btn-default DropdownButtonFilter"
                data-toggle="dropdown"
              >
                <div
                  class="material-symbols-outlined"
                  style={{
                    fontSize: "26px",
                  }}
                >
                  filter_list
                </div>
              </button>

              <ul className="dropdown-menu scrollable-menu" role="menu">
                <li>
                  <p
                    href="Biggest Impact"
                    onClick={showBI}
                    id="Biggest Impact"
                    className="EnergyDropdownOptionFilter"
                  >
                    {" "}
                    Biggest Impact
                  </p>
                </li>

                <li>
                  <p
                    href="Easy to do"
                    onClick={showETD}
                    id="Easy to do"
                    className="EnergyDropdownOptionFilter"
                  >
                    Easy to do
                  </p>
                </li>
                <li>
                  <p
                    href="Fun tip"
                    onClick={showFT}
                    id="Fun tip"
                    className="EnergyDropdownOptionFilter"
                  >
                    Fun tip
                  </p>
                </li>
                <li>
                  <p
                    href="All"
                    onClick={showALL}
                    id="All"
                    className="EnergyDropdownOptionFilter"
                  >
                    All
                  </p>
                </li>
              </ul>
            </div>
            <div>
              <div className="OptionDivRecommendations">
                {BI ? (
                  <>
                    <RecEnergy1 /> <RecEnergy10 />
                    <RecEnergy2 /> <RecEnergy3 />
                  </>
                ) : (
                  <></>
                )}
                {ETD ? (
                  <>
                    <RecEnergy4 /> <RecEnergy5 />
                    <RecEnergy6 />
                  </>
                ) : (
                  <></>
                )}
                {FT ? (
                  <>
                    <RecEnergy7 /> <RecEnergy8 />
                    <RecEnergy9 />
                  </>
                ) : (
                  <></>
                )}{" "}
                {ALL ? (
                  <>
                    <RecEnergy1 /> <RecEnergy10 />
                    <RecEnergy2 /> <RecEnergy3 /> <RecEnergy4 /> <RecEnergy5 />{" "}
                    <RecEnergy6 /> <RecEnergy7 /> <RecEnergy8 /> <RecEnergy9 />
                  </>
                ) : (
                  <></>
                )}{" "}
              </div>
            </div>
            <div className="BackButtonDiv">
              {" "}
              <Button
                variant="contained"
                className="BackButton"
                onClick={handleStart}
              >
                BACK
              </Button>
            </div>
          </div>
        </div>
        <div className="EnergyCardResources">
          <div className="EnergyCardContentResources">
            <div className="EnergyCardTitleResources">
              Resources and external links
            </div>
            <div style={{ width: "100%" }}>
              <div className="EnergyCardSingleResource">
                <Link
                  className="EnergyCardContentSingleResource"
                  to={"https://changeclubs.global/energy/"}
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  <div className="EnergyCardTitleRecSummary">Energy Module</div>
                  <div className="EnergyCardModuleRecSummary">
                    Change Clubs gGmbH
                  </div>
                  <div className="OptionDivRecSummary">
                    Moving together towards a sustainable life
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="BackButtonDiv">
            {" "}
            <Button
              variant="contained"
              className="BackButton"
              onClick={handleStart}
            >
              BACK
            </Button>
          </div>
        </div>
      </div>
      <div>
        <Link
          to="https://forms.gle/ckhDjcG4PqAJMt7B9"
          target="_blank"
          rel="noreferrer"
          className="FeedbackButtonReco"
        >
          FEEDBACK
        </Link>
      </div>
      <div className="ChangeClubsLogo">
        <Link to="/Results" target={"_blank"} rel={"noreferrer"}>
          <img src={CClogo} alt="Change Clubs logo" height={50}></img>
        </Link>
      </div>
    </div>
  );
}

export default EnergyRecommendations;
