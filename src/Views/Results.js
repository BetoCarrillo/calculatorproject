import React, { useContext, useEffect, useState } from "react";
import "../styles/mainstyle.css";
import CClogo from "../styles/CClogo.png";
import Answers from "../Components/Answers";
import Footprint from "../Components/Footprint";
import Recommendations from "../Components/Recommendations";
import { Link } from "react-router-dom";

function Results() {
  return (
    <div className="QCardDiv divbackgroundHousing">
      <h1 className="AreaHeading">HOUSING</h1>
      <div className="ResultsDiv">
        <Answers />
        <div className="FootprintBiggestDiv">
          <Footprint />
          <Recommendations />
        </div>
      </div>
      <div>
        <Link
          to="https://changeclubs.global/"
          target={"_blank"}
          rel={"noreferrer"}
        >
          <img src={CClogo} alt="Change Clubs logo" height={50}></img>
        </Link>
        <p className="PoweredbyText">Powered by</p>
      </div>
    </div>
  );
}

export default Results;
