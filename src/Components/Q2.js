import Card from "@mui/material/Card";
import React, { useContext, useEffect, useState, Component } from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../styles/mainstyle.css";
import { Link, useNavigate } from "react-router-dom";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import CClogo from "../styles/CClogo.png";
import { ResultsContext } from "../Context/context";

function Q2() {
  const { CalcTotal, setInputQ2 } = useContext(ResultsContext);

  const handleChange = (event) => {
    let valueQ2 = event.target.value;
    // console.log("works", event.target.text);
    setInputQ2(valueQ2);
  };

  const redirectQ1 = useNavigate();
  const redirectQ3 = useNavigate();
  const redirectResults = useNavigate();

  const handlePrev = () => {
    redirectQ1("/Q1");
  };

  const handleNext = () => {
    redirectQ3("/Q3");
  };

  const handleSkip = () => {
    redirectResults("/Results");
  };

  return (
    <div className="QCardDiv">
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
              What type of building is your home?
            </Typography>
            <br></br>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                className="Qtext"
              >
                <FormControlLabel
                  value="Flat"
                  control={<Radio />}
                  label="Flat"
                  onClick={handleChange}
                />

                <FormControlLabel
                  value="Semi-detached house"
                  control={<Radio />}
                  label="Semi-detached house"
                  onClick={handleChange}
                />
                <FormControlLabel
                  value="Detached house"
                  control={<Radio />}
                  label="Detached house"
                  onClick={handleChange}
                />
              </RadioGroup>
            </FormControl>
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
                {!isNaN(CalcTotal) ? <span>Back</span> : <span>Skip all</span>}
              </Button>
            </CardActions>
          </div>
        </Card>
      </div>

      <div className="QNumber"> 2/17</div>
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

export default Q2;
