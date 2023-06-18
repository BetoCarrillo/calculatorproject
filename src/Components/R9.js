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

function R9() {
  const redirectR = useNavigate();

  const handleMore = () => {
    redirectR("/ventilation");
  };

  return (
    <div>
      <Card className="CardRecommendationEasy">
        <Link to="/ventilation" className="RecommendationCardLink">
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
            <Button
              onClick={handleMore}
              size="small"
              className="QCardRecommendationButton"
            >
              <span className="material-symbols-outlined QCardRecommendationButtonIcon">
                read_more
              </span>
            </Button>
          </CardActions>
        </Link>
      </Card>
    </div>
  );
}

export default R9;
