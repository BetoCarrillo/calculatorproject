import React, { useContext } from "react";
import "../../styles/energystyle.css";
import { Link } from "react-router-dom";
import { ResultsContext } from "../../Context/context";
import yellowstar from "../../styles/Pictures/yellowstar.png";

function RecEnergy5() {
  //   const { inputQ1Energy, setInputQ1Energy } = useContext(ResultsContext);

  return (
    <div
      className="EnergyCardRecSummary"
      style={{ backgroundColor: "#7fc3eb", borderColor: " #7fc3eb" }}
    >
      <Link className="EnergyCardContentRecSummary">
        <div className="EnergyCardTypeRecSummary">
          <div>Easy to do</div>
          <div>
            <span className="material-symbols-outlined RecStarGold">star</span>{" "}
            <span className="material-symbols-outlined RecStarGold">star</span>{" "}
          </div>
        </div>
        <div className="EnergyCardTitleRecSummary">Be energy aware</div>
        <div className="EnergyCardModuleRecSummary">Energy</div>
        <div className="OptionDivRecSummary">
          Being energy-aware means contributing to climate protection and saving
          money at the same time.
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

export default RecEnergy5;
