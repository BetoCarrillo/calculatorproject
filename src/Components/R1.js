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

function R1() {
  return (
    <div>
      <Card style={{ overflow: "scroll" }} className="CardRecommendationBI">
        <Link to="/insulateyourhome" className="RecommendationCardLink">
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
              Insulate your home
            </Typography>
            <Typography
              sx={{ mb: 1 }}
              color="text.secondary"
              className="QCardRecommendationSubTitle"
            >
              Housing
            </Typography>
            <Typography variant="body2" className="QCardRecommendationText">
              Insulation is one of the most cost-efficient ways to make your
              home energy efficient. Learn how to insulate your home.
            </Typography>
          </CardContent>
          <CardActions className="QCardRecommendationButtonPadding">
            <Link
              to="/insulateyourhome"
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

export default R1;
