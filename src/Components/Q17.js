import Card from "@mui/material/Card";
import React, { useContext, useEffect, useState } from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../styles/mainstyle.css";
import { Link, useNavigate } from "react-router-dom";
import FormControl from "@mui/material/FormControl";
import { TextField } from "@mui/material";
import CClogo from "../styles/CClogo.png";
import { ResultsContext } from "../Context/context";

function Q17() {
  // const [inputQ17, setInputQ17] = useState(null);
  const { inputQ17, setInputQ17 } = useContext(ResultsContext);

  const redirectQ16 = useNavigate();
  const redirectQ1 = useNavigate();
  const redirectResults = useNavigate();

  const handlePrev = () => {
    redirectQ16("/Q16");
  };
  const handleInput = (event) => {
    let valueQ17Input = event.target.value;
    setInputQ17(valueQ17Input);
  };

  const handleNext = () => {
    redirectQ1("/Results");
  };

  const handleSkip = () => {
    redirectResults("/Results");
  };

  const handleAverage = () => {
    setInputQ17(600);
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
              How much is your monthly electricity bill?
            </Typography>
            <br></br>
            <FormControl>
              <TextField
                type="number"
                placeholder={inputQ17 !== 0 ? "type in here.." : inputQ17}
                label="€"
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
                Skip all
              </Button>
            </CardActions>
          </div>
        </Card>
      </div>
      <div className="QNumber">17/17</div>
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

export default Q17;
