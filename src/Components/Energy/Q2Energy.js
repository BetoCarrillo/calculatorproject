import React, { useContext } from "react";
import "../../styles/energystyle.css";
import { Link } from "react-router-dom";
import ProgressBar from "../progressbar";
import { ResultsContext } from "../../Context/context";
import CClogo from "../../styles/CClogo.png";

function Q2Energy() {
  const { inputQ2Energy, setInputQ2Energy } = useContext(ResultsContext);

  const handleChange = (event) => {
    let valueQ2Energy = event.target.id;
    setInputQ2Energy(valueQ2Energy);
    // console.log("inputQ2Energy", inputQ2Energy);
  };

  const testData = [
    { bgcolor: "#095366", completed: 22.2, question: 2, totalquestions: 9 },
  ];

  const handleSave = () => {
    console.log("inputQ2Energy", inputQ2Energy);
  };

  return (
    <div className="EnergyDivBackground EnergyMainFlex">
      <h1 className="AreaHeading">ENERGY</h1>
      <div className="EnergyCard">
        <div className="EnergyCardContent">
          <div className="EnergyCardTitle">How do you heat your home?</div>
          <div className="DropdownDiv">
            {inputQ2Energy === "" ? (
              <button
                type="button"
                className="btn btn-default DropdownButton"
                data-toggle="dropdown"
              >
                {inputQ2Energy === "" ? (
                  <span
                    className="caret"
                    style={{
                      color: "black",
                      textDecoration: "none",
                      fontFamily: "Palanquin",
                    }}
                  >
                    Choose
                  </span>
                ) : (
                  <span
                    className="caretText"
                    style={{
                      backgroundColor: "#095366",
                      color: "white",
                      fontFamily: "Palanquin",
                    }}
                  >
                    {inputQ2Energy}
                  </span>
                )}
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-default DropdownButton"
                data-toggle="dropdown"
                style={{ backgroundColor: "#095366" }}
              >
                {inputQ2Energy === "" ? (
                  <span className="caret">Choose</span>
                ) : (
                  <span
                    className="caretText"
                    style={{
                      backgroundColor: "#095366",
                      color: "white",
                      fontFamily: "Palanquin",
                    }}
                  >
                    {inputQ2Energy}
                  </span>
                )}
              </button>
            )}

            <ul className="dropdown-menu scrollable-menu" role="menu">
              <li>
                <p
                  href="#Heat pump"
                  onClick={handleChange}
                  id="Heat pump"
                  className="EnergyDropdownOption"
                >
                  {" "}
                  Heat pump
                </p>
              </li>
              <li>
                <p
                  href="#Electricity"
                  onClick={handleChange}
                  id="Electricity"
                  className="EnergyDropdownOption"
                >
                  Electricity
                </p>
              </li>
              <li>
                <p
                  href="#Methane (natural gas)"
                  onClick={handleChange}
                  id="Methane (natural gas)"
                  className="EnergyDropdownOption"
                >
                  Methane (natural gas)
                </p>
              </li>
              <li>
                <p
                  href="#Heating oil"
                  onClick={handleChange}
                  id="Heating oil"
                  className="EnergyDropdownOption"
                >
                  Heating oil
                </p>
              </li>
              <li>
                <p
                  href="#Wood pellets"
                  onClick={handleChange}
                  id="Wood pellets"
                  className="EnergyDropdownOption"
                >
                  Wood pellets
                </p>
              </li>
              <li>
                <p
                  href="#Biogas"
                  onClick={handleChange}
                  id="Biogas"
                  className="EnergyDropdownOption"
                >
                  Biogas
                </p>
              </li>
              <li>
                <p
                  href="#None"
                  onClick={handleChange}
                  id="None"
                  className="EnergyDropdownOption"
                >
                  None
                </p>
              </li>
            </ul>
          </div>
          <div className="EnergyCardButtonsDiv">
            <div className="EnergyCardButtonsLeftDiv"></div>
            <div className="EnergyCardButtonsNavigation">
              <Link to="/Q1Energy" className="EnergyNavigationButtonsLink">
                <span className="material-symbols-outlined EnergyNavigationButtons">
                  arrow_left_alt
                </span>
              </Link>
              <Link
                onClick={handleSave}
                to="/Q3Energy"
                className="EnergyNavigationButtonsLink"
              >
                <span className="material-symbols-outlined EnergyNavigationButtons">
                  arrow_right_alt
                </span>
              </Link>
            </div>
            <div className="EnergyCardButtonsSkip">
              <Link to="/Results" className="EnergyCardButtonsSkipLink">
                <div>Skip to recommendations</div>
              </Link>
            </div>

            {/*            
                {isNaN(CalcTotal) ? <span>Back</span> : <span>Skip all</span>}
         */}
          </div>
        </div>
      </div>
      <div>
        {testData.map((item, idx) => (
          <ProgressBar
            key={idx}
            bgcolor={item.bgcolor}
            completed={item.completed}
            question={item.question}
            totalquestions={item.totalquestions}
          />
        ))}
      </div>
      <div className="ChangeClubsLogo">
        <Link to="/Results" target={"_blank"} rel={"noreferrer"}>
          <img src={CClogo} alt="Change Clubs logo" height={50}></img>
        </Link>
      </div>
    </div>
  );
}

export default Q2Energy;
