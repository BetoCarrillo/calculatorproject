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
import { Input } from "@mui/material";

function Q8() {
  const redirectQ7 = useNavigate();
  const redirectQ9 = useNavigate();

  const handlePrev = () => {
    redirectQ7("/Q7");
  };

  const handleNext = (event) => {
    let valueQ8 = event.target.value;
    console.log(event.target.value);
    // redirectQ9("/Q9");
  };

  return (
    <div className="QCardDiv">
      <div>
        <Card sx={{ maxWidth: 450 }} className="QCard">
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              How big is your home in square meters?
            </Typography>
            <FormControl>
              <Input placeholder="Type in here…" variant="outlined" />
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
      <div className="QNumber"> 8/17</div>
    </div>
  );
}

export default Q8;
