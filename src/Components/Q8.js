import Card from "@mui/material/Card";
import React, { useContext, useEffect, useState } from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../styles/mainstyle.css";
import { useNavigate } from "react-router-dom";
import FormControl from "@mui/material/FormControl";
import { TextField } from "@mui/material";
import CClogo from "../styles/CClogo.png";
import { ResultsContext } from "../Context/context";

function Q8() {
  const { inputQ8, setInputQ8 } = useContext(ResultsContext);

  const redirectQ7 = useNavigate();
  const redirectQ9 = useNavigate();
  const redirectResults = useNavigate();

  // const [inputQ8, setInputQ8] = useState(null);

  const handlePrev = () => {
    redirectQ7("/Q7");
  };

  const handleInput = (event) => {
    let valueQ8 = event.target.value;
    setInputQ8(valueQ8);
  };

  const handleNext = (event) => {
    console.log(inputQ8);
    redirectQ9("/Q9");
  };

  useEffect(() => {
    // console.log("use effect run");
  }, []);

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
              How big is your home?
            </Typography>
            <FormControl>
              <TextField
                type="number"
                placeholder="type in here.."
                label="m2"
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

      <div className="QNumber">8/17</div>
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

export default Q8;
