import { Button, CardContent, Typography, CardMedia } from "@mui/material";
import Card from "@mui/material/Card";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CClogo from "../styles/CClogo.png";
import Housesustainable from "../styles/Housesustainable.jpeg";

import { ResultsContext } from "../Context/context";

function R4B() {
  const { setInputQ1, inputQ1, inputQ5 } = useContext(ResultsContext);

  const redirectResults = useNavigate();

  console.log("inputQ1", inputQ1);

  const handlePrev = () => {
    redirectResults("/Results");
  };

  return (
    <div className="QCardDiv">
      <h1 className="AreaHeading">HOUSING</h1>
      <div>
        <Card className="QCardFullRecommendation">
          <Card>
            <CardMedia
              component="img"
              height="140"
              image={Housesustainable}
              alt="retrofityourhome"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className="QTitleFullRecommendation"
              >
                Rent sustainably
              </Typography>
              <Typography
                sx={{ mb: 2 }}
                color="text.secondary"
                className="QSubTitleFullRecommendation"
              >
                Biggest Impact
              </Typography>

              <Typography variant="body2" className="RecommendationFullText">
                <ul>
                  <li>
                    Choose a convenient location. Try to be close to your
                    workplace or your most frequent locations if realistic.
                  </li>
                  <li>Look for newer, more energy-efficient buildings.</li>
                  <li>
                    Ask about the year of construction or retrofitting.
                    Depending on where you live, there might be an energy audit
                    for the specific building.
                  </li>
                  <li>
                    Ask how the building or house is heated and who is the
                    electricity provider. If you can, choose a flat or home that
                    has a climate-friendly heating system and clean electricity.
                  </li>
                  <li>
                    If your laws allow it, change your energy provider to a
                    clean or renewable one.
                  </li>
                  <li>
                    Check out the appliances in the flat/house: Energy-efficient
                    ones make a huge difference – for the environment and your
                    wallet!
                  </li>
                  <li>
                    Consider installing window tints. A low-cost solution when
                    you can’t retrofit the insulation of your windows.
                  </li>
                  <li>
                    Put potted trees in strategic locations to block the sun
                    during the hottest times of the day.
                  </li>
                  <li>Think green!</li>
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

export default R4B;
