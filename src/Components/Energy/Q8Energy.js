import React, { useContext, useState } from "react";
import "../../styles/energystyle.css";
import { Link } from "react-router-dom";
import ProgressBar from "../progressbar";
import { ResultsContext } from "../../Context/context";
import CClogo from "../../styles/CClogo.png";

function Q8Energy() {
  const { inputQ8Energy, setInputQ8Energy } = useContext(ResultsContext);

  const handleChange = (event) => {
    let valueQ8Energy = event.target.value;
    setInputQ8Energy(valueQ8Energy);
    // console.log("inputQ1Energy", inputQ1Energy);
  };

  const testData = [
    { bgcolor: "#095366", completed: 88.8, question: 8, totalquestions: 9 },
  ];

  const handleSave = () => {
    console.log("inputQ8Energy", inputQ8Energy);
  };

  return (
    <div className="EnergyDivBackground EnergyMainFlex">
      <h1 className="AreaHeading">ENERGY</h1>
      <div className="EnergyCard">
        <div className="EnergyCardContent">
          <div className="EnergyCardTitle">
            Are most of your appliances energy efficient?
          </div>
          <div className="OptionDiv">
            {inputQ8Energy === "Yes" ? (
              <span>
                <label className="RadioLabel">
                  Yes
                  <input
                    type="radio"
                    name="radio"
                    value="Yes"
                    onClick={handleChange}
                    checked
                  ></input>
                  <span className="checkmark"></span>
                </label>
              </span>
            ) : (
              <span>
                <label className="RadioLabel">
                  Yes
                  <input
                    type="radio"
                    name="radio"
                    value="Yes"
                    onClick={handleChange}
                  ></input>
                  <span className="checkmark"></span>
                </label>
              </span>
            )}
            {inputQ8Energy === "No" ? (
              <span>
                <label className="RadioLabel">
                  No
                  <input
                    type="radio"
                    name="radio"
                    onClick={handleChange}
                    value="No"
                    checked
                  ></input>
                  <span className="checkmark"></span>
                </label>
              </span>
            ) : (
              <span>
                <label className="RadioLabel">
                  No
                  <input
                    type="radio"
                    name="radio"
                    onClick={handleChange}
                    value="No"
                  ></input>
                  <span className="checkmark"></span>
                </label>
              </span>
            )}
          </div>
          <div className="EnergyCardButtonsDiv">
            <div className="EnergyCardButtonsLeftDiv"></div>
            <div className="EnergyCardButtonsNavigation">
              <Link to="/Q7Energy" className="EnergyNavigationButtonsLink">
                <span className="material-symbols-outlined EnergyNavigationButtons">
                  arrow_left_alt
                </span>
              </Link>
              <Link
                onClick={handleSave}
                to="/Q9Energy"
                className="EnergyNavigationButtonsLink"
              >
                <span className="material-symbols-outlined EnergyNavigationButtons">
                  arrow_right_alt
                </span>
              </Link>
            </div>
            <div className="EnergyCardButtonsSkip">
              <Link to="/Results" className="EnergyCardButtonsSkipLink">
                <div>Skip questions</div>
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

export default Q8Energy;
