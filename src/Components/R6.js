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

function R6() {
  return (
    <div className="item-a">
      <Card className="CardRecommendationBI">
        <CardActionArea>
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
              Use solar energy
            </Typography>
            <Typography
              sx={{ mb: 1 }}
              color="text.secondary"
              className="QCardRecommendationSubTitle"
            >
              Housing
            </Typography>
            <Typography variant="body2" className="QCardRecommendationText">
              As a renewable source of power, solar energy has an important role
              in reducing greenhouse gas emissions and mitigating climate change
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

export default R6;
