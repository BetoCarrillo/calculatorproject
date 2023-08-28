import React, { useContext } from "react";
import "../../styles/energystyle.css";
import { Link, useNavigate } from "react-router-dom";
import { ResultsContext } from "../../Context/context";
import CClogo from "../../styles/CClogo.png";
import { Button } from "@mui/material";

function AnswersEnergy() {
  //   const { inputQ1Energy, setInputQ1Energy } = useContext(ResultsContext);
  const {
    inputQ1Energy,
    setInputQ1Energy,
    inputQ2Energy,
    setInputQ2Energy,
    inputQ3Energy,
    setInputQ3Energy,
    inputQ4Energy,
    setInputQ4Energy,
    inputQ5Energy,
    setInputQ5Energy,
    inputQ6Energy,
    setInputQ6Energy,
    inputQ7AEnergy,
    setInputQ7AEnergy,
    inputQ7BEnergy,
    setInputQ7BEnergy,
    inputQ7CEnergy,
    setInputQ7CEnergy,
    inputQ8Energy,
    setInputQ8Energy,
    inputQ9Energy,
    setInputQ9Energy,
    inputQ7DEnergy,
    setInputQ7DEnergy,
  } = useContext(ResultsContext);

  const handleChangeQ1 = (event) => {
    let valueQ1Energy = event.target.id;
    setInputQ1Energy(valueQ1Energy);
    // console.log("inputQ2Energy", inputQ2Energy);
  };

  const handleChangeQ2 = (event) => {
    let valueQ2Energy = event.target.id;
    setInputQ2Energy(valueQ2Energy);
    // console.log("inputQ2Energy", inputQ2Energy);
  };
  const handleChangeQ3 = (event) => {
    let valueQ3Energy = event.target.id;
    setInputQ3Energy(valueQ3Energy);
    // console.log("inputQ2Energy", inputQ2Energy);
  };
  const handleChangeQ4 = (event) => {
    let valueQ4Energy = event.target.id;
    setInputQ4Energy(valueQ4Energy);
    // console.log("inputQ2Energy", inputQ2Energy);
  };
  const handleChangeQ5 = (event) => {
    let valueQ5Energy = event.target.id;
    setInputQ5Energy(valueQ5Energy);
    // console.log("inputQ2Energy", inputQ2Energy);
  };
  const handleChangeQ6 = (event) => {
    let valueQ6Energy = event.target.id;
    setInputQ6Energy(valueQ6Energy);
  };
  const handleChangeQ7A = (event) => {
    let valueQ7AEnergy = event.target.id;
    setInputQ7AEnergy(valueQ7AEnergy);
  };
  const handleChangeQ7B = (event) => {
    let valueQ7BEnergy = event.target.id;
    setInputQ7BEnergy(valueQ7BEnergy);
  };
  const handleChangeQ7C = (event) => {
    let valueQ7CEnergy = event.target.id;
    setInputQ7CEnergy(valueQ7CEnergy);
  };
  const handleChangeQ7D = (event) => {
    let valueQ7DEnergy = event.target.id;
    setInputQ7DEnergy(valueQ7DEnergy);
  };
  const handleChangeQ8 = (event) => {
    let valueQ8Energy = event.target.id;
    setInputQ8Energy(valueQ8Energy);
  };
  const handleChangeQ9 = (event) => {
    let valueQ9Energy = event.target.id;
    setInputQ9Energy(valueQ9Energy);
  };

  const redirectStartOver = useNavigate();
  const handleStart = () => {
    redirectStartOver("/Q1Energy");
  };

  return (
    <div className="EnergyCardAnswers">
      <div className="EnergyCardContentAnswers">
        <div className="EnergyCardTitleAnswers">Your Answers</div>
        <div className="OptionDivAnswers">
          <div className="TableAnswers">
            {/* <div className="TableRow ">
                <div className="TableColumn TableTitleText">Question</div>
                <div className="TableColumn TableTitleText">Answer</div>
              </div> */}
            <div className="TableRow">
              <div className="TableColumnQuestions TableText">
                Energy source
              </div>
              <div className="TableColumnAns TableText">
                {inputQ1Energy === "" ? (
                  <button
                    type="button"
                    className=" ownbutton DropdownButtonAnswers dropddown-toggle-own"
                    data-toggle="dropdown"
                    style={{
                      width: "auto",
                    }}
                  >
                    <div
                      className=" AnswerInput"
                      style={{
                        color: "#095366",
                        textDecoration: "none",
                        fontFamily: "Palanquin",
                      }}
                    >
                      Choose
                      <div className="dropdown-toggle arrowdown"></div>
                    </div>
                  </button>
                ) : (
                  <button
                    type="button"
                    className="ownbutton DropdownButtonAnswers dropddown-toggle-own "
                    data-toggle="dropdown"
                    style={{
                      width: "auto",
                    }}
                  >
                    {" "}
                    <div
                      className=" AnswerInput"
                      style={{
                        fontFamily: "Palanquin",
                      }}
                    >
                      {inputQ1Energy}
                      <div className="dropdown-toggle arrowdown"></div>
                    </div>
                  </button>
                )}

                <ul className="dropdown-menu scrollable-menu" role="menu">
                  <li>
                    <p
                      href="#Normal grid"
                      onClick={handleChangeQ1}
                      id="Normal grid"
                      className="EnergyDropdownOptionAnswers"
                    >
                      {" "}
                      Normal grid
                    </p>
                  </li>
                  <li>
                    <p
                      href="#Mixed sources"
                      onClick={handleChangeQ1}
                      id="Mixed sources"
                      className="EnergyDropdownOptionAnswers"
                    >
                      Mixed sources
                    </p>
                  </li>
                  <li>
                    <p
                      href="Solar energy"
                      onClick={handleChangeQ1}
                      id="Solar energy"
                      className="EnergyDropdownOptionAnswers"
                    >
                      Solar energy
                    </p>
                  </li>
                  <li>
                    <p
                      href="100% renewable"
                      onClick={handleChangeQ1}
                      id="100% renewable"
                      className="EnergyDropdownOptionAnswers"
                    >
                      100% renewable
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="TableRow">
              <div className="TableColumnQuestions TableText">Heating type</div>
              <div className="TableColumnAns TableText">
                {inputQ2Energy === "" ? (
                  <button
                    type="button"
                    className=" ownbutton DropdownButtonAnswers dropddown-toggle-own "
                    data-toggle="dropdown"
                    style={{
                      width: "auto",
                    }}
                  >
                    <div
                      className=" AnswerInput"
                      style={{
                        textDecoration: "none",
                        fontFamily: "Palanquin",
                      }}
                    >
                      Choose
                      <div className="dropdown-toggle arrowdown"></div>
                    </div>
                  </button>
                ) : (
                  <button
                    type="button"
                    className="ownbutton DropdownButtonAnswers dropddown-toggle-own "
                    data-toggle="dropdown"
                    style={{
                      width: "auto",
                    }}
                  >
                    <div
                      className=" AnswerInput"
                      style={{
                        fontFamily: "Palanquin",
                      }}
                    >
                      {inputQ2Energy}
                      <div className="dropdown-toggle arrowdown"></div>
                    </div>
                  </button>
                )}

                <ul className="dropdown-menu scrollable-menu" role="menu">
                  <li>
                    <p
                      href="#Heat pump"
                      onClick={handleChangeQ2}
                      id="Heat pump"
                      className="EnergyDropdownOptionAnswers"
                    >
                      {" "}
                      Heat pump
                    </p>
                  </li>
                  <li>
                    <p
                      href="#Electricity"
                      onClick={handleChangeQ2}
                      id="Electricity"
                      className="EnergyDropdownOptionAnswers"
                    >
                      Electricity
                    </p>
                  </li>
                  <li>
                    <p
                      href="#Methane (natural gas)"
                      onClick={handleChangeQ2}
                      id="Methane (natural gas)"
                      className="EnergyDropdownOptionAnswers"
                    >
                      Methane (natural gas)
                    </p>
                  </li>
                  <li>
                    <p
                      href="#Heating oil"
                      onClick={handleChangeQ2}
                      id="Heating oil"
                      className="EnergyDropdownOptionAnswers"
                    >
                      Heating oil
                    </p>
                  </li>
                  <li>
                    <p
                      href="#Wood pellets"
                      onClick={handleChangeQ2}
                      id="Wood pellets"
                      className="EnergyDropdownOptionAnswers"
                    >
                      Wood pellets
                    </p>
                  </li>
                  <li>
                    <p
                      href="#Biogas"
                      onClick={handleChangeQ2}
                      id="Biogas"
                      className="EnergyDropdownOptionAnswers"
                    >
                      Biogas
                    </p>
                  </li>
                  <li>
                    <p
                      href="#None"
                      onClick={handleChangeQ2}
                      id="None"
                      className="EnergyDropdownOptionAnswers"
                    >
                      None
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="TableRow">
              <div className="TableColumnQuestions TableText">
                Cooling system
              </div>
              <div className="TableColumnAns TableText">
                {inputQ3Energy === "" ? (
                  <button
                    type="button"
                    className=" ownbutton DropdownButtonAnswers dropddown-toggle-own "
                    data-toggle="dropdown"
                    style={{
                      width: "auto",
                    }}
                  >
                    <div
                      className=" AnswerInput"
                      style={{
                        textDecoration: "none",
                        fontFamily: "Palanquin",
                      }}
                    >
                      Choose
                      <div className="dropdown-toggle arrowdown"></div>
                    </div>
                  </button>
                ) : (
                  <button
                    type="button"
                    className="ownbutton DropdownButtonAnswers dropddown-toggle-own "
                    data-toggle="dropdown"
                    style={{
                      width: "auto",
                    }}
                  >
                    <div
                      className=" AnswerInput"
                      style={{
                        fontFamily: "Palanquin",
                      }}
                    >
                      {inputQ3Energy}
                      <div className="dropdown-toggle arrowdown"></div>
                    </div>
                  </button>
                )}

                <ul className="dropdown-menu scrollable-menu" role="menu">
                  <li>
                    <p
                      href="#Heat pump"
                      onClick={handleChangeQ3}
                      id="Heat pump"
                      className="EnergyDropdownOptionAnswers"
                    >
                      {" "}
                      Heat pump
                    </p>
                  </li>
                  <li>
                    <p
                      href="#Fans"
                      onClick={handleChangeQ3}
                      id="Fans"
                      className="EnergyDropdownOptionAnswers"
                    >
                      Fans
                    </p>
                  </li>
                  <li>
                    <p
                      href="A/C"
                      onClick={handleChangeQ3}
                      id="A/C"
                      className="EnergyDropdownOptionAnswers"
                    >
                      A/C
                    </p>
                  </li>
                  <li>
                    <p
                      href="Natural ventilation"
                      onClick={handleChangeQ3}
                      id="Natural ventilation"
                      className="EnergyDropdownOptionAnswers"
                    >
                      Natural ventilation
                    </p>
                  </li>
                  <li>
                    <p
                      href="None"
                      onClick={handleChangeQ3}
                      id="None"
                      className="EnergyDropdownOptionAnswers"
                    >
                      None
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="TableRow">
              <div className="TableColumnQuestions TableText">
                Water heating
              </div>
              <div className="TableColumnAns TableText">
                {" "}
                {inputQ4Energy === "" ? (
                  <button
                    type="button"
                    className=" ownbutton DropdownButtonAnswers dropddown-toggle-own "
                    data-toggle="dropdown"
                    style={{
                      width: "auto",
                    }}
                  >
                    <div
                      className=" AnswerInput"
                      style={{
                        textDecoration: "none",
                        fontFamily: "Palanquin",
                      }}
                    >
                      Choose
                      <div className="dropdown-toggle arrowdown"></div>
                    </div>
                  </button>
                ) : (
                  <button
                    type="button"
                    className="ownbutton DropdownButtonAnswers dropddown-toggle-own "
                    data-toggle="dropdown"
                    style={{
                      width: "auto",
                    }}
                  >
                    <div
                      className=" AnswerInput"
                      style={{
                        fontFamily: "Palanquin",
                      }}
                    >
                      {inputQ4Energy}
                      <div className="dropdown-toggle arrowdown"></div>
                    </div>
                  </button>
                )}
                <ul className="dropdown-menu scrollable-menu" role="menu">
                  <li>
                    <p
                      href="Electricity"
                      onClick={handleChangeQ4}
                      id="Electricity"
                      className="EnergyDropdownOptionAnswers"
                    >
                      {" "}
                      Electricity
                    </p>
                  </li>
                  <li>
                    <p
                      href="Gas or Heating oil"
                      onClick={handleChangeQ4}
                      id="Gas or Heating oil"
                      className="EnergyDropdownOptionAnswers"
                    >
                      Gas or Heating oil
                    </p>
                  </li>
                  <li>
                    <p
                      href="Biogas"
                      onClick={handleChangeQ4}
                      id="Biogas"
                      className="EnergyDropdownOptionAnswers"
                    >
                      Biogas
                    </p>
                  </li>
                  <li>
                    <p
                      href="Solar energy"
                      onClick={handleChangeQ4}
                      id="Solar energy"
                      className="EnergyDropdownOptionAnswers"
                    >
                      Solar energy
                    </p>
                  </li>
                  <li>
                    <p
                      href="I don't know"
                      onClick={handleChangeQ4}
                      id="I don't know"
                      className="EnergyDropdownOptionAnswers"
                    >
                      I don't know
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="TableRow">
              <div className="TableColumnQuestions TableText">Data storage</div>
              <div className="TableColumnAns TableText">
                {" "}
                {inputQ5Energy === "" ? (
                  <button
                    type="button"
                    className=" ownbutton DropdownButtonAnswers dropddown-toggle-own "
                    data-toggle="dropdown"
                    style={{
                      width: "auto",
                    }}
                  >
                    <div
                      className=" AnswerInput"
                      style={{
                        textDecoration: "none",
                        fontFamily: "Palanquin",
                      }}
                    >
                      Choose
                      <div className="dropdown-toggle arrowdown"></div>
                    </div>
                  </button>
                ) : (
                  <button
                    type="button"
                    className="ownbutton DropdownButtonAnswers dropddown-toggle-own "
                    data-toggle="dropdown"
                    style={{
                      width: "auto",
                    }}
                  >
                    <div
                      className=" AnswerInput"
                      style={{
                        fontFamily: "Palanquin",
                      }}
                    >
                      {inputQ5Energy}
                      <div className="dropdown-toggle arrowdown"></div>
                    </div>
                  </button>
                )}
                <ul className="dropdown-menu scrollable-menu" role="menu">
                  <li>
                    <p
                      href="Hard drive"
                      onClick={handleChangeQ5}
                      id="Hard drive"
                      className="EnergyDropdownOptionAnswers"
                    >
                      {" "}
                      Hard drive
                    </p>
                  </li>
                  <li>
                    <p
                      href="Cloud service"
                      onClick={handleChangeQ5}
                      id="Cloud service"
                      className="EnergyDropdownOptionAnswers"
                    >
                      Cloud service
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="TableRow">
              <div className="TableColumnQuestions TableText">
                Music audio or videos
              </div>
              <div className="TableColumnAns TableText">
                {" "}
                {inputQ6Energy === "" ? (
                  <button
                    type="button"
                    className=" ownbutton DropdownButtonAnswers dropddown-toggle-own "
                    data-toggle="dropdown"
                    style={{
                      width: "auto",
                    }}
                  >
                    <div
                      className=" AnswerInput"
                      style={{
                        textDecoration: "none",
                        fontFamily: "Palanquin",
                      }}
                    >
                      Choose
                      <div className="dropdown-toggle arrowdown"></div>
                    </div>
                  </button>
                ) : (
                  <button
                    type="button"
                    className="ownbutton DropdownButtonAnswers dropddown-toggle-own "
                    data-toggle="dropdown"
                    style={{
                      width: "auto",
                    }}
                  >
                    <div
                      className=" AnswerInput"
                      style={{
                        fontFamily: "Palanquin",
                      }}
                    >
                      {inputQ6Energy}
                      <div className="dropdown-toggle arrowdown"></div>
                    </div>
                  </button>
                )}
                <ul className="dropdown-menu scrollable-menu" role="menu">
                  <li>
                    <p
                      href="Music-videos"
                      onClick={handleChangeQ6}
                      id="Music-videos"
                      className="EnergyDropdownOptionAnswers"
                    >
                      {" "}
                      Music-videos
                    </p>
                  </li>
                  <li>
                    <p
                      href="Music only"
                      onClick={handleChangeQ6}
                      id="Music only"
                      className="EnergyDropdownOptionAnswers"
                    >
                      Music only
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="TableRow">
              <div className="TableColumnQuestions TableText">Home saving</div>
              <div className="TableColumnAns TableText">
                {" "}
                {inputQ7AEnergy === "" ? (
                  <button
                    type="button"
                    className=" ownbutton DropdownButtonAnswers dropddown-toggle-own "
                    data-toggle="dropdown"
                    style={{
                      width: "auto",
                    }}
                  >
                    <div
                      className=" AnswerInput"
                      style={{
                        textDecoration: "none",
                        fontFamily: "Palanquin",
                      }}
                    >
                      Choose
                      <div className="dropdown-toggle arrowdown"></div>
                    </div>
                  </button>
                ) : (
                  <button
                    type="button"
                    className="ownbutton DropdownButtonAnswers dropddown-toggle-own "
                    data-toggle="dropdown"
                    style={{
                      width: "auto",
                    }}
                  >
                    <div
                      className=" AnswerInput"
                      style={{
                        fontFamily: "Palanquin",
                      }}
                    >
                      {inputQ7AEnergy === "1" ? (
                        <div className="SavingInputAnswer">I'm not aware</div>
                      ) : (
                        ""
                      )}
                      {inputQ7AEnergy === "2" ? (
                        <div className="SavingInputAnswer">
                          Can use some tips
                        </div>
                      ) : (
                        ""
                      )}
                      {inputQ7AEnergy === "3" ? (
                        <div className="SavingInputAnswer">I'm a master</div>
                      ) : (
                        ""
                      )}
                      {/* {inputQ7AEnergy} */}
                      <div className="dropdown-toggle arrowdown"></div>
                    </div>
                  </button>
                )}
                <ul className="dropdown-menu scrollable-menu" role="menu">
                  <li>
                    <p
                      href="I'm not aware"
                      onClick={handleChangeQ7A}
                      id="1"
                      className="EnergyDropdownOptionAnswers"
                    >
                      {" "}
                      I'm not aware
                    </p>
                  </li>
                  <li>
                    <p
                      href="I'm aware but can use some tips"
                      onClick={handleChangeQ7A}
                      id="2"
                      className="EnergyDropdownOptionAnswers"
                    >
                      Can use some tips
                    </p>
                  </li>
                  <li>
                    <p
                      href="I'm a master"
                      onClick={handleChangeQ7A}
                      id="3"
                      className="EnergyDropdownOptionAnswers"
                    >
                      I'm a master
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="TableRow">
              <div className="TableColumnQuestions TableText">
                Kitchen saving
              </div>
              <div className="TableColumnAns TableText">
                {" "}
                {inputQ7BEnergy === "" ? (
                  <button
                    type="button"
                    className=" ownbutton DropdownButtonAnswers dropddown-toggle-own "
                    data-toggle="dropdown"
                    style={{
                      width: "auto",
                    }}
                  >
                    <div
                      className=" AnswerInput"
                      style={{
                        textDecoration: "none",
                        fontFamily: "Palanquin",
                      }}
                    >
                      Choose
                      <div className="dropdown-toggle arrowdown"></div>
                    </div>
                  </button>
                ) : (
                  <button
                    type="button"
                    className="ownbutton DropdownButtonAnswers dropddown-toggle-own "
                    data-toggle="dropdown"
                    style={{
                      width: "auto",
                    }}
                  >
                    <div
                      className=" AnswerInput"
                      style={{
                        fontFamily: "Palanquin",
                      }}
                    >
                      {inputQ7BEnergy === "1" ? (
                        <div className="SavingInputAnswer">I'm not aware</div>
                      ) : (
                        ""
                      )}
                      {inputQ7BEnergy === "2" ? (
                        <div className="SavingInputAnswer">
                          Can use some tips
                        </div>
                      ) : (
                        ""
                      )}
                      {inputQ7BEnergy === "3" ? (
                        <div className="SavingInputAnswer">I'm a master</div>
                      ) : (
                        ""
                      )}
                      {/* {inputQ7AEnergy} */}
                      <div className="dropdown-toggle arrowdown"></div>
                    </div>
                  </button>
                )}
                <ul className="dropdown-menu scrollable-menu" role="menu">
                  <li>
                    <p
                      href="I'm not aware"
                      onClick={handleChangeQ7B}
                      id="1"
                      className="EnergyDropdownOptionAnswers"
                    >
                      {" "}
                      I'm not aware
                    </p>
                  </li>
                  <li>
                    <p
                      href="I'm aware but can use some tips"
                      onClick={handleChangeQ7B}
                      id="2"
                      className="EnergyDropdownOptionAnswers"
                    >
                      Can use some tips
                    </p>
                  </li>
                  <li>
                    <p
                      href="I'm a master"
                      onClick={handleChangeQ7B}
                      id="3"
                      className="EnergyDropdownOptionAnswers"
                    >
                      I'm a master
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="TableRow">
              <div className="TableColumnQuestions TableText">
                Fridge saving
              </div>
              <div className="TableColumnAns TableText">
                {" "}
                {inputQ7CEnergy === "" ? (
                  <button
                    type="button"
                    className=" ownbutton DropdownButtonAnswers dropddown-toggle-own "
                    data-toggle="dropdown"
                    style={{
                      width: "auto",
                    }}
                  >
                    <div
                      className=" AnswerInput"
                      style={{
                        textDecoration: "none",
                        fontFamily: "Palanquin",
                      }}
                    >
                      Choose
                      <div className="dropdown-toggle arrowdown"></div>
                    </div>
                  </button>
                ) : (
                  <button
                    type="button"
                    className="ownbutton DropdownButtonAnswers dropddown-toggle-own "
                    data-toggle="dropdown"
                    style={{
                      width: "auto",
                    }}
                  >
                    <div
                      className=" AnswerInput"
                      style={{
                        fontFamily: "Palanquin",
                      }}
                    >
                      {inputQ7CEnergy === "1" ? (
                        <div className="SavingInputAnswer">I'm not aware</div>
                      ) : (
                        ""
                      )}
                      {inputQ7CEnergy === "2" ? (
                        <div className="SavingInputAnswer">
                          Can use some tips
                        </div>
                      ) : (
                        ""
                      )}
                      {inputQ7CEnergy === "3" ? (
                        <div className="SavingInputAnswer">I'm a master</div>
                      ) : (
                        ""
                      )}
                      {/* {inputQ7AEnergy} */}
                      <div className="dropdown-toggle arrowdown"></div>
                    </div>
                  </button>
                )}
                <ul className="dropdown-menu scrollable-menu" role="menu">
                  <li>
                    <p
                      href="I'm not aware"
                      onClick={handleChangeQ7C}
                      id="1"
                      className="EnergyDropdownOptionAnswers"
                    >
                      {" "}
                      I'm not aware
                    </p>
                  </li>
                  <li>
                    <p
                      href="I'm aware but can use some tips"
                      onClick={handleChangeQ7C}
                      id="2"
                      className="EnergyDropdownOptionAnswers"
                    >
                      I'm aware but can use some tips
                    </p>
                  </li>
                  <li>
                    <p
                      href="I'm a master"
                      onClick={handleChangeQ7C}
                      id="3"
                      className="EnergyDropdownOptionAnswers"
                    >
                      I'm a master
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="TableRow">
              <div className="TableColumnQuestions TableText">
                Laundry saving
              </div>
              <div className="TableColumnAns TableText">
                {inputQ7DEnergy === "" ? (
                  <button
                    type="button"
                    className=" ownbutton DropdownButtonAnswers dropddown-toggle-own "
                    data-toggle="dropdown"
                    style={{
                      width: "auto",
                    }}
                  >
                    <div
                      className=" AnswerInput"
                      style={{
                        textDecoration: "none",
                        fontFamily: "Palanquin",
                      }}
                    >
                      Choose
                      <div className="dropdown-toggle arrowdown"></div>
                    </div>
                  </button>
                ) : (
                  <button
                    type="button"
                    className="ownbutton DropdownButtonAnswers dropddown-toggle-own "
                    data-toggle="dropdown"
                    style={{
                      width: "auto",
                    }}
                  >
                    <div
                      className=" AnswerInput"
                      style={{
                        fontFamily: "Palanquin",
                      }}
                    >
                      {inputQ7DEnergy === "1" ? (
                        <div className="SavingInputAnswer">I'm not aware</div>
                      ) : (
                        ""
                      )}
                      {inputQ7DEnergy === "2" ? (
                        <div className="SavingInputAnswer">
                          Can use some tips
                        </div>
                      ) : (
                        ""
                      )}
                      {inputQ7DEnergy === "3" ? (
                        <div className="SavingInputAnswer">I'm a master</div>
                      ) : (
                        ""
                      )}
                      {/* {inputQ7AEnergy} */}
                      <div className="dropdown-toggle arrowdown"></div>
                    </div>
                  </button>
                )}
                <ul className="dropdown-menu scrollable-menu" role="menu">
                  <li>
                    <p
                      href="I'm not aware"
                      onClick={handleChangeQ7D}
                      id="1"
                      className="EnergyDropdownOptionAnswers"
                    >
                      {" "}
                      I'm not aware
                    </p>
                  </li>
                  <li>
                    <p
                      href="I'm aware but can use some tips"
                      onClick={handleChangeQ7D}
                      id="2"
                      className="EnergyDropdownOptionAnswers"
                    >
                      Can use some tips
                    </p>
                  </li>
                  <li>
                    <p
                      href="I'm a master"
                      onClick={handleChangeQ7D}
                      id="3"
                      className="EnergyDropdownOptionAnswers"
                    >
                      I'm a master
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="TableRow">
              <div className="TableColumnQuestions TableText">Appliances</div>
              <div className="TableColumnAns TableText">
                {" "}
                {inputQ8Energy === "" ? (
                  <button
                    type="button"
                    className=" ownbutton DropdownButtonAnswers dropddown-toggle-own "
                    data-toggle="dropdown"
                    style={{
                      width: "auto",
                    }}
                  >
                    <div
                      className=" AnswerInput"
                      style={{
                        textDecoration: "none",
                        fontFamily: "Palanquin",
                      }}
                    >
                      Choose
                      <div className="dropdown-toggle arrowdown"></div>
                    </div>
                  </button>
                ) : (
                  <button
                    type="button"
                    className="ownbutton DropdownButtonAnswers dropddown-toggle-own "
                    data-toggle="dropdown"
                    style={{
                      width: "auto",
                    }}
                  >
                    <div
                      className=" AnswerInput"
                      style={{
                        fontFamily: "Palanquin",
                      }}
                    >
                      {inputQ8Energy}
                      <div className="dropdown-toggle arrowdown"></div>
                    </div>
                  </button>
                )}
                <ul className="dropdown-menu scrollable-menu" role="menu">
                  <li>
                    <p
                      href="Energy efficient"
                      onClick={handleChangeQ8}
                      id="Energy efficient"
                      className="EnergyDropdownOptionAnswers"
                    >
                      {" "}
                      Energy efficient
                    </p>
                  </li>
                  <li>
                    <p
                      href="#Not energy efficient"
                      onClick={handleChangeQ8}
                      id="Not energy efficient"
                      className="EnergyDropdownOptionAnswers"
                    >
                      Not energy efficient
                    </p>
                  </li>
                </ul>
              </div>
            </div>{" "}
            <div className="TableRow">
              <div className="TableColumnQuestions TableText">
                Plumbing fixtures
              </div>
              <div className="TableColumnAns TableText">
                {" "}
                {inputQ9Energy === "" ? (
                  <button
                    type="button"
                    className=" ownbutton DropdownButtonAnswers dropddown-toggle-own "
                    data-toggle="dropdown"
                    style={{
                      width: "auto",
                    }}
                  >
                    <div
                      className=" AnswerInput"
                      style={{
                        textDecoration: "none",
                        fontFamily: "Palanquin",
                      }}
                    >
                      Choose
                      <div className="dropdown-toggle arrowdown"></div>
                    </div>
                  </button>
                ) : (
                  <button
                    type="button"
                    className="ownbutton DropdownButtonAnswers dropddown-toggle-own "
                    data-toggle="dropdown"
                    style={{
                      width: "auto",
                    }}
                  >
                    <div
                      className=" AnswerInput"
                      style={{
                        fontFamily: "Palanquin",
                      }}
                    >
                      {inputQ9Energy}
                      <div className="dropdown-toggle arrowdown"></div>
                    </div>
                  </button>
                )}
                <ul className="dropdown-menu scrollable-menu" role="menu">
                  <li>
                    <p
                      href="Yes"
                      onClick={handleChangeQ9}
                      id="Yes"
                      className="EnergyDropdownOptionAnswers"
                    >
                      {" "}
                      Yes
                    </p>
                  </li>
                  <li>
                    <p
                      href="No"
                      onClick={handleChangeQ9}
                      id="No"
                      className="EnergyDropdownOptionAnswers"
                    >
                      No
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="StartOverButtonDiv">
          {" "}
          <Button
            variant="contained"
            className="StartOverButton"
            onClick={handleStart}
          >
            START OVER
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AnswersEnergy;
