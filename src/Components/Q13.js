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

function Q13() {
  const { setInputQ13 } = useContext(ResultsContext);

  const handleChange = (event) => {
    let valueQ13 = event.target.value;
    console.log(valueQ13);
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
        <Card sx={{ maxWidth: 450 }} className="QCard">
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="QTitle"
            >
              What energy source do you use at home?
            </Typography>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
              >
                <FormControlLabel
                  value="Normal grix"
                  control={<Radio />}
                  label="Normal grix"
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
                  label="100% renewable"
                  onClick={handleChange}
                />
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

      <div className="QNumber">13/17</div>
      <div className="CClogo">
        <a
          href="https://changeclubs.global/"
          target={"_blank"}
          rel={"noreferrer"}
        >
          <img src={CClogo} alt="Change Clubs logo" height={50}></img>
        </a>
        <p className="PoweredbyText">Powered by</p>
      </div>
    </div>
  );
}

export default Q13;
