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

function Q17() {
  const [inputQ17, setInputQ17] = useState(null);

  const redirectQ16 = useNavigate();
  const redirectQ1 = useNavigate();

  const handlePrev = () => {
    redirectQ16("/Q16");
  };
  const handleInput = (event) => {
    let valueQ17Input = event.target.value;
    setInputQ17(valueQ17Input);
  };

  const handleNext = () => {
    console.log(inputQ17);
    redirectQ1("/Results");
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
              How much is your monthly electricity bill?
            </Typography>
            <FormControl>
              <TextField
                placeholder="type in here.."
                label="€"
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
              Done
            </Button>
          </CardActions>
        </Card>
      </div>
      <div className="CClogo">
        <img src={CClogo} alt="Change Clubs logo" height={50}></img>
        <p className="PoweredbyText">Powered by</p>
      </div>
      <div className="QNumber"> 17/17</div>
    </div>
  );
}

export default Q17;
