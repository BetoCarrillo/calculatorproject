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

function R11() {
  return (
    <div>
      <Card className="CardRecommendationFun">
        <Link to="/solarcooker" className="RecommendationCardLink">
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
              Have a DIY solar cooker party
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
            <Link
              to="/solarcooker"
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

export default R11;
