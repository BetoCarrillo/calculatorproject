import Card from "@mui/material/Card";
import React, { useContext, useEffect, useState } from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../styles/mainstyle.css";
import { useNavigate } from "react-router-dom";
import FormControl from "@mui/material/FormControl";
import { ResultsContext } from "../Context/context";

function Results() {
  const { inputQ17, setInputQ17 } = useContext(ResultsContext);

  const handleChange = (event) => {
    let valueQ2 = event.target.value;
    console.log(valueQ2);
  };

  const redirectQ17 = useNavigate();
  const redirectQ1 = useNavigate();

  const handlePrev = () => {
    redirectQ17("/Q17");
  };

  const handleNext = () => {
    console.log("Q7result", inputQ17);

    redirectQ1("/");
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
              Results
            </Typography>
            <FormControl></FormControl>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={handlePrev}>
              Previous
            </Button>
            <Button size="small" onClick={handleNext}>
              Start over
            </Button>
          </CardActions>
        </Card>
      </div>
      <div className="QNumber"> 17/17</div>
    </div>
  );
}

export default Results;
