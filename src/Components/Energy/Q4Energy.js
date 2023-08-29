import React, { useContext } from "react";
import "../../styles/energystyle.css";
import { Link } from "react-router-dom";
import ProgressBar from "../progressbar";
import { ResultsContext } from "../../Context/context";
import CClogo from "../../styles/CClogo.png";

function Q4Energy() {
  const { inputQ4Energy, setInputQ4Energy } = useContext(ResultsContext);

  const handleChange = (event) => {
    let valueQ4Energy = event.target.value;
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
          <div className="OptionDiv">
            {inputQ4Energy === "Electricity" ? (
              <span>
                <label className="RadioLabel EnergyCardtext">
                  Electricity
                  <input
                    type="radio"
                    name="radio"
                    value="Electricity"
                    onClick={handleChange}
                    checked
                  ></input>
                  <span className="checkmark"></span>
                </label>
              </span>
            ) : (
              <span>
                <label className="RadioLabel EnergyCardtext">
                  Electricity
                  <input
                    type="radio"
                    name="radio"
                    value="Electricity"
                    onClick={handleChange}
                  ></input>
                  <span className="checkmark"></span>
                </label>
              </span>
            )}
            {inputQ4Energy === "Gas or Heating oil" ? (
              <span>
                <label className="RadioLabel EnergyCardtext">
                  Gas or Heating oil
                  <input
                    type="radio"
                    name="radio"
                    onClick={handleChange}
                    value="Gas or Heating oil"
                    checked
                  ></input>
                  <span className="checkmark"></span>
                </label>
              </span>
            ) : (
              <span>
                <label className="RadioLabel EnergyCardtext">
                  Gas or Heating oil
                  <input
                    type="radio"
                    name="radio"
                    onClick={handleChange}
                    value="Gas or Heating oil"
                  ></input>
                  <span className="checkmark"></span>
                </label>
              </span>
            )}
            {inputQ4Energy === "Biogas" ? (
              <span>
                <label className="RadioLabel EnergyCardtext">
                  Biogas
                  <input
                    type="radio"
                    name="radio"
                    onClick={handleChange}
                    value="Biogas"
                    checked
                  ></input>
                  <span className="checkmark"></span>
                </label>
              </span>
            ) : (
              <span>
                <label className="RadioLabel EnergyCardtext">
                  Biogas
                  <input
                    type="radio"
                    name="radio"
                    onClick={handleChange}
                    value="Biogas"
                  ></input>
                  <span className="checkmark"></span>
                </label>
              </span>
            )}
            {inputQ4Energy === "Solar energy" ? (
              <span>
                <label className="RadioLabel EnergyCardtext">
                  Solar energy
                  <input
                    type="radio"
                    name="radio"
                    onClick={handleChange}
                    value="Solar energy"
                    checked
                  ></input>
                  <span className="checkmark"></span>
                </label>
              </span>
            ) : (
              <span>
                <label className="RadioLabel EnergyCardtext">
                  Solar energy
                  <input
                    type="radio"
                    name="radio"
                    onClick={handleChange}
                    value="Solar energy"
                  ></input>
                  <span className="checkmark"></span>
                </label>
              </span>
            )}{" "}
            {inputQ4Energy === "I don't know" ? (
              <span>
                <label className="RadioLabel EnergyCardtext">
                  I don't know
                  <input
                    type="radio"
                    name="radio"
                    onClick={handleChange}
                    value="I don't know"
                    checked
                  ></input>
                  <span className="checkmark"></span>
                </label>
              </span>
            ) : (
              <span>
                <label className="RadioLabel EnergyCardtext">
                  I don't know
                  <input
                    type="radio"
                    name="radio"
                    onClick={handleChange}
                    value="I don't know"
                  ></input>
                  <span className="checkmark"></span>
                </label>
              </span>
            )}
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
