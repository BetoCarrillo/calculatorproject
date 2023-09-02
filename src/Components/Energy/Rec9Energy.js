import React, { useContext } from "react";
import "../../styles/energystyle.css";
import { Link } from "react-router-dom";
import { ResultsContext } from "../../Context/context";
import yellowstar from "../../styles/Pictures/yellowstar.png";

function RecEnergy9() {
  //   const { inputQ1Energy, setInputQ1Energy } = useContext(ResultsContext);

  return (
    <div className="EnergyCardRecSummary FunTip">
      <Link className="EnergyCardContentRecSummary" to="/NoTech">
        <div className="EnergyCardTypeRecSummary">
          <div>Fun Tip</div>
          <div>
            <img src={yellowstar} alt="YellowStar" height={20}></img>
          </div>
        </div>
        <div className="EnergyCardTitleRecSummary">
          Enjoy a day or weekend without electronic devices.
        </div>
        <div className="EnergyCardModuleRecSummary">Energy</div>
        <div className="OptionDivRecSummary">This also helps you detox.</div>
        <Link
          to="/NoTech"
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

export default RecEnergy9;
