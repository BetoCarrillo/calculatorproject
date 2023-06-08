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

function Q3() {
  const handleChange = (event) => {
    let valueQ3 = event.target.value;
    console.log(valueQ3);
  };

  const redirectQ2 = useNavigate();
  const redirectQ4 = useNavigate();

  const handlePrev = () => {
    redirectQ2("/Q2");
  };

  const handleNext = () => {
    redirectQ4("/Q4");
  };

  return (
    <div className="QCardDiv">
      <div>
        <Card sx={{ maxWidth: 450 }} className="QCard">
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Do you rent or own your home?
            </Typography>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
              >
                <FormControlLabel
                  value="rent"
                  control={<Radio />}
                  label="rent"
                  onClick={handleChange}
                />
                <FormControlLabel
                  value="own"
                  control={<Radio />}
                  label="own"
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
      <div className="QNumber"> 3/17</div>
    </div>
  );
}

export default Q3;
