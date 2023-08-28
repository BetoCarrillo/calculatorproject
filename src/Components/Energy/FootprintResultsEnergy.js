import React, { useContext, useState } from "react";
import "../../styles/energystyle.css";
import { Link } from "react-router-dom";
import { ResultsContext } from "../../Context/context";
import CClogo from "../../styles/CClogo.png";

function FootprintResultsEnergy() {
  //   const { inputQ1Energy, setInputQ1Energy } = useContext(ResultsContext);

  const [results, setResults] = useState("kg");

  const handleChangeFootprintTrucks = (event) => {
    setResults("trucks");
  };

  const handleChangeFootprintKG = (event) => {
    setResults("kg");
  };

  const handleChangeFootprintTON = (event) => {
    setResults("ton");
  };

  return (
    <div className="EnergyCardFootprintResults">
      <div className="EnergyCardContentFootprintResults">
        <div className="EnergyCardTitleFootprintResults">Your impact</div>
        <div className="OptionDivFootprintResults">
          <div className="OptionDivFootprintResultsRadioDiv">
            <div>
              <label
                className="RadioLabelEnergyFootprint "
                style={{
                  fontFamily: "Palanquin",
                }}
              >
                KG
                <input
                  type="radio"
                  name="radio"
                  value="Normal grid"
                  onClick={handleChangeFootprintKG}
                ></input>
                <span className="checkmarkEnergyFootprint"></span>
              </label>
            </div>
            <div>
              <label
                className="RadioLabelEnergyFootprint "
                style={{
                  fontFamily: "Palanquin",
                }}
              >
                TON
                <input
                  type="radio"
                  name="radio"
                  value="Normal grid"
                  onClick={handleChangeFootprintTON}
                ></input>
                <span className="checkmarkEnergyFootprint"></span>
              </label>
            </div>
            <div>
              <label
                className="RadioLabelEnergyFootprint "
                style={{
                  fontFamily: "Palanquin",
                }}
              >
                <span className="material-symbols-outlined">
                  local_shipping
                </span>
                <input
                  type="radio"
                  name="radio"
                  value="Normal grid"
                  onClick={handleChangeFootprintTrucks}
                ></input>
                <span className="checkmarkEnergyFootprint"></span>
              </label>
            </div>
          </div>
          <div className="ResultsDiv">
            <div className="ResultsOutput"> 1 {`${results}`} </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FootprintResultsEnergy;
