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

function Q8() {
  const { CalcTotal, inputQ8, setInputQ8 } = useContext(ResultsContext);

  const redirectQ7 = useNavigate();
  const redirectQ9 = useNavigate();
  const redirectResults = useNavigate();

  // const [inputQ8, setInputQ8] = useState(null);

  const handlePrev = () => {
    redirectQ7("/Q7");
  };

  const handleInput = (event) => {
    let valueQ8 = event.target.value;
    setInputQ8(valueQ8);
  };

  const handleNext = (event) => {
    redirectQ9("/Q9");
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
              How big is your home?
            </Typography>
            <br></br>
            <FormControl>
              <TextField
                type="number"
                placeholder="type in here.."
                label="m2"
                variant="filled"
                color="primary"
                focused
                onChange={handleInput}
              />
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

      <div className="QNumber">8/17</div>
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

export default Q8;
