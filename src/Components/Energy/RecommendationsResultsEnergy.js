import React, { useContext } from "react";
import "../../styles/energystyle.css";
import { Link, useNavigate } from "react-router-dom";
import { ResultsContext } from "../../Context/context";
import RecEnergy1 from "./Rec1Energy";
import RecEnergy2 from "./Rec2Energy";
import RecEnergy3 from "./Rec3Energy";
import RecEnergy4 from "./Rec4Energy";
import RecEnergy5 from "./Rec5Energy";
import RecEnergy6 from "./Rec6Energy";
import { Button } from "@mui/material";

function RecommendationsResultsEnergy() {
  //   const { inputQ1Energy, setInputQ1Energy } = useContext(ResultsContext);

  const redirectAllRecommendations = useNavigate();
  const handleStart = () => {
    redirectAllRecommendations("");
  };

  return (
    <div className="EnergyCardRecResults">
      <div className="EnergyCardContentRecResults">
        <div className="EnergyCardTitleRecResults">Recommendations for you</div>
        <div className="OptionDivRecResults">
          <RecEnergy2 />
          <RecEnergy5 />
          <RecEnergy3 />
          <RecEnergy1 />
          <RecEnergy4 />
          <RecEnergy6 />
          <div className="AllRecButtonDiv">
            <div></div>
            <Button
              variant="contained"
              className="AllRecButton"
              onClick={handleStart}
            >
              All Recommendations and resources
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecommendationsResultsEnergy;
