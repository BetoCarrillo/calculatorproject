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
  const [IMP, setIMP] = useState(false);
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

  const showImportance = (event) => {
    setIMP(!IMP);
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
        <div className="EnergyCardImportance">
          <div className="EnergyCardContentImportance">
            <div className="EnergyCardContentImportanceDiv"></div>
            <div className="EnergyCardTitleImportance ">
              Why is energy Important
            </div>

            <div className="EnergyCardContentImportanceDiv">
              {!IMP ? (
                <div className="ArrowDownImportanceDiv">
                  <button
                    href="Biggest Impact"
                    onClick={showImportance}
                    id="Biggest Impact"
                    className="ButtonShowMore"
                  >
                    <div
                      class="material-symbols-outlined ArrowSpan"
                      style={{
                        fontSize: "28px",
                      }}
                    >
                      keyboard_arrow_down
                    </div>
                  </button>
                </div>
              ) : (
                <div className="ArrowDownImportanceDiv">
                  {" "}
                  <button
                    href="Biggest Impact"
                    onClick={showImportance}
                    id="Biggest Impact"
                    className="ButtonShowMore"
                  >
                    <div
                      class="material-symbols-outlined ArrowSpan"
                      style={{
                        fontSize: "28px",
                      }}
                    >
                      keyboard_arrow_up
                    </div>
                  </button>
                </div>
              )}
            </div>
          </div>
          {IMP ? (
            <div className="ImportanceText">
              <div>
                {" "}
                Energy is all around us. It is responsible for making everything
                happen: from listening to music, driving a car, turning on
                electric lamps, or using your kitchen stove. The energy sector
                consists of all the infrastructure needed to collect, produce,
                distribute, store, and consume power for our homes, our
                businesses and while we are on the go. From manufacturing to
                agriculture; health care to transportation, we depend on a
                stable energy supply.
              </div>
              <div>
                {" "}
                Today, fossil fuels still account for more than 80% of global
                energy production, and contribute to roughly two-thirds of all
                harmful greenhouse gas emissions, which must be urgently
                reduced. 60% of our electricity still comes from fossil fuels,
                such as gas, coal, and oil. By committing to reducing our energy
                consumption and enhancing energy efficiency we can play an
                important role in reducing the amount of fossil fuels burned
                every day and the levels of carbon dioxide in the atmosphere.
              </div>
              <div>
                This module is focused on the energy we need in our daily life
                at home or at work, and gives recommendations on how to reduce
                it and use it more efficiently. Recommendations regarding more
                structural ways of saving energy – through retrofitting or
                construction – may be found in the Housing module.
                Recommendations related to energy in transportation are in the
                Mobility module.
              </div>
            </div>
          ) : (
            <div></div>
          )}
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
                  <div className="EnergyCardTitleSingleResource">
                    Energy Module
                  </div>
                  <div className="EnergyCardModuleSingleResource">
                    Change Clubs gGmbH
                  </div>
                  <div className="OptionDivSingleResource">
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
