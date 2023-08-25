import React, { useContext } from "react";
import "../../styles/energystyle.css";
import { Link } from "react-router-dom";
import ProgressBar from "../progressbar";
import { ResultsContext } from "../../Context/context";
import CClogo from "../../styles/CClogo.png";

function Q5Energy() {
  const { inputQ5Energy, setInputQ5Energy } = useContext(ResultsContext);

  const handleChange = (event) => {
    let valueQ5Energy = event.target.value;
    setInputQ5Energy(valueQ5Energy);
    // console.log("inputQ1Energy", inputQ1Energy);
  };

  const testData = [
    { bgcolor: "#095366", completed: 55.5, question: 5, totalquestions: 9 },
  ];

  const handleSave = () => {
    console.log("inputQ5Energy", inputQ5Energy);
  };

  return (
    <div className="EnergyDivBackground EnergyMainFlex">
      <h1 className="AreaHeading">ENERGY</h1>
      <div className="EnergyCard">
        <div className="EnergyCardContent">
          <div className="EnergyCardTitle">How do you store your data?</div>
          <div className="OptionDiv">
            {inputQ5Energy === "Hard drive" ? (
              <span>
                <label className="RadioLabel">
                  Hard drive
                  <input
                    type="radio"
                    name="radio"
                    value="Hard drive"
                    onClick={handleChange}
                    checked
                  ></input>
                  <span className="checkmark"></span>
                </label>
              </span>
            ) : (
              <span>
                <label className="RadioLabel">
                  Hard drive
                  <input
                    type="radio"
                    name="radio"
                    value="Hard drive"
                    onClick={handleChange}
                  ></input>
                  <span className="checkmark"></span>
                </label>
              </span>
            )}
            {inputQ5Energy === "Cloud service" ? (
              <span>
                <label className="RadioLabel">
                  Cloud service
                  <input
                    type="radio"
                    name="radio"
                    onClick={handleChange}
                    value="Cloud service"
                    checked
                  ></input>
                  <span className="checkmark"></span>
                </label>
              </span>
            ) : (
              <span>
                <label className="RadioLabel">
                  Cloud service
                  <input
                    type="radio"
                    name="radio"
                    onClick={handleChange}
                    value="Cloud service"
                  ></input>
                  <span className="checkmark"></span>
                </label>
              </span>
            )}
          </div>
          <div className="EnergyCardButtonsDiv">
            <div className="EnergyCardButtonsLeftDiv"></div>
            <div className="EnergyCardButtonsNavigation">
              <Link to="/Q4Energy" className="EnergyNavigationButtonsLink">
                <span className="material-symbols-outlined EnergyNavigationButtons">
                  arrow_left_alt
                </span>
              </Link>
              <Link
                onClick={handleSave}
                to="/Q6Energy"
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

export default Q5Energy;
