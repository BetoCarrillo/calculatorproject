import React, { useContext } from "react";
import "../styles/mainstyle.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import CClogo from "../styles/CClogo.png";
import { ResultsContext } from "../Context/context";

function GeneralQs() {
  const { inputQGHomeType, setInputQGHomeType } = useContext(ResultsContext);

  const handleChangeQGHomeType = (event) => {
    let valueQQGHomeType = event.target.id;
    setInputQGHomeType(valueQQGHomeType);
  };

  return (
    <div className="MainDivBackground ViewDiv">
      <div>
        <Link
          to="https://changeclubs.global/"
          target={"_blank"}
          rel={"noreferrer"}
        >
          <img src={CClogo} alt="Change Clubs logo" height={100}></img>
        </Link>
      </div>
      <div className="GQuestionsCard change-color">
        <div className="GQuestionsCardContent">
          <div className="GQuestionsListTitle">
            {" "}
            FIRST, SOME GENERAL QUESTIONS:
          </div>
          <div className="GQuestionsDiv">
            <div className="GQuestionsTitle">Type of building</div>
            <div className="GQuestionsTitleAnswerDiv">
              {inputQGHomeType === "" ? (
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
                    {inputQGHomeType}
                    <div className="dropdown-toggle arrowdown"></div>
                  </div>
                </button>
              )}

              <ul className="dropdown-menu scrollable-menu" role="menu">
                <li>
                  <p
                    href="Flat"
                    onClick={handleChangeQGHomeType}
                    id="Flat"
                    className="EnergyDropdownOptionAnswers"
                  >
                    Flat
                  </p>
                </li>
                <li>
                  <p
                    href="Semi-detached house"
                    onClick={handleChangeQGHomeType}
                    id="Semi-detached house"
                    className="EnergyDropdownOptionAnswers"
                  >
                    Semi-detached house
                  </p>
                </li>
                <li>
                  <p
                    href="Detached house"
                    onClick={handleChangeQGHomeType}
                    id="Detached house"
                    className="EnergyDropdownOptionAnswers"
                  >
                    Detached house
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Link to="/Modules" rel="noreferrer" className="GQuestionsStartButton">
          CHANGE MODULES
        </Link>
      </div>
    </div>
  );
}

export default GeneralQs;
