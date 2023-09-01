import React, { useContext } from "react";
import "../../styles/energystyle.css";
import { Link } from "react-router-dom";
import { ResultsContext } from "../../Context/context";
import yellowstar from "../../styles/Pictures/yellowstar.png";

function RecEnergy2() {
  //   const { inputQ1Energy, setInputQ1Energy } = useContext(ResultsContext);

  return (
    <div className="EnergyCardRecSummary BiggestImpact">
      <Link className="EnergyCardContentRecSummary" to="/SaveEnergy">
        <div className="EnergyCardTypeRecSummary">
          <div>Biggest Impact</div>
          <div>
            <img src={yellowstar} alt="YellowStar" height={20}></img>
            <img src={yellowstar} alt="YellowStar" height={20}></img>
            <img src={yellowstar} alt="YellowStar" height={20}></img>
          </div>
        </div>
        <div className="EnergyCardTitleRecSummary">Save energy</div>
        <div className="EnergyCardModuleRecSummary">Energy</div>
        <div className="OptionDivRecSummary">
          We can also have a positive impact on the climate and the environment
          by reducing our energy consumption. Learn more ways to save energy.
        </div>
        <Link
          to="/SaveEnergy"
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

export default RecEnergy2;
