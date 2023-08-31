import React, { useContext } from "react";
import "../../styles/energystyle.css";
import { Link } from "react-router-dom";
import ProgressBar from "../progressbar";
import { ResultsContext } from "../../Context/context";
import CClogo from "../../styles/CClogo.png";

function Q4Energy() {
  const { inputQ2Energy, inputQ4Energy, setInputQ4Energy } =
    useContext(ResultsContext);

  const handleChange = (event) => {
    let valueQ4Energy = event.target.id;
    setInputQ4Energy(valueQ4Energy);
    // console.log("inputQ4Energy", inputQ4Energy);
  };

  const testData = [
    { bgcolor: "#095366", completed: 44.4, question: 4, totalquestions: 9 },
  ];

  const handleSave = () => {
    console.log("inputQ4Energy", inputQ4Energy);
  };

  return (
    <div className="EnergyDivBackground EnergyMainFlex">
      <h1 className="AreaHeading">ENERGY</h1>
      <div className="EnergyCard">
        <div className="EnergyCardContent">
          <div className="EnergyCardTitle">
            How do you heat your water at home?
          </div>
          <div className="DropdownDiv">
            {inputQ4Energy === "" ? (
              <button
                type="button"
                className="btn btn-default DropdownButton"
                data-toggle="dropdown"
              >
                {inputQ4Energy === "" ? (
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
                    {inputQ4Energy}
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
                {inputQ4Energy === "" ? (
                  <span
                    className="caret"
                    style={{
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
                    {inputQ4Energy}
                  </span>
                )}
              </button>
            )}

            <ul className="dropdown-menu scrollable-menu" role="menu">
              <li>
                <p
                  href="#Heat exchanger"
                  onClick={handleChange}
                  id="Heat exchanger"
                  className="EnergyDropdownOption"
                >
                  {" "}
                  Heat exchanger
                </p>
              </li>
              <li>
                <p
                  href="#Electric heater"
                  onClick={handleChange}
                  id="Electric heater"
                  className="EnergyDropdownOption"
                >
                  Electric heater
                </p>
              </li>
              <li>
                <p
                  href="#Gas heater"
                  onClick={handleChange}
                  id="Gas heater"
                  className="EnergyDropdownOption"
                >
                  Gas heater
                </p>
              </li>
              <li>
                <p
                  href="#Solar energy"
                  onClick={handleChange}
                  id="Solar energy"
                  className="EnergyDropdownOption"
                >
                  Solar energy
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
                  href="#I don't know"
                  onClick={handleChange}
                  id="I don't know"
                  className="EnergyDropdownOption"
                >
                  I don't know
                </p>
              </li>
              <li>
                <p
                  href="#Central heating system"
                  onClick={handleChange}
                  id={`${inputQ2Energy}`}
                  className="EnergyDropdownOption"
                >
                  Central heating system
                </p>
              </li>
            </ul>
          </div>
          <div className="EnergyCardButtonsDiv">
            <div className="EnergyCardButtonsLeftDiv"></div>
            <div className="EnergyCardButtonsNavigation">
              <Link to="/Q3Energy" className="EnergyNavigationButtonsLink">
                <span className="material-symbols-outlined EnergyNavigationButtons">
                  arrow_left_alt
                </span>
              </Link>
              <Link
                onClick={handleSave}
                to="/Q5Energy"
                className="EnergyNavigationButtonsLink"
              >
                <span className="material-symbols-outlined EnergyNavigationButtons">
                  arrow_right_alt
                </span>
              </Link>
            </div>
            <div className="EnergyCardButtonsSkip">
              <Link to="/EnergyResults" className="EnergyCardButtonsSkipLink">
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
      <div className="ChangeClubsLogo CClogo">
        <Link
          to="https://changeclubs.global/"
          target={"_blank"}
          rel={"noreferrer"}
        >
          <img src={CClogo} alt="Change Clubs logo" height={50}></img>
        </Link>
      </div>
    </div>
  );
}

export default Q4Energy;
