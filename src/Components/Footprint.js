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
  const [Trucks, setTrucks] = useState();
  const [Q12Calc, setQ12Calc] = useState();
  const [Q14Calc, setQ14Calc] = useState();
  const [Q15Calc, setQ15Calc] = useState();
  const [Q16Calc, setQ16Calc] = useState();
  let kg = Q12Calc + Q14Calc + Q15Calc + Q16Calc;

  const Q12Calculation = () => {
    if (inputQ1 === "Germany") {
      if (inputQ2 === "Detached house") {
        if (inputQ8 > 0) {
          setQ12Calc(inputQ8 * 150 * 0.488);
        } else {
          setQ12Calc(9516);
        }
      }
      if (inputQ2 === "Semi-detached house") {
        if (inputQ8 > 0) {
          setQ12Calc(inputQ8 * 120 * 0.488);
        } else {
          setQ12Calc(6441, 6);
        }
      }
      if (inputQ2 === "Flat") {
        if (inputQ8 > 0) {
          setQ12Calc(inputQ8 * 100 * 0.488);
        } else {
          setQ12Calc(2928);
        }
      }
    }
  };

  const Q14Calculation = () => {
    let DetachedConsumption = 20000;
    let SemiDetachedConsumption = 15000;
    let ApartConsumption = 10000;

    if (inputQ1 === "Germany") {
      if (inputQ2 === "Detached house") {
        if (inputQ14 === "Heat pump") {
          setQ14Calc(0 * 20000);
        }
      }
      if (inputQ2 === "Detached house") {
        if (inputQ14 === "Electricity") {
          setQ14Calc(0.6 * 20000);
        }
      }
      if (inputQ2 === "Detached house") {
        if (inputQ14 === "Methane") {
          setQ14Calc(0.3 * 20000);
        }
      }
      if (inputQ2 === "Detached house") {
        if (inputQ14 === "Heating oil") {
          setQ14Calc(0.35 * 20000);
        }
      }
      if (inputQ2 === "Detached house") {
        if (inputQ14 === "Wood pellets") {
          setQ14Calc(0.05 * 20000);
        }
      }
      if (inputQ2 === "Detached house") {
        if (inputQ14 === "Biogas") {
          setQ14Calc(0 * 20000);
        }
      }
      if (inputQ2 === "Detached house") {
        if (inputQ14 === "none") {
          setQ14Calc(0);
        }
      }
      if (inputQ2 === "Semi-detached house") {
        if (inputQ14 === "Heat pump") {
          setQ14Calc(0 * 15000);
        }
      }
      if (inputQ2 === "Semi-detached house") {
        if (inputQ14 === "Electricity") {
          setQ14Calc(0.6 * 15000);
        }
      }
      if (inputQ2 === "Semi-detached house") {
        if (inputQ14 === "Methane") {
          setQ14Calc(0.3 * 15000);
        }
      }
      if (inputQ2 === "Semi-detached house") {
        if (inputQ14 === "Heating oil") {
          setQ14Calc(0.35 * 15000);
        }
      }
      if (inputQ2 === "Semi-detached house") {
        if (inputQ14 === "Wood pellets") {
          setQ14Calc(0.05 * 15000);
        }
      }
      if (inputQ2 === "Semi-detached house") {
        if (inputQ14 === "Biogas") {
          setQ14Calc(0);
        }
      }

      if (inputQ2 === "Semi-detached house") {
        if (inputQ14 === "none") {
          setQ14Calc(0);
        }
      }
      if (inputQ2 === "Flat") {
        if (inputQ14 === "Heat pump") {
          setQ14Calc(0 * 10000);
        }
      }
      if (inputQ2 === "Flat") {
        if (inputQ14 === "Electricity") {
          setQ14Calc(0.6 * 10000);
        }
      }
      if (inputQ2 === "Flat") {
        if (inputQ14 === "Methane") {
          setQ14Calc(0.3 * 10000);
        }
      }
      if (inputQ2 === "Flat") {
        if (inputQ14 === "Heating oil") {
          setQ14Calc(0.35 * 10000);
        }
      }
      if (inputQ2 === "Flat") {
        if (inputQ14 === "Wood pellets") {
          setQ14Calc(0.05 * 10000);
        }
      }
      if (inputQ2 === "Flat") {
        if (inputQ14 === "Biogas") {
          setQ14Calc(0);
        }
      }
      if (inputQ2 === "Flat") {
        if (inputQ14 === "none") {
          setQ14Calc(0);
        }
      }
    }
  };
  const Q15Calculation = () => {
    let TO1 = 0.488;

    if (inputQ1 === "Germany") {
      if (inputQ2 === "Detached house") {
        if (inputQ15 === "Heat pump") {
          setQ15Calc(750 * TO1);
        }
      }
      if (inputQ2 === "Detached house") {
        if (inputQ15 === "Fans") {
          setQ15Calc(300 * TO1);
        }
      }
      if (inputQ2 === "Detached house") {
        if (inputQ15 === "A/C") {
          setQ15Calc(2000 * TO1);
        }
      }
      if (inputQ2 === "Detached house") {
        if (inputQ15 === "Natural ventilation") {
          setQ15Calc(0);
        }
      }

      if (inputQ2 === "Detached house") {
        if (inputQ15 === "none") {
          setQ15Calc(0);
        }
      }
      if (inputQ2 === "Semi-detached house") {
        if (inputQ15 === "Heat pump") {
          setQ15Calc(750 * 0.488);
        }
      }
      if (inputQ2 === "Semi-detached house") {
        if (inputQ15 === "Fans") {
          setQ15Calc(300 * TO1);
        }
      }
      if (inputQ2 === "Semi-detached house") {
        if (inputQ15 === "A/C") {
          setQ15Calc(2000 * TO1);
        }
      }
      if (inputQ2 === "Semi-detached house") {
        if (inputQ15 === "Natural ventilation") {
          setQ15Calc(0);
        }
      }
      if (inputQ2 === "Semi-detached house") {
        if (inputQ15 === "none") {
          setQ15Calc(0);
        }
      }
      if (inputQ2 === "Flat") {
        if (inputQ15 === "Heat pump") {
          setQ15Calc(650 * TO1);
        }
      }
      if (inputQ2 === "Flat") {
        if (inputQ15 === "Fans") {
          setQ15Calc(200 * TO1);
        }
      }
      if (inputQ2 === "Flat") {
        if (inputQ15 === "A/C") {
          setQ15Calc(1500 * TO1);
        }
      }
      if (inputQ2 === "Flat") {
        if (inputQ15 === "Natural ventilation") {
          setQ15Calc(0);
        }
      }
      if (inputQ2 === "Flat") {
        if (inputQ15 === "none") {
          setQ15Calc(0);
        }
      }
    }
  };

  const Q16Calculation = () => {
    let TO1 = 0.488;
    if (inputQ1 === "Germany") {
      if (inputQ2 === "Detached house") {
        if (inputQ16 === "Electricity") {
          setQ16Calc(4500 * TO1);
        }
      }
      if (inputQ2 === "Detached house") {
        if (inputQ16 === "Methane (natural gas)") {
          setQ16Calc(6000 * TO1);
        }
      }
      if (inputQ2 === "Detached house") {
        if (inputQ16 === "Biogas") {
          setQ16Calc(7000 * TO1);
        }
      }
      if (inputQ2 === "Detached house") {
        if (inputQ16 === "Solar Energy") {
          setQ16Calc(0);
        }
      }
      if (inputQ2 === "Detached house") {
        if (inputQ16 === "don't know") {
          setQ16Calc(2196);
        }
      }
      if (inputQ2 === "Semi-detached house") {
        if (inputQ16 === "Electricity") {
          setQ16Calc(4500 * TO1);
        }
      }
      if (inputQ2 === "Semi-detached house") {
        if (inputQ16 === "Methane (natural gas)") {
          setQ16Calc(6000 * TO1);
        }
      }
      if (inputQ2 === "Semi-detached house") {
        if (inputQ16 === "Biogas") {
          setQ16Calc(7000);
        }
      }
      if (inputQ2 === "Semi-detached house") {
        if (inputQ16 === "Solar Energy") {
          setQ16Calc(0);
        }
      }

      if (inputQ2 === "Semi-detached house") {
        if (inputQ16 === "don't know") {
          setQ16Calc(2196);
        }
      }

      if (inputQ2 === "Flat") {
        if (inputQ16 === "Electricity") {
          setQ16Calc(2500 * TO1);
        }
      }
      if (inputQ2 === "Flat") {
        if (inputQ16 === "Methane (natural gas)") {
          setQ16Calc(3000 * TO1);
        }
      }
      if (inputQ2 === "Flat") {
        if (inputQ16 === "Biogas") {
          setQ16Calc(4500 * TO1);
        }
      }
      if (inputQ2 === "Flat") {
        if (inputQ16 === "Solar Energy") {
          setQ16Calc(0);
        }
      }
      if (inputQ2 === "Flat") {
        if (inputQ16 === "don't know") {
          setQ16Calc(2196);
        }
      }
    }
  };

  const handleChangeKg = (event) => {
    setTrucks(false);
    // console.log("TrucksTon", Trucks);
    setCalcTotal(kg);
  };
  const handleChangeTon = (event) => {
    setTrucks(false);
    // console.log("TrucksTon", Trucks);
    setCalcTotal(kg / 1000);
  };

  const handleChangeTruck = (event) => {
    let TrucksRounded = Math.round(kg / 9600);
    setTrucks(true);
    setCalcTotal(TrucksRounded);
    // console.log("TrucksTruck", Trucks);
    // return Trucks;
  };

  // let Trucks = Math.round(kg / 9600);
  // let Trucks = 2;
  // let TrucksDigits = String(Trucks).split("");
  // console.log("TrucksDigits", TrucksDigits);

  // const handleChangeTruck = (event) => {
  // setCalcTotal(Trucks);

  //   const pushTucks = (Truck) => {
  //     if (Truck.length)
  //       Trucks.push(
  //         <span className="material-symbols-outlined IconPadding">
  //           local_shipping
  //         </span>
  //       );
  //     return Trucks;
  //   };
  // };

  useEffect(() => {
    // console.log("useeffect run");
    handleChangeKg();
    Q12Calculation();
    Q14Calculation();
    Q15Calculation();
    Q16Calculation();
    setTrucks();
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
                    value="truck"
                    control={<Radio />}
                    label={
                      <span className="material-symbols-outlined IconPadding">
                        local_shipping
                      </span>
                    }
                    onClick={handleChangeTruck}
                  />
                </RadioGroup>
              </FormControl>
            </CardContent>
            {Trucks !== true && !isNaN(CalcTotal) ? (
              <div className="DisableRecommendation"> Trucks not shown</div>
            ) : (
              <div className="CalculationTotal">
                <span className="CO2Text">
                  Your footprint is equivalent to &nbsp;
                </span>
                <span className="TrucksNumber"> {CalcTotal} </span>
                <span className="CO2Text">
                  {" "}
                  &nbsp; German truck annually &nbsp;
                </span>

                {/* <span className="material-symbols-outlined IconPadding">
                  {" "}
                  local_shipping
                </span> */}
              </div>
            )}

            {!isNaN(CalcTotal) && Trucks === true ? (
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

            {/* {CalcTotal &&
              CalcTotal.map((_truck, i) => (
                <span className="material-symbols-outlined IconPadding" key={i}>
                  local_shipping
                </span>
              ))} */}
            {/* {TrucksDigits &&
              TrucksDigits.map((_truck, i) => (
                <span className="material-symbols-outlined IconPadding" key={i}>
                  local_shipping
                </span>
              ))} */}
          </Card>
        )}
      </div>
    </div>
  );
}

export default Footprint;
