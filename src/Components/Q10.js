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

function Q10() {
  const { setInputQ10 } = useContext(ResultsContext);

  const handleChange = (event) => {
    let valueQ10 = event.target.value;
    console.log(valueQ10);
    setInputQ10(valueQ10);
  };

  const redirectQ9 = useNavigate();
  const redirectQ11 = useNavigate();
  const redirectResults = useNavigate();

  const handlePrev = () => {
    redirectQ9("/Q9");
  };

  const handleNext = () => {
    redirectQ11("/Q11");
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
              How are most of the windows?
            </Typography>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
              >
                <FormControlLabel
                  value="Single panel"
                  control={<Radio />}
                  label="Single Panel"
                  onClick={handleChange}
                />
                <FormControlLabel
                  value="Double panel"
                  control={<Radio />}
                  label="Double Panel"
                  onClick={handleChange}
                />
                <FormControlLabel
                  value="Triple panel"
                  control={<Radio />}
                  label="Triple Panel"
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
      <div className="QNumber">10/17</div>
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

export default Q10;
