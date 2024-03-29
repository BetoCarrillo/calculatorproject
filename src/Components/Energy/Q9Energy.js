import React, { useContext } from "react";
import "../../styles/energystyle.css";
import { Link } from "react-router-dom";
import ProgressBar from "../progressbar";
import { ResultsContext } from "../../Context/context";
import CClogo from "../../styles/CClogo.png";

function Q9Energy() {
  const { inputQ9Energy, setInputQ9Energy } = useContext(ResultsContext);

  const handleChange = (event) => {
    let valueQ9Energy = event.target.value;
    setInputQ9Energy(valueQ9Energy);
    // console.log("inputQ1Energy", inputQ1Energy);
  };

  const testData = [
    { bgcolor: "#095366", completed: 100, question: 9, totalquestions: 9 },
  ];

  //   const handleSave = () => {
  //     console.log("inputQ9Energy", inputQ9Energy);
  //   };

  return (
    <div className="EnergyDivBackground EnergyMainFlex">
      <h1 className="AreaHeading">ENERGY</h1>
      <div className="EnergyCard">
        <div className="EnergyCardContent">
          <div className="EnergyCardTitle">
            Do you have efficient plumbing fixtures?
          </div>
          <div className="OptionDiv">
            {inputQ9Energy === "Yes" ? (
              <span>
                <label className="RadioLabel EnergyCardtext">
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
                <label className="RadioLabel EnergyCardtext">
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
            {inputQ9Energy === "No" ? (
              <span>
                <label className="RadioLabel EnergyCardtext">
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
                <label className="RadioLabel EnergyCardtext">
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
            <div className="EnergyCardButtonsDiv">
              <div className="EnergyCardButtonsLeftDiv"></div>
              <div className="EnergyCardButtonsNavigation">
                <Link to="/Q8Energy" className="EnergyNavigationButtonsLink">
                  <span className="material-symbols-outlined EnergyNavigationButtons">
                    arrow_left_alt
                  </span>
                </Link>
                <Link
                  // onClick={handleSave}
                  to="/EnergyResults"
                  className="EnergyNavigationButtonsLinkResults"
                >
                  <div className="EnergyNavigationButtonsResults">Results</div>
                </Link>
              </div>
              <div
                className="EnergyCardButtonsSkip"
                style={{ visibility: "hidden" }}
              ></div>
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
          target={"_blank"}
          rel={"noreferrer"}
          to="https://changeclubs.global/"
        >
          <img src={CClogo} alt="Change Clubs logo" height={50}></img>
        </Link>
      </div>
    </div>
  );
}

export default Q9Energy;
