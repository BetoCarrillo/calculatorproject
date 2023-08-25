import React, { useContext } from "react";
import "../../styles/energystyle.css";
import { Link } from "react-router-dom";
import ProgressBar from "../progressbar";
import { ResultsContext } from "../../Context/context";
import CClogo from "../../styles/CClogo.png";

function Q3Energy() {
  const { inputQ3Energy, setInputQ3Energy } = useContext(ResultsContext);

  const handleChange = (event) => {
    let valueQ3Energy = event.target.value;
    setInputQ3Energy(valueQ3Energy);
    // console.log("inputQ3Energy", inputQ3Energy);
  };

  const testData = [
    { bgcolor: "#095366", completed: 33.3, question: 3, totalquestions: 9 },
  ];

  const handleSave = () => {
    console.log("inputQ3Energy", inputQ3Energy);
  };

  return (
    <div className="EnergyDivBackground EnergyMainFlex">
      <h1 className="AreaHeading">ENERGY</h1>
      <div className="EnergyCard">
        <div className="EnergyCardContent">
          <div className="EnergyCardTitle">
            What cooling system do you use most at home?
          </div>
          <div className="OptionDivBigTitleSmallScreen">
            {inputQ3Energy === "Heat pump" ? (
              <span>
                <label className="RadioLabel EnergyCardtext">
                  Heat pump
                  <input
                    type="radio"
                    name="radio"
                    value="Heat pump"
                    onClick={handleChange}
                    checked
                  ></input>
                  <span className="checkmark"></span>
                </label>
              </span>
            ) : (
              <span>
                <label className="RadioLabel EnergyCardtext">
                  Heat pump
                  <input
                    type="radio"
                    name="radio"
                    value="Heat pump"
                    onClick={handleChange}
                  ></input>
                  <span className="checkmark"></span>
                </label>
              </span>
            )}
            {inputQ3Energy === "Fans" ? (
              <span>
                <label className="RadioLabel EnergyCardtext">
                  Fans
                  <input
                    type="radio"
                    name="radio"
                    onClick={handleChange}
                    value="Fans"
                    checked
                  ></input>
                  <span className="checkmark"></span>
                </label>
              </span>
            ) : (
              <span>
                <label className="RadioLabel EnergyCardtext">
                  Fans
                  <input
                    type="radio"
                    name="radio"
                    onClick={handleChange}
                    value="Fans"
                  ></input>
                  <span className="checkmark"></span>
                </label>
              </span>
            )}
            {inputQ3Energy === "A/C" ? (
              <span>
                <label className="RadioLabel EnergyCardtext">
                  A/C
                  <input
                    type="radio"
                    name="radio"
                    onClick={handleChange}
                    value="A/C"
                    checked
                  ></input>
                  <span className="checkmark"></span>
                </label>
              </span>
            ) : (
              <span>
                <label className="RadioLabel EnergyCardtext">
                  A/C
                  <input
                    type="radio"
                    name="radio"
                    onClick={handleChange}
                    value="A/C"
                  ></input>
                  <span className="checkmark"></span>
                </label>
              </span>
            )}
            {inputQ3Energy === "Natural ventilation" ? (
              <span>
                <label className="RadioLabel EnergyCardtext">
                  Natural ventilation
                  <input
                    type="radio"
                    name="radio"
                    onClick={handleChange}
                    value="Natural ventilation"
                    checked
                  ></input>
                  <span className="checkmark"></span>
                </label>
              </span>
            ) : (
              <span>
                <label className="RadioLabel EnergyCardtext">
                  Natural ventilation
                  <input
                    type="radio"
                    name="radio"
                    onClick={handleChange}
                    value="Natural ventilation"
                  ></input>
                  <span className="checkmark"></span>
                </label>
              </span>
            )}{" "}
            {inputQ3Energy === "None" ? (
              <span>
                <label className="RadioLabel EnergyCardtext">
                  None
                  <input
                    type="radio"
                    name="radio"
                    onClick={handleChange}
                    value="None"
                    checked
                  ></input>
                  <span className="checkmark"></span>
                </label>
              </span>
            ) : (
              <span>
                <label className="RadioLabel EnergyCardtext">
                  None
                  <input
                    type="radio"
                    name="radio"
                    onClick={handleChange}
                    value="None"
                  ></input>
                  <span className="checkmark"></span>
                </label>
              </span>
            )}
          </div>
          <div className="EnergyCardButtonsDiv">
            <div className="EnergyCardButtonsLeftDiv"></div>
            <div className="EnergyCardButtonsNavigation">
              <Link to="/Q2Energy" className="EnergyNavigationButtonsLink">
                <span className="material-symbols-outlined EnergyNavigationButtons">
                  arrow_left_alt
                </span>
              </Link>
              <Link
                onClick={handleSave}
                to="/Q4Energy"
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

export default Q3Energy;
