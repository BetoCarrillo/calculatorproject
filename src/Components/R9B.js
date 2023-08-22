import { Button, CardContent, Typography, CardMedia } from "@mui/material";
import Card from "@mui/material/Card";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import CClogo from "../styles/CClogo.png";
import Retrofit from "../styles/Retrofit.jpeg";

import { ResultsContext } from "../Context/context";

function R9B() {
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
              Ventilation and air quality
            </Typography>
            <Typography
              sx={{ mb: 2 }}
              color="text.secondary"
              className="QSubTitleFullRecommendation"
            >
              Easy to do
            </Typography>

            <Typography variant="body2" className="InsulationFullText">
              <ul>
                <li>
                  Instead of tilting the windows, switch radiators off and
                  ventilate for 5 – 15 minutes. After the air exchange is
                  complete, close the windows and turn the heating on again.
                </li>
                <li>
                  Indoor plants may help you purify the air in your house by
                  removing pollutants and adding oxygen.
                </li>
                <li>
                  Use ceiling fans to improve air circulation and reduce the
                  need for air conditioning. In summer, use the fan
                  counter-clockwise and reverse in winter to create an upward
                  draft that redistributes the warm air.
                </li>
                <li>
                  Over time, the air ducts of your house may become dirty,
                  reducing air flow. Regularly cleaning your air ducts will
                  improve the ventilation of your home.
                </li>
                <li>
                  Choose carefully to avoid using harmful chemicals such as
                  pesticides, cleaning products, and air fresheners that can
                  negatively impact indoor air quality and harm the environment.
                </li>
              </ul>
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

export default R9B;
