import React, { useContext } from "react";
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
    console.log("inputQ1Energy", inputQ1Energy);
  };

  const testData = [
    { bgcolor: "#095366", completed: 8.3, question: 1, totalquestions: 12 },
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
            What energy source do you use at home?
          </div>
          <div className="OptionDiv">
            <label className="RadioLabel">
              Normal grid
              <input
                type="radio"
                name="radio"
                value="Normal grid"
                onClick={handleChange}
              ></input>
              <span className="checkmark"></span>
            </label>
            <label className="RadioLabel">
              Mixed sources
              <input
                type="radio"
                name="radio"
                onClick={handleChange}
                value="Mixed sources"
              ></input>
              <span className="checkmark"></span>
            </label>
            <label className="RadioLabel">
              Solar
              <input
                type="radio"
                name="radio"
                onClick={handleChange}
                value="Solar"
              ></input>
              <span className="checkmark"></span>
            </label>
            <label className="RadioLabel">
              100% renewable
              <input
                type="radio"
                name="radio"
                onClick={handleChange}
                value="100% renewable"
              ></input>
              <span className="checkmark"></span>
            </label>
          </div>

          {/* 
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              className="Qtext"
            >
              <FormControlLabel
                value="Normal grid"
                control={<Radio />}
                label="Normal grid"
                onClick={handleChange}
              />
              <FormControlLabel
                value="Mixed sources"
                control={<Radio />}
                label="Mixed sources"
                onClick={handleChange}
              />
              <FormControlLabel
                value="Solar"
                control={<Radio />}
                label="Solar"
                onClick={handleChange}
              />
              <FormControlLabel
                value="100% renewable"
                control={<Radio />}
                label="Other 100% renewable"
                onClick={handleChange}
              />
            </RadioGroup>
          </FormControl> */}
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
              <Link to="/Results" className="EnergyCardButtonsSkipLink">
                <span>Skip questions</span>
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

export default Q1Energy;
