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

function Q9() {
  const { inputQ9, setInputQ9 } = useContext(ResultsContext);
  // const [inputQ9, setInputQ9] = useState(null);

  const redirectQ8 = useNavigate();
  const redirectQ10 = useNavigate();
  const redirectResults = useNavigate();

  const handlePrev = () => {
    redirectQ8("/Q8");
  };

  const handleInput = (event) => {
    let valueQ9 = event.target.value;
    setInputQ9(valueQ9);
  };

  const handleNext = () => {
    console.log(inputQ9);
    redirectQ10("/Q10");
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
              How many bedrooms does it have?
            </Typography>
            <FormControl>
              <TextField
                placeholder="type # of bedrooms"
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

      <div className="QNumber">9/17</div>
      <div className="CClogo">
        <img src={CClogo} alt="Change Clubs logo" height={50}></img>
        <p className="PoweredbyText">Powered by</p>
      </div>
    </div>
  );
}

export default Q9;
