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

function R12() {
  const redirectR = useNavigate();

  const handleMore = () => {
    redirectR("/familycuddle");
  };

  return (
    <div>
      <Card className="CardRecommendationFun">
        <Link to="/familycuddle" className="RecommendationCardLink">
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
              Have a family cuddle session
            </Typography>
            <Typography
              sx={{ mb: 1 }}
              color="text.secondary"
              className="QCardRecommendationSubTitle"
            >
              Housing
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

export default R12;
