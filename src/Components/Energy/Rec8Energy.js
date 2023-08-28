import React, { useContext } from "react";
import "../../styles/energystyle.css";
import { Link } from "react-router-dom";
import { ResultsContext } from "../../Context/context";

function RecEnergy8() {
  //   const { inputQ1Energy, setInputQ1Energy } = useContext(ResultsContext);

  return (
    <div className="EnergyCardRecSummary">
      <div className="EnergyCardContentRecSummary">
        <div className="EnergyCardTitleRecSummary">Recommendation 8</div>
        <div className="OptionDivRecSummary"></div>
      </div>
    </div>
  );
}

export default RecEnergy8;
