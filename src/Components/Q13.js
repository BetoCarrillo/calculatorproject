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

function Q13() {
  const { setInputQ13 } = useContext(ResultsContext);

  const handleChange = (event) => {
    let valueQ13 = event.target.value;
    setInputQ13(valueQ13);
  };

  const redirectQ12 = useNavigate();
  const redirectQ14 = useNavigate();
  const redirectResults = useNavigate();

  const handlePrev = () => {
    redirectQ12("/Q12");
  };

  const handleNext = () => {
    redirectQ14("/Q14");
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
              What energy source do you use at home?
            </Typography>
            <br></br>
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

      <div className="QNumber">13/17</div>
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

export default Q13;
