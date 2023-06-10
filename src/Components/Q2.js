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

function Q2() {
  const handleChange = (event) => {
    let valueQ2 = event.target.value;
    console.log(valueQ2);
  };

  const redirectQ1 = useNavigate();
  const redirectQ3 = useNavigate();

  const handlePrev = () => {
    redirectQ1("/Q1");
  };

  const handleNext = () => {
    redirectQ3("/Q3");
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
              What type of building is your home?
            </Typography>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
              >
                <FormControlLabel
                  value="apartment"
                  control={<Radio />}
                  label="Apartment"
                  onClick={handleChange}
                />
                <FormControlLabel
                  value="detached"
                  control={<Radio />}
                  label="Detached house"
                  onClick={handleChange}
                />
                <FormControlLabel
                  value="semi-detached"
                  control={<Radio />}
                  label="Semi-detached house"
                  onClick={handleChange}
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
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
          </CardActions>
        </Card>
      </div>
      <div className="CClogo">
        <img src={CClogo} alt="Change Clubs logo" height={50}></img>
        <p className="PoweredbyText">Powered by</p>
      </div>
      <div className="QNumber"> 2/17</div>
    </div>
  );
}

export default Q2;
