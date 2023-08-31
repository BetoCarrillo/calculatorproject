import React, { useContext } from "react";
import "../../styles/energystyle.css";
import { Link } from "react-router-dom";
import { ResultsContext } from "../../Context/context";
import yellowstar from "../../styles/Pictures/yellowstar.png";

function RecEnergy8() {
  //   const { inputQ1Energy, setInputQ1Energy } = useContext(ResultsContext);

  return (
    <div className="EnergyCardRecSummary FunTip">
      <Link className="EnergyCardContentRecSummary">
        <div className="EnergyCardTypeRecSummary">
          <div>Fun Tip</div>
          <div>
            <img src={yellowstar} alt="YellowStar" height={20}></img>
          </div>
        </div>
        <div className="EnergyCardTitleRecSummary">
          Drink your morning coffee in a room naturally warmed by the sun
        </div>
        <div className="EnergyCardModuleRecSummary">Energy</div>
        <div className="OptionDivRecSummary">Enjoy!</div>
        <Link
          // to=""
          size="small"
          className="RecommendationLearnMoreButtonDiv"
        >
          {" "}
          <div></div>
          <div
            className="material-symbols-outlined RecommendationLearnMoreButton"
            style={{ alignContent: "end" }}
          >
            add_circle
          </div>
        </Link>
      </Link>
    </div>
  );
}

export default RecEnergy8;
