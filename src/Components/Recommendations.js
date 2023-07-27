import { Button, CardActions, CardContent, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import React, { useContext, useEffect } from "react";
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
import { ResultsContext } from "../Context/context";

function Recommendations() {
  const { inputQ3, inputQ5, inputQ6, inputQ7, inputQ13, inputQ14, inputQ15 } =
    useContext(ResultsContext);

  const redirectRecommendations = useNavigate();
  const handleAllRecommendations = () => {
    redirectRecommendations("/RecommendationsLinks");
  };

  return (
    <div>
      <div className="PaddingBottomPage">
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
              {inputQ5.toString() ===
              "Doors & windows ,Roof & attic ,Floors & ceilings ,Outer walls ,Ducts & Pipes" ? (
                <div className="DisableRecommendation">not</div>
              ) : (
                <R1 />
              )}
              {inputQ14 || inputQ15 === "Heat pump" ? (
                <div className="DisableRecommendation">not</div>
              ) : (
                <R2 />
              )}
              {inputQ6 === "yes" ? (
                <div className="DisableRecommendation">not</div>
              ) : (
                <R3 />
              )}
              {inputQ3 === "Rent" ? <R4 /> : <R5 />}
              {inputQ13 === "Solar" ? (
                <div className="DisableRecommendation">not</div>
              ) : (
                <R6 />
              )}
              <R7 />
              {inputQ7 === "yes" ? (
                <div className="DisableRecommendation">not</div>
              ) : (
                <R8 />
              )}
              {inputQ15 === "Natural ventilation" ? (
                <div className="DisableRecommendation">not</div>
              ) : (
                <R9 />
              )}
              {/* <R10 /> */}
              {/* <R11 />
              <R12 /> */}
            </div>

            <div className="ButtonAllRecommendationsDiv">
              <Button
                size="small"
                variant="contained"
                className="StartOverButton"
                onClick={handleAllRecommendations}
              >
                ALL RECOMMENDATIONS
              </Button>
            </div>
          </CardContent>
          <div></div>
        </Card>
      </div>
    </div>
  );
}

export default Recommendations;
