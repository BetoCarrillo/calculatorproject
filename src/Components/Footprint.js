import { Button, CardActions, CardContent, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import React, { useContext, useEffect, useState } from "react";
import { ResultsContext } from "../Context/context";

function Footprint() {
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

  const [Q12Calc, setQ12Calc] = useState();
  const [Q14Calc, setQ14Calc] = useState();

  const Q12Calculation = () => {
    if (inputQ1 === "Germany") {
      console.log("inputQ1", inputQ1);
      if (inputQ2 === "Detached house") {
        console.log("inputQ2", inputQ2);
        if (inputQ8 > 0) {
          console.log("M2MORE0", inputQ8);
          // let inputQ8Number = Number(inputQ8);
          // console.log("inputQ8Number", inputQ8Number);
          setQ12Calc(inputQ8 * 150 * 0.488);
          console.log("Q12CalcMORE0", Q12Calc);
        } else {
          console.log("M20LESS", inputQ8);
          setQ12Calc(9516);
          console.log("M20LESS", Q12Calc);
        }
      }
      if (inputQ2 === "Semi-detached house") {
        console.log("inputQ2", inputQ2);
        if (inputQ8 > 0) {
          console.log("M2MORE0", inputQ8);
          // let inputQ8Number = Number(inputQ8);
          // console.log("inputQ8Number", inputQ8Number);
          setQ12Calc(inputQ8 * 120 * 0.488);
          console.log("Q12CalcMORE0", Q12Calc);
        } else {
          console.log("M20LESS", inputQ8);
          setQ12Calc(6441, 6);
          console.log("M20LESS", Q12Calc);
        }
      }
      if (inputQ2 === "Apartment") {
        console.log("inputQ2", inputQ2);
        if (inputQ8 > 0) {
          console.log("M2MORE0", inputQ8);
          // let inputQ8Number = Number(inputQ8);
          // console.log("inputQ8Number", inputQ8Number);
          setQ12Calc(inputQ8 * 100 * 0.488);
          console.log("Q12CalcMORE0", Q12Calc);
        } else {
          console.log("M20LESS", inputQ8);
          setQ12Calc(2928);
          console.log("M20LESS", Q12Calc);
        }
      }
    }
  };

  // const Q14Calculation = () => {
  //   if (inputQ1 === "Germany") {
  //     console.log("inputQ1", inputQ1);
  //     if (inputQ2 === "Detached house") {
  //       console.log("inputQ2", inputQ2);
  //       if (inputQ8 > 0) {
  //         console.log("M2MORE0", inputQ8);
  //         let inputQ8Number = Number(inputQ8);
  //         console.log("inputQ8Number", inputQ8Number);
  //         setQ12Calc(inputQ8Number * 150 * 0.488);
  //         console.log("Q12CalcMORE0", Q12Calc);
  //       } else {
  //         console.log("M20LESS", inputQ8);
  //         setQ12Calc(9516);
  //         console.log("M20LESS", Q12Calc);
  //       }
  //     }
  //     if (inputQ2 === "Semi-detached house") {
  //       console.log("inputQ2", inputQ2);
  //       if (inputQ8 > 0) {
  //         console.log("M2MORE0", inputQ8);
  //         let inputQ8Number = Number(inputQ8);
  //         console.log("inputQ8Number", inputQ8Number);
  //         setQ12Calc(inputQ8Number * 120 * 0.488);
  //         console.log("Q12CalcMORE0", Q12Calc);
  //       } else {
  //         console.log("M20LESS", inputQ8);
  //         setQ12Calc(6441, 6);
  //         console.log("M20LESS", Q12Calc);
  //       }
  //     }
  //     if (inputQ2 === "Apartment") {
  //       console.log("inputQ2", inputQ2);
  //       if (inputQ8 > 0) {
  //         console.log("M2MORE0", inputQ8);
  //         let inputQ8Number = Number(inputQ8);
  //         console.log("inputQ8Number", inputQ8Number);
  //         setQ12Calc(inputQ8Number * 120 * 0.488);
  //         console.log("Q12CalcMORE0", Q12Calc);
  //       } else {
  //         console.log("M20LESS", inputQ8);
  //         setQ12Calc(6441, 6);
  //         console.log("M20LESS", Q12Calc);
  //       }
  //     }
  //   }
  // };

  useEffect(() => {
    Q12Calculation();
    // Q14Calculation();
  }, [Q12Calc, inputQ2]);

  return (
    <div>
      <div>
        <Card className="QCardFootprint">
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              className="QTitleFootprint"
            >
              Footprint{" "}
            </Typography>
            {Q12Calc}
          </CardContent>
          <div></div>
        </Card>
      </div>
    </div>
  );
}

export default Footprint;
