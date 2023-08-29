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

  const {
    inputQ1Energy,
    setInputQ1Energy,
    inputQ2Energy,
    setInputQ2Energy,
    inputQ3Energy,
    setInputQ3Energy,
    inputQ4Energy,
    setInputQ4Energy,
    inputQ5Energy,
    setInputQ5Energy,
    inputQ6Energy,
    setInputQ6Energy,
    inputQ7AEnergy,
    setInputQ7AEnergy,
    inputQ7BEnergy,
    setInputQ7BEnergy,
    inputQ7CEnergy,
    setInputQ7CEnergy,
    inputQ8Energy,
    setInputQ8Energy,
    inputQ9Energy,
    setInputQ9Energy,
    inputQ7DEnergy,
    setInputQ7DEnergy,
  } = useContext(ResultsContext);

  const UserRecommendationAnswers = {
    Q1Energy: inputQ1Energy,
    Q2Energy: inputQ2Energy,
    Q3Energy: inputQ3Energy,
    Q4Energy: inputQ4Energy,
    Q5Energy: inputQ5Energy,
    Q6Energy: inputQ6Energy,
    Q7AEnergy: inputQ7AEnergy,
    Q7BEnergy: inputQ7BEnergy,
    Q7CEnergy: inputQ7CEnergy,
    Q7DEnergy: inputQ7DEnergy,
    Q8Energy: inputQ9Energy,
    Q9Energy: inputQ9Energy,
  };

  const redirectAllRecommendations = useNavigate();
  const handleStart = () => {
    redirectAllRecommendations("");
  };

  console.log("UserRecommendationAnswers", UserRecommendationAnswers);

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
