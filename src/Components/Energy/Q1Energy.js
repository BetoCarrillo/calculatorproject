import React, { useContext, useEffect } from "react";
import "../../styles/energystyle.css";
import { Link } from "react-router-dom";
import ProgressBar from "../progressbar";
import { ResultsContext } from "../../Context/context";
import CClogo from "../../styles/CClogo.png";

function Q1Energy() {
  const { inputQ1Energy, setInputQ1Energy } = useContext(ResultsContext);

  const handleChange = (event) => {
    let valueQ1Energy = event.target.value;
    setInputQ1Energy(valueQ1Energy);
    // console.log("inputQ1Energy", inputQ1Energy);
  };

  const testData = [
    { bgcolor: "#095366", completed: 11.1, question: 1, totalquestions: 9 },
  ];

  const handleSave = () => {
    console.log("inputQ1Energy", inputQ1Energy);
  };

  return (
    <div className="EnergyDivBackground EnergyMainFlex">
      <h1 className="AreaHeading">ENERGY</h1>
      <div className="EnergyCard">
        <div className="EnergyCardContent">
          <div className="EnergyCardTitle">
            What type of electricity do you use at home?
          </div>
          <div className="OptionDiv">
            {inputQ1Energy === "Normal grid" ? (
              <span>
                <label
                  className="RadioLabel EnergyCardtext"
                  style={{
                    fontFamily: "Palanquin",
                  }}
                >
                  Normal grid
                  <input
                    type="radio"
                    name="radio"
                    value="Normal grid"
                    onClick={handleChange}
                    checked
                  ></input>
                  <span className="checkmark"></span>
                </label>
              </span>
            ) : (
              <span>
                <label
                  className="RadioLabel EnergyCardtext"
                  style={{
                    fontFamily: "Palanquin",
                  }}
                >
                  Normal grid
                  <input
                    type="radio"
                    name="radio"
                    value="Normal grid"
                    onClick={handleChange}
                  ></input>
                  <span className="checkmark"></span>
                </label>
              </span>
            )}
            {inputQ1Energy === "Mixed sources" ? (
              <span>
                <label className="RadioLabel EnergyCardtext">
                  Mixed sources
                  <input
                    type="radio"
                    name="radio"
                    onClick={handleChange}
                    value="Mixed sources"
                    checked
                  ></input>
                  <span className="checkmark"></span>
                </label>
              </span>
            ) : (
              <span>
                <label className="RadioLabel EnergyCardtext">
                  Mixed sources
                  <input
                    type="radio"
                    name="radio"
                    onClick={handleChange}
                    value="Mixed sources"
                  ></input>
                  <span className="checkmark"></span>
                </label>
              </span>
            )}
            {inputQ1Energy === "Solar energy" ? (
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
            )}
            {inputQ1Energy === "100% renewable" ? (
              <span>
                <label className="RadioLabel EnergyCardtext">
                  100% renewable
                  <input
                    type="radio"
                    name="radio"
                    onClick={handleChange}
                    value="100% renewable"
                    checked
                  ></input>
                  <span className="checkmark"></span>
                </label>
              </span>
            ) : (
              <span>
                <label className="RadioLabel EnergyCardtext">
                  100% renewable
                  <input
                    type="radio"
                    name="radio"
                    onClick={handleChange}
                    value="100% renewable"
                  ></input>
                  <span className="checkmark"></span>
                </label>
              </span>
            )}
          </div>

          <div className="EnergyCardButtonsDiv">
            <div className="EnergyCardButtonsLeftDiv"></div>
            <div className="EnergyCardButtonsNavigation">
              <Link to="/Modules" className="EnergyNavigationButtonsLink">
                <span className="material-symbols-outlined EnergyNavigationButtons">
                  arrow_left_alt
                </span>
              </Link>
              <Link
                onClick={handleSave}
                to="/Q2Energy"
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

export default Q1Energy;
