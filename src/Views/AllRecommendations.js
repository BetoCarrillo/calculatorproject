import { Button, CardContent, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import React from "react";
import R1 from "../Components/R1";
import R2 from "../Components/R2";
import R3 from "../Components/R3";
import R4 from "../Components/R4";
import R5 from "../Components/R5";
import R6 from "../Components/R6";
import R7 from "../Components/R7";
import R8 from "../Components/R8";
import R9 from "../Components/R9";
import R10 from "../Components/R10";
import R11 from "../Components/R11";
import R12 from "../Components/R12";
import { useNavigate } from "react-router-dom";
import CClogo from "../styles/CClogo.png";

function AllRecommendations() {
  const redirectResults = useNavigate();
  const handleResults = () => {
    redirectResults("/Results");
  };
  return (
    <div className="QCardDiv">
      <h1 className="AreaHeading">HOUSING</h1>
      <Card className="QCardRecommendations">
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className="QTitleRecommendations"
          >
            Recommendations{" "}
          </Typography>
          <div className="RecommendationsDiv">
            <R1 />
            <R2 />
            <R3 />
            <R4 />
            <R5 />
            <R6 />
            <R7 />
            <R8 />
            <R9 />
            <R10 />
            <R11 />
            <R12 />
          </div>
        </CardContent>

        <div className="ButtonBackRecommendationsDiv">
          <button
            className="ButtonBackRecommendations"
            size="small"
            onClick={handleResults}
          >
            Back
          </button>
        </div>
      </Card>

      <div>
        <img src={CClogo} alt="Change Clubs logo" height={50}></img>
        <p className="PoweredbyText">Powered by</p>
      </div>
    </div>
  );
}

export default AllRecommendations;
