import React from "react";
import {
  Card,
  Button,
  CardActions,
  CardContent,
  Typography,
  CardActionArea,
} from "@mui/material";
import { Link } from "react-router-dom";
// import Card from "@mui/material/Card";

function R3() {
  return (
    <div>
      <Card className="CardRecommendationBI">
        <Link to="/smarthomecontrol" className="RecommendationCardLink">
          <CardContent>
            <Typography
              sx={{ fontSize: 9 }}
              className="QCardRecommendationType"
              color="text.secondary"
              gutterBottom
            >
              Biggest impact
            </Typography>
            <Typography component="div" className="QCardRecommendationTitle">
              Install smart homecontrols
            </Typography>
            <Typography
              sx={{ mb: 1 }}
              color="text.secondary"
              className="QCardRecommendationSubTitle"
            >
              Housing
            </Typography>
            <Typography variant="body2" className="QCardRecommendationText">
              Besides controlling the room to the adequate temperature,
              installing a smart home control will help you regulate the lights
              and turn them off.
            </Typography>
          </CardContent>
          {/* <CardActions className="QCardRecommendationButtonPadding">
            <div size="small" className="QCardRecommendationButton">
              LEARN MORE
            </div>
          </CardActions> */}
        </Link>
      </Card>
    </div>
  );
}

export default R3;
