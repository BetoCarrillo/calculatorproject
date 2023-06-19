import React from "react";
import {
  Card,
  Button,
  CardActions,
  CardContent,
  Typography,
  CardActionArea,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
// import Card from "@mui/material/Card";

function R7() {
  return (
    <div>
      <Card className="CardRecommendationEasy">
        <Link to="/roomtemperature" className="RecommendationCardLink">
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
              Control your room temperature
            </Typography>
            <Typography
              sx={{ mb: 1 }}
              color="text.secondary"
              className="QCardRecommendationSubTitle"
            >
              Housing
            </Typography>
            <Typography variant="body2" className="QCardRecommendationText">
              Controlling your room temperature can make the difference. Get
              some tips to make it easy.
            </Typography>
          </CardContent>
          <CardActions className="QCardRecommendationButtonPadding">
            <Link
              to="/roomtemperature"
              // onClick={handleMore}
              size="small"
              className="QCardRecommendationButton"
            >
              <span className="material-symbols-outlined QCardRecommendationButtonIcon">
                add_circle
              </span>
            </Link>
          </CardActions>
        </Link>
      </Card>
    </div>
  );
}

export default R7;
