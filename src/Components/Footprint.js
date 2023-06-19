import {
  CardContent,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import Card from "@mui/material/Card";
import React, { useContext, useEffect, useState } from "react";
import { ResultsContext } from "../Context/context";

function Footprint() {
  const {
    inputQ1,
    inputQ2,
    inputQ8,
    inputQ14,
    inputQ15,
    inputQ16,
    CalcTotal,
    setCalcTotal,
  } = useContext(ResultsContext);

  const [Q12Calc, setQ12Calc] = useState();
  const [Q14Calc, setQ14Calc] = useState();
  const [Q15Calc, setQ15Calc] = useState();
  const [Q16Calc, setQ16Calc] = useState();
  let kg = Q12Calc + Q14Calc + Q15Calc + Q16Calc;

  const Q12Calculation = () => {
    if (inputQ1 === "Germany") {
      // console.log("inputQ1", inputQ1);
      if (inputQ2 === "Detached house") {
        // console.log("inputQ2", inputQ2);
        if (inputQ8 > 0) {
          // console.log("M2MORE0", inputQ8);
          // let inputQ8Number = Number(inputQ8);
          // console.log("inputQ8Number", inputQ8Number);
          setQ12Calc(inputQ8 * 150 * 0.488);
          // console.log("Q12CalcMORE0", Q12Calc);
        } else {
          // console.log("M20LESS", inputQ8);
          setQ12Calc(9516);
          // console.log("M20LESS", Q12Calc);
        }
      }
      if (inputQ2 === "Semi-detached house") {
        // console.log("inputQ2", inputQ2);
        if (inputQ8 > 0) {
          // console.log("M2MORE0", inputQ8);
          // let inputQ8Number = Number(inputQ8);
          // console.log("inputQ8Number", inputQ8Number);
          setQ12Calc(inputQ8 * 120 * 0.488);
          // console.log("Q12CalcMORE0", Q12Calc);
        } else {
          // console.log("M20LESS", inputQ8);
          setQ12Calc(6441, 6);
          // console.log("M20LESS", Q12Calc);
        }
      }
      if (inputQ2 === "Apartment") {
        // console.log("inputQ2", inputQ2);
        if (inputQ8 > 0) {
          // console.log("M2MORE0", inputQ8);
          // let inputQ8Number = Number(inputQ8);
          // console.log("inputQ8Number", inputQ8Number);
          setQ12Calc(inputQ8 * 100 * 0.488);
          // console.log("Q12CalcMORE0", Q12Calc);
        } else {
          // console.log("M20LESS", inputQ8);
          setQ12Calc(2928);
          // console.log("M20LESS", Q12Calc);
        }
      }
    }
  };

  const Q14Calculation = () => {
    let DetachedConsumption = 20000;
    let SemiDetachedConsumption = 15000;
    let ApartConsumption = 10000;

    if (inputQ1 === "Germany") {
      // console.log("inputQ1", inputQ1);
      if (inputQ2 === "Detached house") {
        // console.log("inputQ2", inputQ2);
        if (inputQ14 === "Heat pump") {
          // console.log("Heatpump", inputQ14);
          setQ14Calc(0 * 20000);
          // console.log("Q14Calc", Q14Calc);
        }
      }
      if (inputQ2 === "Detached house") {
        // console.log("inputQ2", inputQ2);
        if (inputQ14 === "Electricity") {
          // console.log("Electricity", inputQ14);
          setQ14Calc(0.6 * 20000);
          // console.log("Q14Calc", Q14Calc);
        }
      }
      if (inputQ2 === "Detached house") {
        // console.log("inputQ2", inputQ2);
        if (inputQ14 === "Methane") {
          // console.log("Methane", inputQ14);
          setQ14Calc(0.3 * 20000);
          // console.log("Q14Calc", Q14Calc);
        }
      }
      if (inputQ2 === "Detached house") {
        // console.log("inputQ2", inputQ2);
        if (inputQ14 === "Heating oil") {
          // console.log("Heating oil", inputQ14);
          setQ14Calc(0.35 * 20000);
          // console.log("Q14Calc", Q14Calc);
        }
      }
      if (inputQ2 === "Detached house") {
        // console.log("inputQ2", inputQ2);
        if (inputQ14 === "Wood pellets") {
          // console.log("Wood pellets", inputQ14);
          setQ14Calc(0.05 * 20000);
          // console.log("Q14Calc", Q14Calc);
        }
      }
      if (inputQ2 === "Detached house") {
        // console.log("inputQ2", inputQ2);
        if (inputQ14 === "Biogas") {
          // console.log("Biogas", inputQ14);
          setQ14Calc(0 * 20000);
          // console.log("Q14Calc", Q14Calc);
        }
      }
      if (inputQ2 === "Detached house") {
        // console.log("inputQ2", inputQ2);
        if (inputQ14 === "none") {
          // console.log("none", inputQ14);
          setQ14Calc(0);
          // console.log("Q14Calc", Q14Calc);
        }
      }
      if (inputQ2 === "Semi-detached house") {
        // console.log("inputQ2", inputQ2);
        if (inputQ14 === "Heat pump") {
          // console.log("Heatpump", inputQ14);
          setQ14Calc(0 * 15000);
          // console.log("Q14Calc", Q14Calc);
        }
      }
      if (inputQ2 === "Semi-detached house") {
        // console.log("inputQ2", inputQ2);
        if (inputQ14 === "Electricity") {
          // console.log("Electricity", inputQ14);
          setQ14Calc(0.6 * 15000);
          // console.log("Q14Calc", Q14Calc);
        }
      }
      if (inputQ2 === "Semi-detached house") {
        // console.log("inputQ2", inputQ2);
        if (inputQ14 === "Methane") {
          // console.log("Methane", inputQ14);
          setQ14Calc(0.3 * 15000);
          // console.log("Q14Calc", Q14Calc);
        }
      }
      if (inputQ2 === "Semi-detached house") {
        // console.log("inputQ2", inputQ2);
        if (inputQ14 === "Heating oil") {
          // console.log("Heating oil", inputQ14);
          setQ14Calc(0.35 * 15000);
          // console.log("Q14Calc", Q14Calc);
        }
      }
      if (inputQ2 === "Semi-detached house") {
        // console.log("inputQ2", inputQ2);
        if (inputQ14 === "Wood pellets") {
          // console.log("Wood pellets", inputQ14);
          setQ14Calc(0.05 * 15000);
          // console.log("Q14Calc", Q14Calc);
        }
      }
      if (inputQ2 === "Semi-detached house") {
        // console.log("inputQ2", inputQ2);
        if (inputQ14 === "Biogas") {
          // console.log("Biogas", inputQ14);
          setQ14Calc(0);
          // console.log("Q14Calc", Q14Calc);
        }
      }

      if (inputQ2 === "Semi-detached house") {
        // console.log("inputQ2", inputQ2);
        if (inputQ14 === "none") {
          // console.log("none", inputQ14);
          setQ14Calc(0);
          // console.log("Q14Calc", Q14Calc);
        }
      }
      if (inputQ2 === "Apartment") {
        // console.log("inputQ2", inputQ2);
        if (inputQ14 === "Heat pump") {
          // console.log("Heatpump", inputQ14);
          setQ14Calc(0 * 10000);
          // console.log("Q14Calc", Q14Calc);
        }
      }
      if (inputQ2 === "Apartment") {
        // console.log("inputQ2", inputQ2);
        if (inputQ14 === "Electricity") {
          // console.log("Electricity", inputQ14);
          setQ14Calc(0.6 * 10000);
          // console.log("Q14Calc", Q14Calc);
        }
      }
      if (inputQ2 === "Apartment") {
        // console.log("inputQ2", inputQ2);
        if (inputQ14 === "Methane") {
          console.log("Methane", inputQ14);
          setQ14Calc(0.3 * 10000);
          // console.log("Q14Calc", Q14Calc);
        }
      }
      if (inputQ2 === "Apartment") {
        // console.log("inputQ2", inputQ2);
        if (inputQ14 === "Heating oil") {
          // console.log("Heating oil", inputQ14);
          setQ14Calc(0.35 * 10000);
          // console.log("Q14Calc", Q14Calc);
        }
      }
      if (inputQ2 === "Apartment") {
        // console.log("inputQ2", inputQ2);
        if (inputQ14 === "Wood pellets") {
          // console.log("Wood pellets", inputQ14);
          setQ14Calc(0.05 * 10000);
          // console.log("Q14Calc", Q14Calc);
        }
      }
      if (inputQ2 === "Apartment") {
        // console.log("inputQ2", inputQ2);
        if (inputQ14 === "Biogas") {
          // console.log("Biogas", inputQ14);
          setQ14Calc(0);
          // console.log("Q14Calc", Q14Calc);
        }
      }
      if (inputQ2 === "Apartment") {
        // console.log("inputQ2", inputQ2);
        if (inputQ14 === "none") {
          // console.log("none", inputQ14);
          setQ14Calc(0);
          // console.log("Q14Calc", Q14Calc);
        }
      }
    }
  };
  const Q15Calculation = () => {
    let TO1 = 0.488;

    if (inputQ1 === "Germany") {
      // console.log("inputQ1", inputQ1);
      if (inputQ2 === "Detached house") {
        // console.log("inputQ2", inputQ2);
        if (inputQ15 === "Heat pump") {
          // console.log("Heatpump", inputQ15);
          setQ15Calc(750 * TO1);
          // console.log("Q15Calc", Q15Calc);
        }
      }
      if (inputQ2 === "Detached house") {
        // console.log("inputQ2", inputQ2);
        if (inputQ15 === "Fans") {
          // console.log("Fans", inputQ15);
          setQ15Calc(300 * TO1);
          // console.log("Q15Calc", Q15Calc);
        }
      }
      if (inputQ2 === "Detached house") {
        // console.log("inputQ2", inputQ2);
        if (inputQ15 === "A/C") {
          // console.log("A/C", inputQ15);
          setQ15Calc(2000 * TO1);
          // console.log("Q15Calc", Q15Calc);
        }
      }
      if (inputQ2 === "Detached house") {
        // console.log("inputQ2", inputQ2);
        if (inputQ15 === "Natural ventilation") {
          // console.log("Natural ventilation", inputQ15);
          setQ15Calc(0);
          // console.log("Q15Calc", Q15Calc);
        }
      }

      if (inputQ2 === "Detached house") {
        // console.log("inputQ2", inputQ2);
        if (inputQ15 === "none") {
          // console.log("none", inputQ15);
          setQ15Calc(0);
          // console.log("Q15Calc", Q15Calc);
        }
      }
      if (inputQ2 === "Semi-detached house") {
        // console.log("inputQ2", inputQ2);
        if (inputQ15 === "Heat pump") {
          // console.log("Heatpump", inputQ15);
          setQ15Calc(750 * 0.488);
          // console.log("Q15Calc", Q15Calc);
        }
      }
      if (inputQ2 === "Semi-detached house") {
        // console.log("inputQ2", inputQ2);
        if (inputQ15 === "Fans") {
          // console.log("Fans", inputQ15);
          setQ15Calc(300 * TO1);
          // console.log("Q15Calc", Q15Calc);
        }
      }
      if (inputQ2 === "Semi-detached house") {
        // console.log("inputQ2", inputQ2);
        if (inputQ15 === "A/C") {
          // console.log("A/C", inputQ15);
          setQ15Calc(2000 * TO1);
          // console.log("Q15Calc", Q15Calc);
        }
      }
      if (inputQ2 === "Semi-detached house") {
        // console.log("inputQ2", inputQ2);
        if (inputQ15 === "Natural ventilation") {
          // console.log("Natural ventilation", inputQ15);
          setQ15Calc(0);
          // console.log("Q15Calc", Q15Calc);
        }
      }
      if (inputQ2 === "Semi-detached house") {
        // console.log("inputQ2", inputQ2);
        if (inputQ15 === "none") {
          // console.log("none", inputQ15);
          setQ15Calc(0);
          // console.log("Q15Calc", Q15Calc);
        }
      }
      if (inputQ2 === "Apartment") {
        // console.log("inputQ2", inputQ2);
        if (inputQ15 === "Heat pump") {
          // console.log("Heatpump", inputQ15);
          setQ15Calc(650 * TO1);
          // console.log("Q15Calc", Q15Calc);
        }
      }
      if (inputQ2 === "Apartment") {
        // console.log("inputQ2", inputQ2);
        if (inputQ15 === "Fans") {
          // console.log("Fans", inputQ15);
          setQ15Calc(200 * TO1);
          // console.log("Q15Calc", Q15Calc);
        }
      }
      if (inputQ2 === "Apartment") {
        // console.log("inputQ2", inputQ2);
        if (inputQ15 === "A/C") {
          // console.log("A/C", inputQ15);
          setQ15Calc(1500 * TO1);
          // console.log("Q15Calc", Q15Calc);
        }
      }
      if (inputQ2 === "Apartment") {
        // console.log("inputQ2", inputQ2);
        if (inputQ15 === "Natural ventilation") {
          // console.log("Natural ventilation", inputQ15);
          setQ15Calc(0);
          // console.log("Q15Calc", Q15Calc);
        }
      }
      if (inputQ2 === "Apartment") {
        // console.log("inputQ2", inputQ2);
        if (inputQ15 === "none") {
          // console.log("none", inputQ15);
          setQ15Calc(0);
          // console.log("Q15Calc", Q15Calc);
        }
      }
    }
  };

  const Q16Calculation = () => {
    let TO1 = 0.488;
    if (inputQ1 === "Germany") {
      // console.log("inputQ1", inputQ1);
      if (inputQ2 === "Detached house") {
        // console.log("inputQ2", inputQ2);
        if (inputQ16 === "Electricity") {
          // console.log("Electricity", inputQ16);
          setQ16Calc(4500 * TO1);
          // console.log("Q16Calc", Q16Calc);
        }
      }
      if (inputQ2 === "Detached house") {
        // console.log("inputQ2", inputQ2);
        if (inputQ16 === "Methane (natural gas)") {
          // console.log("Methane (natural gas)", inputQ16);
          setQ16Calc(6000 * TO1);
          // console.log("Q16Calc", Q16Calc);
        }
      }
      if (inputQ2 === "Detached house") {
        // console.log("inputQ2", inputQ2);
        if (inputQ16 === "Biogas") {
          // console.log("Biogas", inputQ16);
          setQ16Calc(7000 * TO1);
          // console.log("Q16Calc", Q16Calc);
        }
      }
      if (inputQ2 === "Detached house") {
        // console.log("inputQ2", inputQ2);
        if (inputQ16 === "Solar Energy") {
          // console.log("Solar Energy", inputQ16);
          setQ16Calc(0);
          // console.log("Q16Calc", Q16Calc);
        }
      }
      if (inputQ2 === "Detached house") {
        // console.log("inputQ2", inputQ2);
        if (inputQ16 === "don't know") {
          // console.log("don't know", inputQ16);
          setQ16Calc(2196);
          // console.log("Q16Calc", Q16Calc);
        }
      }
      if (inputQ2 === "Semi-detached house") {
        // console.log("inputQ2", inputQ2);
        if (inputQ16 === "Electricity") {
          // console.log("Electricity", inputQ16);
          setQ16Calc(4500 * TO1);
          // console.log("Q16Calc", Q16Calc);
        }
      }
      if (inputQ2 === "Semi-detached house") {
        // console.log("inputQ2", inputQ2);
        if (inputQ16 === "Methane (natural gas)") {
          // console.log("Methane (natural gas)", inputQ16);
          setQ16Calc(6000 * TO1);
          // console.log("Q16Calc", Q16Calc);
        }
      }
      if (inputQ2 === "Semi-detached house") {
        // console.log("inputQ2", inputQ2);
        if (inputQ16 === "Biogas") {
          // console.log("Biogas", inputQ16);
          setQ16Calc(7000);
          // console.log("Q16Calc", Q16Calc);
        }
      }
      if (inputQ2 === "Semi-detached house") {
        // console.log("inputQ2", inputQ2);
        if (inputQ16 === "Solar Energy") {
          // console.log("Solar Energy", inputQ16);
          setQ16Calc(0);
          // console.log("Q16Calc", Q16Calc);
        }
      }

      if (inputQ2 === "Semi-detached house") {
        // console.log("inputQ2", inputQ2);
        if (inputQ16 === "don't know") {
          // console.log("don't know", inputQ16);
          setQ16Calc(2196);
          // console.log("Q16Calc", Q16Calc);
        }
      }

      if (inputQ2 === "Apartment") {
        // console.log("inputQ2", inputQ2);
        if (inputQ16 === "Electricity") {
          // console.log("Electricity", inputQ16);
          setQ16Calc(2500 * TO1);
          // console.log("Q16Calc", Q16Calc);
        }
      }
      if (inputQ2 === "Apartment") {
        // console.log("inputQ2", inputQ2);
        if (inputQ16 === "Methane (natural gas)") {
          // console.log("Methane (natural gas)", inputQ16);
          setQ16Calc(3000 * TO1);
          // console.log("Q16Calc", Q16Calc);
        }
      }
      if (inputQ2 === "Apartment") {
        // console.log("inputQ2", inputQ2);
        if (inputQ16 === "Biogas") {
          // console.log("Biogas", inputQ16);
          setQ16Calc(4500 * TO1);
        }
      }
      if (inputQ2 === "Apartment") {
        if (inputQ16 === "Solar Energy") {
          setQ16Calc(0);
        }
      }
      if (inputQ2 === "Apartment") {
        if (inputQ16 === "don't know") {
          setQ16Calc(2196);
        }
      }
    }
  };

  const handleChangeKg = (event) => {
    setCalcTotal(kg);
  };
  const handleChangeTon = (event) => {
    setCalcTotal(kg / 1000);
  };
  const handleChangeBiogas = (event) => {};

  useEffect(() => {
    // console.log("useeffect run");
    handleChangeKg();
    Q12Calculation();
    Q14Calculation();
    Q15Calculation();
    Q16Calculation();
  }, [Q12Calc, Q14Calc, Q15Calc, Q16Calc]);

  return (
    <div>
      <div>
        {isNaN(CalcTotal) ? (
          <div className="DisableRecommendation"> CALCULATION NOT READY</div>
        ) : (
          <Card className="QCardFootprint">
            <CardContent className="QCardFootprintTitleRadio ">
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className="QTitleFootprint "
              >
                Footprint{" "}
              </Typography>
              {/* {Q12Calc}
            <br></br>
            {Q14Calc}
            <br></br>
            {Q15Calc}
            <br></br>
            {Q16Calc}
            <br></br> */}
              {/* <br></br> Total {Q12Calc + Q14Calc + Q15Calc + Q16Calc} */}
              {/* <br></br>
            {CalcTotal} */}
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group "
                  name="controlled-radio-buttons-group"
                  defaultValue={"kg"}
                  className="QCardFootprintRadio"
                >
                  <FormControlLabel
                    value="kg"
                    control={<Radio />}
                    label="kg"
                    onClick={handleChangeKg}
                  />
                  <FormControlLabel
                    value="ton"
                    control={<Radio />}
                    label="ton"
                    onClick={handleChangeTon}
                  />

                  <FormControlLabel
                    value="Biogas"
                    control={<Radio />}
                    label={
                      <span className="material-symbols-outlined IconPadding">
                        local_shipping
                      </span>
                    }
                    onClick={handleChangeBiogas}
                  />
                </RadioGroup>
              </FormControl>
            </CardContent>
            {isNaN(CalcTotal) ? (
              <div className="DisableRecommendation">
                {" "}
                CALCULATION NOT READY
              </div>
            ) : (
              <div className="CalculationTotal">
                {" "}
                {CalcTotal} <span className="CO2Text">CO2e/year</span>{" "}
              </div>
            )}
          </Card>
        )}
      </div>
    </div>
  );
}

export default Footprint;
