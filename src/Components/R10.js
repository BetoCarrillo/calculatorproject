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

function R10() {
  return (
    <div>
      <Card className="CardRecommendationFun">
        <CardActionArea href="/detective" className="RecommendationCardLink">
          <CardContent>
            <Typography
              sx={{ fontSize: 9 }}
              color="text.secondary"
              gutterBottom
              className="QCardRecommendationType"
            >
              Fun tip
            </Typography>
            <Typography component="div" className="QCardRecommendationTitle">
              Play detective
            </Typography>
            <Typography
              sx={{ mb: 1 }}
              color="text.secondary"
              className="QCardRecommendationSubTitle"
            >
              Housing
            </Typography>
          </CardContent>
          {/* <CardActions className="QCardRecommendationButtonPadding">
            <div size="small" className="QCardRecommendationButton">
              LEARN MORE
            </div>
          </CardActions> */}
        </CardActionArea>
      </Card>
    </div>
  );
}

export default R10;
