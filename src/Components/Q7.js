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

function Q7() {
  const handleChange = (event) => {
    let valueQ7 = event.target.value;
    console.log(valueQ7);
  };

  const redirectQ6 = useNavigate();
  const redirectQ8 = useNavigate();

  const handlePrev = () => {
    redirectQ6("/Q6");
  };

  const handleNext = () => {
    redirectQ8("/Q8");
  };

  return (
    <div className="QCardDiv">
      <div>
        <Card sx={{ maxWidth: 450 }} className="QCard">
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Do you use LED light bulbs?
            </Typography>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
              >
                <FormControlLabel
                  value="yes"
                  control={<Radio />}
                  label="Yes"
                  onClick={handleChange}
                />
                <FormControlLabel
                  value="no"
                  control={<Radio />}
                  label="No"
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
      <div className="QNumber"> 7/17</div>
    </div>
  );
}

export default Q7;
