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
  const redirectR1B = useNavigate();

  const handleMore = () => {
    redirectR1B("/insulateyourhome");
  };

  return (
    <div className="item-a">
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
              home energy efficient, keeping a healthy indoor temperature.
            </Typography>
          </CardContent>
          <CardActions className="QCardRecommendationButtonPadding">
            <Button
              onClick={handleMore}
              size="small"
              className="QCardRecommendationButton"
            >
              Learn More
            </Button>
          </CardActions>
        </Link>
      </Card>
    </div>
  );
}

export default R1;
