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

function Q10() {
  const handleChange = (event) => {
    let valueQ10 = event.target.value;
    console.log(valueQ10);
  };

  const redirectQ9 = useNavigate();
  const redirectQ11 = useNavigate();

  const handlePrev = () => {
    redirectQ9("/Q9");
  };

  const handleNext = () => {
    redirectQ11("/Q11");
  };

  return (
    <div className="QCardDiv">
      <div>
        <Card sx={{ maxWidth: 450 }} className="QCard">
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              How are the windows?
            </Typography>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
              >
                <FormControlLabel
                  value="singlepanel"
                  control={<Radio />}
                  label="Single Panel"
                  onClick={handleChange}
                />
                <FormControlLabel
                  value="doublepanel"
                  control={<Radio />}
                  label="Double Panel"
                  onClick={handleChange}
                />
                <FormControlLabel
                  value="triplepanel"
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
          </CardActions>
        </Card>
      </div>
      <div className="QNumber"> 10/17</div>
    </div>
  );
}

export default Q10;
