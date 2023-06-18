import { Button, CardContent, Typography, CardMedia } from "@mui/material";
import Card from "@mui/material/Card";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CClogo from "../styles/CClogo.png";
import Retrofit from "../styles/Retrofit.jpeg";

import { ResultsContext } from "../Context/context";

function R8B() {
  const { setInputQ1, inputQ1, inputQ5 } = useContext(ResultsContext);

  const redirectResults = useNavigate();

  const handlePrev = () => {
    redirectResults("/Results");
  };

  return (
    <div className="QCardDiv">
      <h1 className="AreaHeading">HOUSING</h1>
      <div>
        <Card className="QCardFullRecommendation">
          <Card>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className="QTitleFullRecommendation"
              >
                Upgrade to LED light bulbs
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
                This can reduce your electricity consumption by up to 80% and
                they also have a longer lifespan than traditional light bulbs.
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
        </Card>
      </div>
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

export default R8B;
