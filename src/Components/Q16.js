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

function Q16() {
  const { setInputQ16 } = useContext(ResultsContext);

  const handleChange = (event) => {
    let valueQ16 = event.target.value;
    console.log(valueQ16);
    setInputQ16(valueQ16);
  };

  const redirectQ15 = useNavigate();
  const redirectQ17 = useNavigate();
  const redirectResults = useNavigate();

  const handlePrev = () => {
    redirectQ15("/Q15");
  };

  const handleNext = () => {
    redirectQ17("/Q17");
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
              How do you heat your water?
            </Typography>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
              >
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
                  value="Heating Oil"
                  control={<Radio />}
                  label="Heating Oil"
                  onClick={handleChange}
                />
                <FormControlLabel
                  value="Biogas"
                  control={<Radio />}
                  label="Biogas (biomethane)"
                  onClick={handleChange}
                />

                {/* <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                  onClick={handleChange}
                /> */}
                <FormControlLabel
                  value="don't know"
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
            <Button size="small" onClick={handleSkip}>
              End
            </Button>
          </CardActions>
        </Card>
      </div>
      <div className="QNumber">16/17</div>
      <div>
        <img src={CClogo} alt="Change Clubs logo" height={50}></img>
        <p className="PoweredbyText">Powered by</p>
      </div>
    </div>
  );
}

export default Q16;
