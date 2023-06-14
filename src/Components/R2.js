import React from "react";
import {
  Card,
  Button,
  CardActions,
  CardContent,
  Typography,
  CardActionArea,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
// import Card from "@mui/material/Card";

function R2() {
  const redirectR1B = useNavigate();

  const handleMore = () => {
    redirectR1B("/smarthomecontrol");
  };

  return (
    <div className="item-a">
      <Card style={{ overflow: "scroll" }} className="CardRecommendationBI">
        <CardActionArea
          href="/smarthomecontrol"
          className="RecommendationCardLink"
        >
          <CardContent>
            <Typography
              sx={{ fontSize: 9 }}
              color="text.secondary"
              gutterBottom
              className="QCardRecommendationType"
            >
              Biggest impact
            </Typography>
            <Typography component="div" className="QCardRecommendationTitle">
              Upgrade to heat pump
            </Typography>
            <Typography
              sx={{ mb: 1 }}
              color="text.secondary"
              className="QCardRecommendationSubTitle"
            >
              Housing
            </Typography>
            <Typography variant="body2" className="QCardRecommendationText">
              They replace conventional heating, A/C and ventilation systems and
              reduce fossil fuel consumption and greenhouse gas emissions.
            </Typography>
          </CardContent>
          <CardActions className="QCardRecommendationButtonPadding">
            <Button
              size="small"
              className="QCardRecommendationButton"
              onClick={handleMore}
            >
              Learn More
            </Button>
          </CardActions>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default R2;
