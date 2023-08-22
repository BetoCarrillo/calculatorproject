import Card from "@mui/material/Card";
import React, { useContext, useEffect, useState } from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../styles/mainstyle.css";
import { Link, useNavigate } from "react-router-dom";
import CClogo from "../styles/CClogo.png";
import FormControl from "@mui/material/FormControl";
import { TextField } from "@mui/material";
import { ResultsContext } from "../Context/context";

function Q12() {
  const { CalcTotal, inputQ12, setInputQ12 } = useContext(ResultsContext);
  // const handleChange = (event) => {
  //   let valueQ2 = event.target.value;
  //   console.log(valueQ2);
  // };

  const redirectQ11 = useNavigate();
  const redirectQ13 = useNavigate();
  const redirectResults = useNavigate();

  const handlePrev = () => {
    redirectQ11("/Q11");
  };

  const handleInput = (event) => {
    let valueQ12 = event.target.value;
    setInputQ12(valueQ12);
  };

  const handleNext = () => {
    redirectQ13("/Q13");
  };

  const handleSkip = () => {
    redirectResults("/Results");
  };

  const handleAverage = () => {
    setInputQ12(150);
    redirectQ13("/Q13");
  };

  return (
    <div className="QCardDiv divbackgroundHousing">
      <h1 className="AreaHeading">HOUSING</h1>
      <div>
        <Card className="QCard">
          <CardContent className="QCardContent">
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="QTitle"
            >
              What is your annual electricity consumption?
            </Typography>
            <br></br>
            <FormControl>
              <TextField
                type="number"
                placeholder="type consumption"
                label="kW"
                variant="filled"
                color="primary"
                focused
                onChange={handleInput}
              />
            </FormControl>
            <br></br>
            <Button
              size="small"
              onClick={handleAverage}
              className="ButtonAverageText"
            >
              Use average
            </Button>
          </CardContent>

          <div className="QCardButtons">
            <CardActions className="QButtons">
              <Button size="small" onClick={handlePrev}>
                <span className="material-symbols-outlined">
                  arrow_left_alt
                </span>
              </Button>
              <Button size="small" onClick={handleNext}>
                <span className="material-symbols-outlined">
                  arrow_right_alt
                </span>
              </Button>{" "}
              <Button
                size="small"
                onClick={handleSkip}
                className="ButtonSkipAll"
              >
                {isNaN(CalcTotal) ? <span>Back</span> : <span>Skip all</span>}
              </Button>
            </CardActions>
          </div>
        </Card>
      </div>

      <div className="QNumber">12/17</div>
      <div className="CClogo">
        <Link
          to="https://changeclubs.global/"
          target={"_blank"}
          rel={"noreferrer"}
        >
          <img src={CClogo} alt="Change Clubs logo" height={50}></img>
        </Link>
        <p className="PoweredbyText">Powered</p>
      </div>
    </div>
  );
}

export default Q12;
