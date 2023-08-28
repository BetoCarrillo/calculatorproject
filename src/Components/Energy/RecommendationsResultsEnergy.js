import React, { useContext } from "react";
import "../../styles/energystyle.css";
import { Link } from "react-router-dom";
import { ResultsContext } from "../../Context/context";
import CClogo from "../../styles/CClogo.png";

function RecommendationsResultsEnergy() {
  //   const { inputQ1Energy, setInputQ1Energy } = useContext(ResultsContext);

  return (
    <div className="EnergyCardRecResults">
      <div className="EnergyCardContentRecResults">
        <div className="EnergyCardTitleRecResults">Recommendations for you</div>
        <div className="OptionDivRecResults"></div>
      </div>
    </div>
  );
}

export default RecommendationsResultsEnergy;
