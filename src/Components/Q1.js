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

function Q1() {
  const { CalcTotal, setInputQ1 } = useContext(ResultsContext);

  const handleChange = (event) => {
    let valueQ1 = event.target.value;
    setInputQ1(valueQ1);
  };

  const redirectLanding = useNavigate();
  const redirectQ2 = useNavigate();
  const redirectResults = useNavigate();

  const handlePrev = () => {
    redirectLanding("/");
  };

  const handleNext = () => {
    redirectQ2("/Q2");
  };

  const handleSkip = () => {
    redirectResults("/Results");
  };

  return (
    <div className="QCardDiv">
      <h1 className="AreaHeading">HOUSING</h1>

      <Card className="QCard">
        <CardContent className="QCardContent">
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className="QTitle"
          >
            In which country do you live?
          </Typography>
          <br></br>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              className="Qtext"
            >
              <FormControlLabel
                value="Germany"
                control={<Radio />}
                checked
                label="Germany"
                onClick={handleChange}
              />
            </RadioGroup>
          </FormControl>
        </CardContent>

        <div className="QCardButtons">
          <CardActions className="QButtons">
            <Button size="small" onClick={handlePrev}>
              <span className="material-symbols-outlined">arrow_left_alt</span>
            </Button>
            <Button size="small" onClick={handleNext}>
              <span className="material-symbols-outlined">arrow_right_alt</span>
            </Button>{" "}
            <Button size="small" onClick={handleSkip} className="ButtonSkipAll">
              {!isNaN(CalcTotal) ? <span>Back</span> : <span>Skip all</span>}
            </Button>
          </CardActions>
        </div>
      </Card>

      <div className="QNumber"> 1/17</div>
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

export default Q1;
