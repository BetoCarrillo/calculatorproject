import React, { useContext } from "react";
import "../../styles/energystyle.css";
import { Link } from "react-router-dom";
import { ResultsContext } from "../../Context/context";
import yellowstar from "../../styles/Pictures/yellowstar.png";

function RecEnergy2() {
  //   const { inputQ1Energy, setInputQ1Energy } = useContext(ResultsContext);

  return (
    <div
      className="EnergyCardRecSummary"
      style={{ backgroundColor: "#98cb63" }}
    >
      <Link className="EnergyCardContentRecSummary">
        <div className="EnergyCardTypeRecSummary">
          <div>Biggest Impact</div>
          <div>
            <span className="material-symbols-outlined RecStarGold">star</span>
            <span className="material-symbols-outlined RecStarGold">star</span>
            <span className="material-symbols-outlined RecStarGold">star</span>
          </div>
        </div>
        <div className="EnergyCardTitleRecSummary">
          Change to a clean energy provider
        </div>
        <div className="EnergyCardModuleRecSummary">Energy</div>
        <div className="OptionDivRecSummary">
          Energy is fundamental to our society and our economic and social
          development. Therefore, we must achieve a sustainable and needs-based
          energy supply to be climate-neutral.
        </div>
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

export default RecEnergy2;
