import { Button, CardContent, Typography, CardMedia } from "@mui/material";
import Card from "@mui/material/Card";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import CClogo from "../styles/CClogo.png";
import Retrofit from "../styles/Retrofit.jpeg";

import { ResultsContext } from "../Context/context";

function R7B() {
  const { setInputQ1, inputQ1, inputQ5 } = useContext(ResultsContext);

  const redirectResults = useNavigate();

  const handlePrev = () => {
    redirectResults("/Results");
  };

  return (
    <div className="QCardDiv divbackgroundHousing">
      <h1 className="AreaHeading">HOUSING</h1>
      <div>
        <Card className="QCardFullRecommendation">
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="QTitleFullRecommendation"
            >
              Control your room temperature
            </Typography>
            <Typography
              sx={{ mb: 2 }}
              color="text.secondary"
              className="QSubTitleFullRecommendation"
            >
              Easy to do
            </Typography>

            <Typography
              sx={{ mb: 2 }}
              color="text.secondary"
              className="QInsulationsDiv"
            >
              Maintain your room at an adequate temperature.
            </Typography>
            <Typography variant="body2" className="InsulationFullText">
              <ul>
                <li>
                  Layer up and turn down the heating: Put on an extra layer or a
                  comfy sweater, wrap yourself in a nice blanket. Keep your room
                  temperature at 19 degrees Celsius / 66 Fahrenheit in winter.
                </li>
                <li>
                  In hot summers, keep your temperature at 25 degrees Celsius /
                  78 degrees Fahrenheit.
                </li>
              </ul>
            </Typography>
            <Typography
              sx={{ mb: 2 }}
              color="text.secondary"
              className="QInsulationsDiv"
            >
              Install smart thermostats and program them based on your daily
              routine.
            </Typography>
            <Typography variant="body2" className="InsulationFullText">
              <ul>
                <li>
                  Smart thermostats are wi-fi enabled devices that control
                  heating and cooling in your home (.. by learning your
                  temperature preferences and scheduling when to automatically
                  adjust to energy-saving temperatures when you are asleep or
                  away).
                </li>
                <li>
                  They can help you regulate your home’s temperature and reduce
                  energy consumption.
                </li>
                <li>
                  They can save 10 to 15 percent of energy needs, and are very
                  convenient, especially those that can be controlled from
                  anywhere.
                </li>
              </ul>
            </Typography>
            <Typography
              sx={{ mb: 2 }}
              color="text.secondary"
              className="QInsulationsDiv"
            >
              Use curtains or blinds to block out direct sunlight in the summer
              and retain heat in the winter.
            </Typography>
          </CardContent>
          <div className="FullRecommendationBackButtonDiv">
            {" "}
            <Button
              size="small"
              variant="contained"
              className="StartOverButton "
              onClick={handlePrev}
            >
              Back
            </Button>
          </div>
        </Card>
      </div>
      <div>
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

export default R7B;
