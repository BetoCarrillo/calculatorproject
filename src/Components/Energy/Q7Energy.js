import React, { useContext, useState } from "react";
import "../../styles/energystyle.css";
import { Link } from "react-router-dom";
import ProgressBar from "../progressbar";
import { ResultsContext } from "../../Context/context";
import CClogo from "../../styles/CClogo.png";

function Q7Energy() {
  //   const [value, setValue] = useState(2);
  const { inputQ7AEnergy, setInputQ7AEnergy } = useContext(ResultsContext);
  const { inputQ7BEnergy, setInputQ7BEnergy } = useContext(ResultsContext);
  const { inputQ7CEnergy, setInputQ7CEnergy } = useContext(ResultsContext);
  const { inputQ7DEnergy, setInputQ7DEnergy } = useContext(ResultsContext);

  const handleValueHome = (event) => {
    let value = event.target.value;
    // setValue(value);
    setInputQ7AEnergy(value);
    // console.log(value);

    // setInputQ7Energy(valueQ7Energy);
    // console.log("inputQ1Energy", inputQ1Energy);
  };

  const handleValueKitchen = (event) => {
    let value = event.target.value;
    // setValue(value);
    setInputQ7BEnergy(value);
    // console.log(value);

    // setInputQ7Energy(valueQ7Energy);
    // console.log("inputQ1Energy", inputQ1Energy);
  };
  const handleValueFridge = (event) => {
    let value = event.target.value;
    // setValue(value);
    setInputQ7CEnergy(value);
    // console.log(value);

    // setInputQ7Energy(valueQ7Energy);
    // console.log("inputQ1Energy", inputQ1Energy);
  };
  const handleValueLaundry = (event) => {
    let value = event.target.value;
    // setValue(value);
    setInputQ7DEnergy(value);
    // console.log(value);

    // setInputQ7Energy(valueQ7Energy);
    // console.log("inputQ1Energy", inputQ1Energy);
  };

  const testData = [
    { bgcolor: "#095366", completed: 77.7, question: 7, totalquestions: 9 },
  ];

  const handleSave = () => {
    console.log("inputQ7AEnergy", inputQ7AEnergy);
    console.log("inputQ7BEnergy", inputQ7BEnergy);
    console.log("inputQ7CEnergy", inputQ7CEnergy);
    console.log("inputQ7DEnergy", inputQ7DEnergy);
  };

  return (
    <div className="EnergyDivBackground EnergyMainFlex">
      <h1 className="AreaHeading">ENERGY</h1>
      <div className="EnergyCard">
        <div className="EnergyCardContent">
          <div className="EnergyCardTitle">
            How aware are you about energy savings:
          </div>
          <div>
            <div className="OptionDiv">
              <div className="OptionDivMultipleInputs">
                <div className="OptionDivMultipleInputsIndividualFlex">
                  {" "}
                  <div>At home:</div>{" "}
                  <div className="slidecontainer">
                    <input
                      onInput={handleValueHome}
                      type="range"
                      min="1"
                      max="3"
                      value={`${inputQ7AEnergy}`}
                      className="slider"
                      id="myRange"
                    ></input>{" "}
                    {inputQ7AEnergy === "1" ? (
                      <div
                        className="SliderValuesDiv"
                        style={{ textAlign: "left" }}
                      >
                        I'm not aware
                      </div>
                    ) : (
                      <div> </div>
                    )}
                    {inputQ7AEnergy === "2" ? (
                      <div
                        className="SliderValuesDiv"
                        style={{ textAlign: "center" }}
                      >
                        I'm aware but can use some tips
                      </div>
                    ) : (
                      <div></div>
                    )}
                    {inputQ7AEnergy === "3" ? (
                      <div
                        className="SliderValuesDiv"
                        style={{ textAlign: "right" }}
                      >
                        I'm a master
                      </div>
                    ) : (
                      <div></div>
                    )}{" "}
                  </div>{" "}
                </div>

                <div className="OptionDivMultipleInputsIndividualFlex">
                  <div>At the kitchen:</div>
                  <div className="slidecontainer">
                    <input
                      onInput={handleValueKitchen}
                      type="range"
                      min="1"
                      max="3"
                      value={`${inputQ7BEnergy}`}
                      className="slider"
                      id="myRange"
                    ></input>{" "}
                    {inputQ7BEnergy === "1" ? (
                      <div
                        className="SliderValuesDiv"
                        style={{ textAlign: "left" }}
                      >
                        I'm not aware
                      </div>
                    ) : (
                      <div> </div>
                    )}
                    {inputQ7BEnergy === "2" ? (
                      <div
                        className="SliderValuesDiv"
                        style={{ textAlign: "center" }}
                      >
                        I'm aware but can use some tips
                      </div>
                    ) : (
                      <div></div>
                    )}
                    {inputQ7BEnergy === "3" ? (
                      <div
                        className="SliderValuesDiv"
                        style={{ textAlign: "right" }}
                      >
                        I'm a master
                      </div>
                    ) : (
                      <div></div>
                    )}{" "}
                  </div>{" "}
                </div>

                <div className="OptionDivMultipleInputsIndividualFlex">
                  {" "}
                  <div>With your fridge and freezer:</div>
                  <div className="slidecontainer">
                    <input
                      onInput={handleValueFridge}
                      type="range"
                      min="1"
                      max="3"
                      value={`${inputQ7CEnergy}`}
                      className="slider"
                      id="myRange"
                    ></input>{" "}
                    {inputQ7CEnergy === "1" ? (
                      <div
                        className="SliderValuesDiv"
                        style={{ textAlign: "left" }}
                      >
                        I'm not aware
                      </div>
                    ) : (
                      <div> </div>
                    )}
                    {inputQ7CEnergy === "2" ? (
                      <div
                        className="SliderValuesDiv"
                        style={{ textAlign: "center" }}
                      >
                        I'm aware but can use some tips
                      </div>
                    ) : (
                      <div></div>
                    )}
                    {inputQ7CEnergy === "3" ? (
                      <div
                        className="SliderValuesDiv"
                        style={{ textAlign: "right" }}
                      >
                        I'm a master
                      </div>
                    ) : (
                      <div></div>
                    )}{" "}
                  </div>{" "}
                </div>

                <div className="OptionDivMultipleInputsIndividualFlex">
                  {" "}
                  <div>With your laundry and dishwasher:</div>
                  <div className="slidecontainer">
                    <input
                      onInput={handleValueLaundry}
                      type="range"
                      min="1"
                      max="3"
                      value={`${inputQ7DEnergy}`}
                      className="slider"
                      id="myRange"
                    ></input>{" "}
                    {inputQ7DEnergy === "1" ? (
                      <div
                        className="SliderValuesDiv"
                        style={{ textAlign: "left" }}
                      >
                        I'm not aware
                      </div>
                    ) : (
                      <div> </div>
                    )}
                    {inputQ7DEnergy === "2" ? (
                      <div
                        className="SliderValuesDiv"
                        style={{ textAlign: "center" }}
                      >
                        I'm aware but can use some tips
                      </div>
                    ) : (
                      <div></div>
                    )}
                    {inputQ7DEnergy === "3" ? (
                      <div
                        className="SliderValuesDiv"
                        style={{ textAlign: "right" }}
                      >
                        I'm a master
                      </div>
                    ) : (
                      <div></div>
                    )}{" "}
                  </div>{" "}
                </div>
              </div>

              {/* <div className="slidecontainer">
                <input
                  onInput={handleValue}
                  type="range"
                  min="1"
                  max="3"
                  value={`${inputQ7Energy}`}
                  className="slider"
                  id="myRange"
                ></input>{" "}
              </div> */}

              {/* <div className="SliderValuesDiv">
              <p>I'm not aware</p>
              <p>I'm aware but can use some additional tips</p>
              <p>I'm a master in energy saving</p>
            </div> */}

              {/* {inputQ7Energy === "1" ? (
                <div className="SliderValuesDiv" style={{ textAlign: "left" }}>
                  I'm not aware
                </div>
              ) : (
                <div> </div>
              )}
              {inputQ7Energy === "2" ? (
                <div
                  className="SliderValuesDiv"
                  style={{ textAlign: "center" }}
                >
                  I'm aware but can use some tips
                </div>
              ) : (
                <div></div>
              )}
              {inputQ7Energy === "3" ? (
                <div className="SliderValuesDiv" style={{ textAlign: "right" }}>
                  I'm a master
                </div>
              ) : (
                <div></div>
              )} */}
            </div>
          </div>

          <div className="EnergyCardButtonsDiv">
            <div className="EnergyCardButtonsLeftDiv"></div>
            <div className="EnergyCardButtonsNavigation">
              <Link to="/Q6Energy" className="EnergyNavigationButtonsLink">
                <span className="material-symbols-outlined EnergyNavigationButtons">
                  arrow_left_alt
                </span>
              </Link>
              <Link
                onClick={handleSave}
                to="/Q8Energy"
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

export default Q7Energy;
