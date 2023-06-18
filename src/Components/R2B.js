import { Button, CardContent, Typography, CardMedia } from "@mui/material";
import Card from "@mui/material/Card";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CClogo from "../styles/CClogo.png";
import Retrofit from "../styles/Retrofit.jpeg";

import { ResultsContext } from "../Context/context";

function R2B() {
  const { setInputQ1, inputQ1, inputQ5, inputQ2 } = useContext(ResultsContext);

  const redirectResults = useNavigate();

  console.log("inputQ1", inputQ1);
  console.log("inputQ2", inputQ2);

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
                Upgrade to heat pump
              </Typography>
              <Typography
                sx={{ mb: 2 }}
                color="text.secondary"
                className="QSubTitleFullRecommendation"
              >
                Biggest Impact
              </Typography>

              <Typography variant="body2" className="RecommendationFullText">
                Electric powered high-efficiency heat pumps transfer heat from a
                cold space to a hot one. So in winter, the pump transfers energy
                from the outside to inside of the building and in summer it
                pumps hot air from the inside to the outside. Heat pumps can
                replace conventional heating, air conditioning and ventilation
                systems – and reduce fossil fuel consumption and greenhouse gas
                emissions like that. If you live in a place with cold winters,
                you might have to insulate your home first
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

export default R2B;
