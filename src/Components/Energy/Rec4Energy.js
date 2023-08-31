import React, { useContext } from "react";
import "../../styles/energystyle.css";
import { Link } from "react-router-dom";
import { ResultsContext } from "../../Context/context";
import yellowstar from "../../styles/Pictures/yellowstar.png";

function RecEnergy4() {
  //   const { inputQ1Energy, setInputQ1Energy } = useContext(ResultsContext);

  return (
    <div className="EnergyCardRecSummary EasyToDo">
      <Link className="EnergyCardContentRecSummary">
        <div className="EnergyCardTypeRecSummary">
          <div>Easy to do</div>
          <div>
            <img src={yellowstar} alt="YellowStar" height={20}></img>
            <img src={yellowstar} alt="YellowStar" height={20}></img>
          </div>
        </div>
        <div className="EnergyCardTitleRecSummary">Be energy aware</div>
        <div className="EnergyCardModuleRecSummary">Energy</div>
        <div className="OptionDivRecSummary">
          Being energy-aware means protecting theclimate and saving money at the
          same time. Here are some simple steps to integrate energy-aware habits
          in your daily life.
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

export default RecEnergy4;
