import { Button, CardContent, Typography, CardMedia } from "@mui/material";
import Card from "@mui/material/Card";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import CClogo from "../styles/CClogo.png";
import Housesustainable from "../styles/Housesustainable.jpeg";

import { ResultsContext } from "../Context/context";

function R5B() {
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
              Own sustainably
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
                <li>The smaller, the better.</li>
                <li>Choose an eco and climate-friendly design.</li>
                <li>Use sustainable building materials.</li>
                <li>Limit the environmental impact of the construction.</li>
                <li>Incorporate water efficiency and good sewage solutions.</li>
                <li>
                  Set the orientation of your home to use the sun and wind to
                  your convenience – or avoid direct impact.
                </li>
                <li>
                  Avoid cabinetry and plumbing fixtures containing chemicals.
                </li>
                <li>
                  Protect the surroundings making sure constructions aren’t
                  intrusive to nature and biodiversity around your home.
                </li>
                <li>Install solar panels if possible.</li>
                <li>
                  Choose native plants for your garden, they are better for the
                  environment than exotic ones.
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

export default R5B;
