import React, { useContext, useEffect } from "react";
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
import RecEnergy7 from "./Rec7Energy";
import RecEnergy8 from "./Rec8Energy";
import RecEnergy9 from "./Rec9Energy";
import RecEnergy10 from "./Rec10Energy";

function RecommendationsResultsEnergy() {
  //   const { inputQ1Energy, setInputQ1Energy } = useContext(ResultsContext);

  const {
    UserRecommendations,
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

  const redirectAllRecommendations = useNavigate();
  const handleStart = () => {
    redirectAllRecommendations("/EnergyRecommendations");
  };

  return (
    <div className="EnergyCardRecResults">
      <div className="EnergyCardContentRecResults">
        <div className="EnergyCardTitleRecResults">Recommendations for you</div>
        <div className="OptionDivRecResults">
          {UserRecommendations && UserRecommendations.includes(1) ? (
            <RecEnergy1 />
          ) : (
            <></>
          )}
          {UserRecommendations && UserRecommendations.includes(2) ? (
            <RecEnergy2 />
          ) : (
            <></>
          )}
          {UserRecommendations && UserRecommendations.includes(3) ? (
            <RecEnergy3 />
          ) : (
            <></>
          )}
          {UserRecommendations &&
          UserRecommendations.length < 7 &&
          UserRecommendations.includes(10) ? (
            <RecEnergy10 />
          ) : (
            <></>
          )}

          {UserRecommendations && UserRecommendations.includes(4) ? (
            <RecEnergy4 />
          ) : (
            <></>
          )}
          {UserRecommendations && UserRecommendations.includes(5) ? (
            <RecEnergy5 />
          ) : (
            <></>
          )}
          {UserRecommendations && UserRecommendations.includes(6) ? (
            <RecEnergy6 />
          ) : (
            <></>
          )}

          {UserRecommendations && UserRecommendations.length < 6 ? (
            <>
              {" "}
              <RecEnergy7 />
            </>
          ) : (
            <></>
          )}
          {UserRecommendations && UserRecommendations.length < 5 ? (
            <>
              {" "}
              <RecEnergy8 />
            </>
          ) : (
            <></>
          )}
          {UserRecommendations && UserRecommendations.length < 4 ? (
            <>
              {" "}
              <RecEnergy9 />
            </>
          ) : (
            <></>
          )}
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
