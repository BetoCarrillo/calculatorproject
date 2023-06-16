import { Button, CardContent, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import React from "react";
import R1 from "./R1";
import R2 from "./R2";
import R3 from "./R3";
import R4 from "./R4";
import R5 from "./R5";
import R6 from "./R6";
import R7 from "./R7";
import R8 from "./R8";
import R9 from "./R9";
import R10 from "./R10";
import R11 from "./R11";
import R12 from "./R12";
import { useNavigate } from "react-router-dom";
import CClogo from "../styles/CClogo.png";

function AllRecommendations() {
  return (
    <div>
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

        {/* <div className="ButtonBackRecommendationsDiv">
          <button
            className="ButtonBackRecommendations"
            size="small"
            onClick={handleResults}
          >
            BACK
          </button>
        </div> */}
      </Card>
    </div>
  );
}

export default AllRecommendations;
