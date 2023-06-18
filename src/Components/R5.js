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

function R5() {
  const redirectR = useNavigate();

  const handleMore = () => {
    redirectR("/ownsustainably");
  };

  return (
    <div>
      <Card className="CardRecommendationBI">
        <Link to="/ownsustainably" className="RecommendationCardLink">
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
              Get some tips if you own your property
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

export default R5;
