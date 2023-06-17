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

function Q4() {
  const { setInputQ4 } = useContext(ResultsContext);

  const handleChange = (event) => {
    let valueQ4 = event.target.value;
    console.log(valueQ4);
    setInputQ4(valueQ4);
  };

  const redirectQ3 = useNavigate();
  const redirectQ5 = useNavigate();
  const redirectResults = useNavigate();

  const handlePrev = () => {
    redirectQ3("/Q3");
  };

  const handleNext = () => {
    redirectQ5("/Q5");
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
              When was it built or last retrofitted?
            </Typography>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
              >
                <FormControlLabel
                  value="1960-1970"
                  control={<Radio />}
                  label="1960-1970"
                  onClick={handleChange}
                />
                <FormControlLabel
                  value="1970-1980"
                  control={<Radio />}
                  label="1970-1980"
                  onClick={handleChange}
                />
                <FormControlLabel
                  value="1980-1990"
                  control={<Radio />}
                  label="1980-1990"
                  onClick={handleChange}
                />
                <FormControlLabel
                  value="1990-2000"
                  control={<Radio />}
                  label="1990-2000"
                  onClick={handleChange}
                />
                <FormControlLabel
                  value="2000-2010"
                  control={<Radio />}
                  label="2000-2010"
                  onClick={handleChange}
                />
                <FormControlLabel
                  value="2010-2020"
                  control={<Radio />}
                  label="2010-2020"
                  onClick={handleChange}
                />
                <FormControlLabel
                  value="2020-present"
                  control={<Radio />}
                  label="2020-present"
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
      <div className="QNumber"> 4/17</div>
      <div>
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

export default Q4;
