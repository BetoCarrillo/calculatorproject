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

function R5() {
  return (
    <div>
      <Card className="CardRecommendationBI">
        <CardActionArea
          href="/ownsustainably"
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
              Own sustainably
            </Typography>
            <Typography
              sx={{ mb: 1 }}
              color="text.secondary"
              className="QCardRecommendationSubTitle"
            >
              Housing
            </Typography>
            <Typography variant="body2" className="QCardRecommendationText">
              Some tips if you own your property
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

export default R5;
