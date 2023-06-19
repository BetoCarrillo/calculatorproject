import Card from "@mui/material/Card";
import React, { useContext, useEffect, useState } from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../styles/mainstyle.css";
import { Link, useNavigate } from "react-router-dom";
import CClogo from "../styles/CClogo.png";
import FormControl from "@mui/material/FormControl";
import { TextField } from "@mui/material";
import { ResultsContext } from "../Context/context";

function Q11() {
  const { inputQ11, setInputQ11 } = useContext(ResultsContext);

  // const [inputQ11, setInputQ11] = useState(null);
  // const handleChange = (event) => {
  //   let valueQ11 = event.target.value;
  //   console.log(valueQ11);
  // };

  const redirectQ10 = useNavigate();
  const redirectQ12 = useNavigate();
  const redirectResults = useNavigate();

  const handlePrev = () => {
    redirectQ10("/Q10");
  };

  const handleInput = (event) => {
    let valueQ11 = event.target.value;
    setInputQ11(valueQ11);
  };

  const handleNext = () => {
    redirectQ12("/Q12");
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
              How many people live in your home?
            </Typography>
            <FormControl>
              <TextField
                type="number"
                placeholder="type # of people"
                label="include yourself"
                variant="filled"
                color="primary"
                focused
                onChange={handleInput}
              />
            </FormControl>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={handleSkip}>
              End
            </Button>
            <Button size="small" onClick={handlePrev}>
              Previous
            </Button>
            <Button size="small" onClick={handleNext}>
              Next
            </Button>
          </CardActions>
        </Card>
      </div>

      <div className="QNumber">11/17</div>
      <div className="CClogo">
        <Link
          to="https://changeclubs.global/"
          target={"_blank"}
          rel={"noreferrer"}
        >
          <img src={CClogo} alt="Change Clubs logo" height={50}></img>
        </Link>
        <p className="PoweredbyText">Powered by</p>
      </div>
    </div>
  );
}

export default Q11;
