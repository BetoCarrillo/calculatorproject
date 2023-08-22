import { Button, CardContent, Typography, CardMedia } from "@mui/material";
import Card from "@mui/material/Card";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import CClogo from "../styles/CClogo.png";
import Solarenergy from "../styles/Solarenergy.jpeg";

import { ResultsContext } from "../Context/context";

function R6B() {
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
          <CardMedia
            component="img"
            height="140"
            image={Solarenergy}
            alt="retrofityourhome"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="QTitleFullRecommendation"
            >
              Install smart homecontrols
            </Typography>
            <Typography
              sx={{ mb: 2 }}
              color="text.secondary"
              className="QSubTitleFullRecommendation"
            >
              Biggest Impact
            </Typography>

            <Typography variant="body2" className="RecommendationFullText">
              As a renewable source of power, solar energy has an important role
              in reducing greenhouse gas emissions and mitigating climate
              change. The use of solar energy can mitigate the adverse effects
              of climate change by improving air quality while reducing water
              usage from energy production. It is also the cheapest source of
              energy.
              <br></br> <br></br>
              Several options to use solar energy are possible:
              <br></br> <br></br>
            </Typography>
            <Typography
              sx={{ mb: 2 }}
              color="text.secondary"
              className="QInsulationsDiv"
            >
              Install solar panels
            </Typography>
            <Typography variant="body2" className="InsulationFullText">
              Using solar panels reduces reliance on fossil fuels having a
              direct impact on the emissions of harmful gases to the atmosphere,
              and the sun’s energy is limitless, unlike fossil fuels.
              Photovoltaic panels produce electricity. Other panels can heat
              water.
            </Typography>
            <Typography
              sx={{ mb: 2 }}
              color="text.secondary"
              className="QInsulationsDiv"
            >
              Use solar-powered products
            </Typography>
            <Typography variant="body2" className="InsulationFullText">
              There are many simple solar solutions without having to install an
              entire solar electricity system at home. There are small solar
              panels you can install on your balcony, terrace or window. In
              addition, there are many other small devices such as outdoor solar
              lights or power banks that can be charged with solar energy.
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

export default R6B;
