import React, { useContext } from "react";
import "../../styles/energystyle.css";
import { Link, useNavigate } from "react-router-dom";
import { ResultsContext } from "../../Context/context";
import CClogo from "../../styles/CClogo.png";
import RecommendationsResultsEnergy from "../../Components/Energy/RecommendationsResultsEnergy";
import FootprintResultsEnergy from "../../Components/Energy/FootprintResultsEnergy";
import AnswersEnergy from "../../Components/Energy/AnswersEnergy";
import { Button } from "@mui/material";

function EnergyResults() {
  //   const { inputQ1Energy, setInputQ1Energy } = useContext(ResultsContext);

  const redirectSummary = useNavigate();
  const handleStart = () => {
    redirectSummary("");
  };

  return (
    <div className="EnergyDivBackground EnergyMainFlex">
      <h1 className="AreaHeading">ENERGY</h1>
      <div className="ResultsMainDiv">
        <div className="RecommendationsResultsDiv">
          {" "}
          <RecommendationsResultsEnergy />
        </div>
        <div className="FootprintAnswersResultsDiv">
          <FootprintResultsEnergy />
          <AnswersEnergy />
        </div>
      </div>
      <div>
        <Button
          variant="contained"
          className="SummaryButton"
          onClick={handleStart}
        >
          OVERALL SUMMARY
        </Button>
      </div>
      <div className="ChangeClubsLogo">
        <Link to="/Results" target={"_blank"} rel={"noreferrer"}>
          <img src={CClogo} alt="Change Clubs logo" height={50}></img>
        </Link>
      </div>
    </div>
  );
}

export default EnergyResults;
