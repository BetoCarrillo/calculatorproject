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

function Q16() {
  const handleChange = (event) => {
    let valueQ16 = event.target.value;
    console.log(valueQ16);
  };

  const redirectQ15 = useNavigate();
  const redirectQ17 = useNavigate();

  const handlePrev = () => {
    redirectQ15("/Q15");
  };

  const handleNext = () => {
    redirectQ17("/Q17");
  };

  return (
    <div className="QCardDiv">
      <div>
        <Card sx={{ maxWidth: 450 }} className="QCard">
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              What type of building is your home?
            </Typography>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
              >
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
                  value="bottledgas"
                  control={<Radio />}
                  label="Bottled gas"
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
                  value="other"
                  control={<Radio />}
                  label="Other"
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
      <div className="QNumber"> 16/17</div>
    </div>
  );
}

export default Q16;
