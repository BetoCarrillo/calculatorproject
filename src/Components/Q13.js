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

function Q13() {
  const handleChange = (event) => {
    let valueQ13 = event.target.value;
    console.log(valueQ13);
  };

  const redirectQ12 = useNavigate();
  const redirectQ14 = useNavigate();

  const handlePrev = () => {
    redirectQ12("/Q12");
  };

  const handleNext = () => {
    redirectQ14("/Q14");
  };

  return (
    <div className="QCardDiv">
      <div>
        <Card sx={{ maxWidth: 450 }} className="QCard">
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              What energy sources do you use at home?
            </Typography>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
              >
                <FormControlLabel
                  value="normalgrix"
                  control={<Radio />}
                  label="Normal grix"
                  onClick={handleChange}
                />
                <FormControlLabel
                  value="renewablegrix"
                  control={<Radio />}
                  label="Renewable grix"
                  onClick={handleChange}
                />
                <FormControlLabel
                  value="solar"
                  control={<Radio />}
                  label="Solar"
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
      <div className="QNumber"> 13/17</div>
    </div>
  );
}

export default Q13;
