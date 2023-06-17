import Card from "@mui/material/Card";
import React, { useContext, useEffect, useState } from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../styles/mainstyle.css";
import { useNavigate } from "react-router-dom";
import CClogo from "../styles/CClogo.png";
import FormControl from "@mui/material/FormControl";
import { TextField } from "@mui/material";
import { ResultsContext } from "../Context/context";

function Q12() {
  const { inputQ12, setInputQ12 } = useContext(ResultsContext);
  // const handleChange = (event) => {
  //   let valueQ2 = event.target.value;
  //   console.log(valueQ2);
  // };

  const redirectQ11 = useNavigate();
  const redirectQ13 = useNavigate();
  const redirectResults = useNavigate();

  const handlePrev = () => {
    redirectQ11("/Q11");
  };

  const handleInput = (event) => {
    let valueQ12 = event.target.value;
    setInputQ12(valueQ12);
  };

  const handleNext = () => {
    console.log(inputQ12);
    redirectQ13("/Q13");
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
              What is your annual electricity consumption?
            </Typography>
            <FormControl>
              <TextField
                placeholder="type consumption"
                label="kW"
                variant="filled"
                color="primary"
                focused
                onChange={handleInput}
              />
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

      <div className="QNumber">12/17</div>
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

export default Q12;
