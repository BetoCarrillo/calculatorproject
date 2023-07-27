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

function Q4() {
  const { inputQ4, CalcTotal, setInputQ4 } = useContext(ResultsContext);

  const handleChange = (event) => {
    let valueQ4 = event.target.textContent;
    // console.log("valueQ4", event.target.textContent);
    setInputQ4(valueQ4);
    // console.log("InputQ4", inputQ4);
  };

  const redirectQ3 = useNavigate();
  const redirectQ5 = useNavigate();
  const redirectResults = useNavigate();

  const handlePrev = () => {
    redirectQ3("/Q3");
  };

  const handleNext = () => {
    redirectQ5("/Q5");
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
              When was it built or when was the last time it was retrofitted?
            </Typography>
            <br></br>
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-default dropdown-toggle"
                data-toggle="dropdown"
              >
                {inputQ4 === null ? (
                  <span className="caret">Choose a range</span>
                ) : (
                  <span className="caretText"> {inputQ4}</span>
                )}
                {/* {console.log(InputQ4)} */}

                {/* <span className="caret">Choose a range</span> */}
              </button>
              <ul className="dropdown-menu scrollable-menu" role="menu">
                <li>
                  <p href="#1960-1970" onClick={handleChange}>
                    {" "}
                    Before 1970
                  </p>
                </li>
                <li>
                  <p href="#1970-1980" onClick={handleChange}>
                    1970-1979
                  </p>
                </li>
                <li>
                  <p href="#1980-1990" onClick={handleChange}>
                    1980-1989
                  </p>
                </li>
                <li>
                  <p href="#1990-2000" onClick={handleChange}>
                    1990-1999
                  </p>
                </li>
                <li>
                  <p href="#2000-2010" onClick={handleChange}>
                    2000-2009
                  </p>
                </li>
                <li>
                  <p href="#2010-2020" onClick={handleChange}>
                    2010-2019
                  </p>
                </li>
                <li>
                  <p href="#2020-present" onClick={handleChange}>
                    2020-present
                  </p>
                </li>
              </ul>
            </div>

            {/* <FormControl>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                className="Qtext"
              >
                <FormControlLabel
                  value="1960-1970"
                  control={<Radio />}
                  label="1960-1970"
                  onClick={handleChange}
                />
                <FormControlLabel
                  value="1970-1980"
                  control={<Radio />}
                  label="1970-1980"
                  onClick={handleChange}
                />
                <FormControlLabel
                  value="1980-1990"
                  control={<Radio />}
                  label="1980-1990"
                  onClick={handleChange}
                />
                <FormControlLabel
                  value="1990-2000"
                  control={<Radio />}
                  label="1990-2000"
                  onClick={handleChange}
                />
                <FormControlLabel
                  value="2000-2010"
                  control={<Radio />}
                  label="2000-2010"
                  onClick={handleChange}
                />
                <FormControlLabel
                  value="2010-2020"
                  control={<Radio />}
                  label="2010-2020"
                  onClick={handleChange}
                />
                <FormControlLabel
                  value="2020-present"
                  control={<Radio />}
                  label="2020-present"
                  onClick={handleChange}
                />
              </RadioGroup>
            </FormControl> */}
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
      <div className="QNumber"> 4/17</div>
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

export default Q4;
