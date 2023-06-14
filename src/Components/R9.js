import React from "react";
import {
  Card,
  Button,
  CardActions,
  CardContent,
  Typography,
  CardActionArea,
} from "@mui/material";
// import Card from "@mui/material/Card";

function R9() {
  return (
    <div className="item-b">
      <Card className="CardRecommendationEasy">
        <CardActionArea>
          <CardContent>
            <Typography
              sx={{ fontSize: 9 }}
              color="text.secondary"
              gutterBottom
              className="QCardRecommendationType"
            >
              Easy to do
            </Typography>
            <Typography component="div" className="QCardRecommendationTitle">
              Ventilation and air quality
            </Typography>
            <Typography
              sx={{ mb: 1 }}
              color="text.secondary"
              className="QCardRecommendationSubTitle"
            >
              Housing
            </Typography>
            <Typography variant="body2" className="QCardRecommendationText">
              Check the ventilation and air quality to reduce your impact. Here
              are some tips to make it easy.
            </Typography>
          </CardContent>
          <CardActions className="QCardRecommendationButtonPadding">
            <div size="small" className="QCardRecommendationButton">
              LEARN MORE
            </div>
          </CardActions>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default R9;
