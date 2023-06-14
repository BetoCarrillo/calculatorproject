import React, { useContext, useEffect, useState } from "react";
import "../styles/mainstyle.css";
import CClogo from "../styles/CClogo.png";
import Answers from "../Components/Answers";
import Footprint from "../Components/Footprint";
import Recommendations from "../Components/Recommendations";

// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";

function Results() {
  // function createData(question, answer) {
  //   return { question, answer };
  // }

  // const rows = [
  //   createData("Country", 159, 6.0),
  //   createData("Type of building", 237, 9.0),
  //   createData("Property", 237, 9.0),
  //   createData("Built or retrofitted", 237, 9.0),
  //   createData("Insultation", 237, 9.0),
  //   createData("Smart homecontrol", 237, 9.0),
  //   createData("LED bulbs", 237, 9.0),
  //   createData("Size", 237, 9.0),
  //   createData("Bedrooms", 237, 9.0),
  //   createData("Windows", 237, 9.0),
  //   createData("People", 237, 9.0),
  //   createData("Annual kW", 237, 9.0),
  //   createData("Energy source", 237, 9.0),
  //   createData("Heating system", 237, 9.0),
  //   createData("Cooling system", 237, 9.0),
  //   createData("Water heating", 237, 9.0),
  //   createData("Monthly bill", 237, 9.0),
  // ];

  return (
    <div className="QCardDiv">
      <h1 className="AreaHeading">HOUSING</h1>
      <div className="ResultsDiv">
        <Answers />
        <div className="FootprintBiggestDiv">
          <Footprint />
          <Recommendations />
        </div>
      </div>
      <div>
        <img src={CClogo} alt="Change Clubs logo" height={50}></img>
        <p className="PoweredbyText">Powered by</p>
      </div>
    </div>
  );
}

export default Results;
