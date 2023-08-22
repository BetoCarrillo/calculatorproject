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

function Q14() {
  const { CalcTotal, inputQ14, setInputQ14 } = useContext(ResultsContext);

  const handleChange = (event) => {
    let valueQ14 = event.target.id;
    console.log("valueQ14", valueQ14);
    setInputQ14(valueQ14);
    console.log("inputQ14", inputQ14);
  };

  const redirectQ13 = useNavigate();
  const redirectQ15 = useNavigate();
  const redirectResults = useNavigate();

  const handlePrev = () => {
    redirectQ13("/Q13");
  };

  const handleNext = () => {
    redirectQ15("/Q15");
  };

  const handleSkip = () => {
    redirectResults("/Results");
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
              How do you heat your home?
            </Typography>
            <br></br>
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-default dropdown-toggle"
                data-toggle="dropdown"
              >
                {inputQ14 === null ? (
                  <span className="caret">Choose a type</span>
                ) : (
                  <span className="caretText"> {inputQ14}</span>
                )}
              </button>
              <ul className="dropdown-menu scrollable-menu" role="menu">
                <li>
                  <p href="#Heat pump" onClick={handleChange} id="Heatpump">
                    {" "}
                    Heat pump
                  </p>
                </li>
                <li>
                  <p
                    href="#Electricity"
                    onClick={handleChange}
                    id="Electricity"
                  >
                    Electricity
                  </p>
                </li>
                <li>
                  <p
                    href="#Methane (natural gas)"
                    onClick={handleChange}
                    id="Methane"
                  >
                    Methane (natural gas)
                  </p>
                </li>
                <li>
                  <p
                    href="#Heatingoil oil"
                    onClick={handleChange}
                    id="Heatingoil"
                  >
                    Heating oil
                  </p>
                </li>
                <li>
                  <p
                    href="#Wood pellets"
                    onClick={handleChange}
                    id="Woodpellets"
                  >
                    Wood pellets
                  </p>
                </li>
                <li>
                  <p href="#Biogas" onClick={handleChange} id="Biogas">
                    Biogas
                  </p>
                </li>
                <li>
                  <p href="#None" onClick={handleChange} id="none">
                    None
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
                  value="Heat pump"
                  control={<Radio />}
                  label="Heat pump"
                  onClick={handleChange}
                />
                <FormControlLabel
                  value="Electricity"
                  control={<Radio />}
                  label="Electricity"
                  onClick={handleChange}
                />
                <FormControlLabel
                  value="Methane"
                  control={<Radio />}
                  label="Methane (natural gas)"
                  onClick={handleChange}
                />
                <FormControlLabel
                  value="Heating oil"
                  control={<Radio />}
                  label=" Heating oil"
                  onClick={handleChange}
                />

                <FormControlLabel
                  value="Wood pellets"
                  control={<Radio />}
                  label="Wood pellets"
                  onClick={handleChange}
                />
                <FormControlLabel
                  value="Biogas"
                  control={<Radio />}
                  label="Biogas (biomethane)"
                  onClick={handleChange}
                />
                <FormControlLabel
                  value="none"
                  control={<Radio />}
                  label="None"
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
      <div className="QNumber">14/17</div>
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

export default Q14;
