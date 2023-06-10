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

function Q14() {
  const handleChange = (event) => {
    let valueQ14 = event.target.value;
    console.log(valueQ14);
  };

  const redirectQ13 = useNavigate();
  const redirectQ15 = useNavigate();

  const handlePrev = () => {
    redirectQ13("/Q13");
  };

  const handleNext = () => {
    redirectQ15("/Q15");
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
              How do you heat your home?
            </Typography>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
              >
                <FormControlLabel
                  value="heatpump"
                  control={<Radio />}
                  label="Heat pump"
                  onClick={handleChange}
                />
                <FormControlLabel
                  value="electricity"
                  control={<Radio />}
                  label="Electricity"
                  onClick={handleChange}
                />
                <FormControlLabel
                  value="methane"
                  control={<Radio />}
                  label="Methane (natural gas)"
                  onClick={handleChange}
                />
                <FormControlLabel
                  value="heatingoil"
                  control={<Radio />}
                  label=" Heating oil"
                  onClick={handleChange}
                />
                <FormControlLabel
                  value="bottledgas"
                  control={<Radio />}
                  label="Bottled gas"
                  onClick={handleChange}
                />
                <FormControlLabel
                  value="woodpellets"
                  control={<Radio />}
                  label="Wood pellets"
                  onClick={handleChange}
                />
                <FormControlLabel
                  value="biogas"
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
                <FormControlLabel
                  value="donotknow"
                  control={<Radio />}
                  label="Do not know"
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
      {/* <div className="CClogo">
        <img src={CClogo} alt="Change Clubs logo" height={50}></img>
        <p className="PoweredbyText">Powered by</p>
      </div> */}
      <div className="QNumber"> 14/17</div>
    </div>
  );
}

export default Q14;
