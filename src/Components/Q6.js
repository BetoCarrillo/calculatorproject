import Card from "@mui/material/Card";
import React, { useContext, useEffect, useState } from "react";
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

function Q6() {
  const { CalcTotal, setInputQ6 } = useContext(ResultsContext);

  const handleChange = (event) => {
    let valueQ6 = event.target.value;
    setInputQ6(valueQ6);
  };

  const redirectQ5 = useNavigate();
  const redirectQ7 = useNavigate();
  const redirectResults = useNavigate();

  const handlePrev = () => {
    redirectQ5("/Q5");
  };

  const handleNext = () => {
    redirectQ7("/Q7");
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
              Does it have a smart homecontrol?
            </Typography>
            <br></br>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                className="Qtext"
              >
                <FormControlLabel
                  value="yes"
                  control={<Radio />}
                  label="Yes"
                  onClick={handleChange}
                />
                <FormControlLabel
                  value="no"
                  control={<Radio />}
                  label="No"
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
                {isNaN(CalcTotal) ? <span>Back</span> : <span>Skip all</span>}
              </Button>
            </CardActions>
          </div>
        </Card>
      </div>

      <div className="QNumber"> 6/17</div>
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

export default Q6;
