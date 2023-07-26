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

function Q15() {
  const { setInputQ15 } = useContext(ResultsContext);

  const handleChange = (event) => {
    let valueQ15 = event.target.value;
    setInputQ15(valueQ15);
  };

  const redirectQ14 = useNavigate();
  const redirectQ16 = useNavigate();
  const redirectResults = useNavigate();

  const handlePrev = () => {
    redirectQ14("/Q14");
  };

  const handleNext = () => {
    redirectQ16("/Q16");
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
              What cooling system do you use the most?
            </Typography>
            <br></br>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                className="Qtext"
              >
                <FormControlLabel
                  value="Heat pump"
                  control={<Radio />}
                  label="Heat pump"
                  onClick={handleChange}
                />
                <FormControlLabel
                  value="Fans"
                  control={<Radio />}
                  label="Fans"
                  onClick={handleChange}
                />
                <FormControlLabel
                  value="A/C"
                  control={<Radio />}
                  label="A/C"
                  onClick={handleChange}
                />
                <FormControlLabel
                  value="Natural ventilation"
                  control={<Radio />}
                  label="Natural ventilation"
                  onClick={handleChange}
                />
                {/* <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                  onClick={handleChange}
                /> */}
                <FormControlLabel
                  value="None"
                  control={<Radio />}
                  label="None"
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
                Skip all
              </Button>
            </CardActions>
          </div>
        </Card>
      </div>

      <div className="QNumber">15/17</div>
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

export default Q15;
