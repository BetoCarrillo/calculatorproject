import { Button, CardContent, Typography, CardMedia } from "@mui/material";
import Card from "@mui/material/Card";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import CClogo from "../styles/CClogo.png";
import Retrofit from "../styles/Pictures/Retrofit.jpeg";

import { ResultsContext } from "../Context/context";

function R11B() {
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
              Have a Do-it-yourself (DIY) solar cooker party.
            </Typography>
            <Typography
              sx={{ mb: 2 }}
              color="text.secondary"
              className="QSubTitleFullRecommendation"
            >
              Fun tip
            </Typography>

            <Typography variant="body2" className="InsulationFullText">
              Learn how to do it{" "}
              <Link
                to="https://www.ecowatch.com/solar-oven-cooker-diy.html"
                target={"_blank"}
                rel={"noreferrer"}
              >
                here.
              </Link>{" "}
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
          href="https://changeclubs.global/"
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

export default R11B;
