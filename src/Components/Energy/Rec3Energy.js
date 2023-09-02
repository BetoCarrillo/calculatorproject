import React, { useContext } from "react";
import "../../styles/energystyle.css";
import { Link } from "react-router-dom";
import { ResultsContext } from "../../Context/context";
import yellowstar from "../../styles/Pictures/yellowstar.png";

function RecEnergy3() {
  //   const { inputQ1Energy, setInputQ1Energy } = useContext(ResultsContext);

  return (
    <div className="EnergyCardRecSummary BiggestImpact">
      <Link className="EnergyCardContentRecSummary" to="/EfficientAppliances">
        <div className="EnergyCardTypeRecSummary">
          <div>Biggest Impact</div>
          <div>
            <img src={yellowstar} alt="YellowStar" height={20}></img>
            <img src={yellowstar} alt="YellowStar" height={20}></img>
            <img src={yellowstar} alt="YellowStar" height={20}></img>
          </div>
        </div>
        <div className="EnergyCardTitleRecSummary">
          Invest in energy efficient appliances
        </div>
        <div className="EnergyCardModuleRecSummary">Energy</div>
        <div className="OptionDivRecSummary">
          Making items and devices you use on a daily basis energy efficient
          will result in many savings. Learn more.
        </div>
        <Link
          to="/EfficientAppliances"
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

export default RecEnergy3;
