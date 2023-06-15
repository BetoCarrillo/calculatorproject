import Card from "@mui/material/Card";
import React, { useContext, useEffect, useState } from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../styles/mainstyle.css";
import { useNavigate } from "react-router-dom";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import CClogo from "../styles/CClogo.png";
import { ResultsContext } from "../Context/context";

function Q1() {
  const { setInputQ1 } = useContext(ResultsContext);

  const handleChange = (event) => {
    let valueQ1 = event.target.value;
    console.log(valueQ1);
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
      <div>
        <Card sx={{ maxWidth: 450 }} className="QCard">
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="QTitle"
            >
              In which country do you live?
            </Typography>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                className="Qtext"
              >
                <FormControlLabel
                  value="Germany"
                  control={<Radio />}
                  label="Germany"
                  onClick={handleChange}
                />
                {/* <FormControlLabel
                  value="United Kingdom"
                  control={<Radio />}
                  label="United Kingdom"
                  onClick={handleChange}
                />
                <FormControlLabel
                  value="Netherlands"
                  control={<Radio />}
                  label="Netherlands"
                  onClick={handleChange}
                />
                <FormControlLabel
                  value="France"
                  control={<Radio />}
                  label="France"
                  onClick={handleChange}
                />
                <FormControlLabel
                  value="Other"
                  control={<Radio />}
                  label="Other"
                  onClick={handleChange}
                /> */}
              </RadioGroup>
            </FormControl>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={handlePrev}>
              Previous
            </Button>
            <Button size="small" onClick={handleNext}>
              Next
            </Button>
            <Button size="small" onClick={handleSkip}>
              End
            </Button>
          </CardActions>
        </Card>
      </div>
      <div className="QNumber"> 1/17</div>
      <div className="CClogo">
        <img src={CClogo} alt="Change Clubs logo" height={50}></img>
        <p className="PoweredbyText">Powered by</p>
      </div>
    </div>
  );
}

export default Q1;
