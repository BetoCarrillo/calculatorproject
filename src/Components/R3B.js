import { Button, CardContent, Typography, CardMedia } from "@mui/material";
import Card from "@mui/material/Card";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CClogo from "../styles/CClogo.png";
import Retrofit from "../styles/Retrofit.jpeg";

import { ResultsContext } from "../Context/context";

function R3B() {
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
            <CardMedia
              component="img"
              height="140"
              image={Retrofit}
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
                Besides controlling the room to the adequate temperature,
                installing a smart home control will help you regulate the
                lights and turn them off in case you forget or you leave the
                room. There are also smart controls for heating radiators. Also
                leak sensors can be added to control any leaks and save water
                from being wasted.
              </Typography>
            </CardContent>
            <div className="FullRecommendationBackButtonDiv">
              {" "}
              <Button size="small" onClick={handlePrev}>
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

export default R3B;
