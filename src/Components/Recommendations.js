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
  const {
    SetInputQ1,
    inputQ1,
    inputQ2,
    inputQ3,
    inputQ4,
    inputQ5,
    inputQ6,
    inputQ7,
    inputQ8,
    inputQ9,
    inputQ10,
    inputQ11,
    inputQ12,
    inputQ13,
    inputQ14,
    inputQ15,
    inputQ16,
    inputQ17,
  } = useContext(ResultsContext);

  // console.log(inputQ5);
  const redirectRecommendations = useNavigate();
  const handleAllRecommendations = () => {
    redirectRecommendations("/AllRecommendations");
  };

  console.log("inputQ1", inputQ1);

  if (
    inputQ5 ===
    [
      "Doors and windows ",
      "Roof and attic ",
      "Floors and ceilings ",
      "Outer walls ",
      "Ducts and Pipes",
    ]
  ) {
    console.log("yes");
  } else {
    console.log("no");
  }

  if (inputQ1 === "Germany") {
    console.log("yes");
  } else {
    console.log("no");
  }

  useEffect(() => {
    console.log("useeffectrun");
  }, [inputQ1]);

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
              {/* {inputQ5 === ["yes"] ? <div className="disable"></div> : <R1 />} */}
              {/* {inputQ2 === "Heat pump" ? (
                <div className="disable"></div>
              ) : (
                <R2 />
              )} */}
              <R1 />
              <R2 />
              <R3 />
              {/* <R4 />
              <R5 />
              <R6 /> */}
              <R7 />
              <R8 />
              {/* <R9 /> */}
              <R10 />
              {/* <R11 />
              <R12 /> */}
            </div>

            <div className="ButtonAllRecommendationsDiv">
              <button
                className="ButtonAllRecommendations"
                onClick={handleAllRecommendations}
              >
                ALL
              </button>
            </div>
          </CardContent>
          <div></div>
        </Card>
      </div>
    </div>
  );
}

export default Recommendations;
